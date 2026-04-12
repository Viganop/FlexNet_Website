'use client';

import { useEffect, useRef } from 'react';

interface PlasmaProps {
  color1?: string;
  color2?: string;
  speed?: number;
  direction?: 'forward' | 'reverse' | 'pingpong';
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const VERT = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;
uniform vec2  iResolution;
uniform float iTime;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2  uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;

  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);

  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w / d * o.xyz) {
    p = z * normalize(vec3(C - .5 * r, r.y));
    p.z -= 4.;
    S = p;
    d = p.y - T;
    p.x += .4 * (1. + p.y) * sin(d + p.x * 0.1) * cos(.34 * d + p.x * 0.05);
    Q = p.xz *= mat2(cos(p.y + vec4(0, 11, 33, 0) - T));
    z += d = abs(sqrt(length(Q * Q)) - .25 * (5. + S.y)) / 3. + 8e-4;
    o = 1. + sin(S.y + p.z * .5 + S.z - length(S - p) + vec4(2, 1, 0, 8));
  }

  o.xyz = tanh(O / 1e4);
}

bool finite1(float x) { return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c) {
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);

  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  /* mix entre as duas cores usando a intensidade do plasma como fator */
  vec3 twoColor = mix(uColor1, uColor2, intensity) * (intensity * 1.8 + 0.2);
  vec3 finalColor = mix(rgb, twoColor, step(0.5, uUseCustomColor));

  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;

export default function Plasma({
  color1           = '#1a3aff',
  color2           = '#8b21f5',
  speed            = 1,
  direction        = 'forward',
  scale            = 1,
  opacity          = 1,
  mouseInteractive = true,
}: PlasmaProps) {
  const containerRef    = useRef<HTMLDivElement>(null);
  // Guardar props em refs para não mudar o tamanho do dep array
  const propsRef = useRef({ color1, color2, speed, direction, scale, opacity, mouseInteractive });
  propsRef.current = { color1, color2, speed, direction, scale, opacity, mouseInteractive };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const p = propsRef.current;

    // ── canvas ──────────────────────────────────────────────────────────────
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'display:block;width:100%;height:100%;';
    container.appendChild(canvas);

    const gl = canvas.getContext('webgl2', { alpha: true, antialias: false });
    if (!gl) { container.removeChild(canvas); return; }

    // ── helpers ──────────────────────────────────────────────────────────────
    function compileShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error('Shader error:', gl!.getShaderInfoLog(s));
        gl!.deleteShader(s);
        return null;
      }
      return s;
    }

    const vs = compileShader(gl.VERTEX_SHADER,   VERT);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Program error:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    // ── fullscreen triangle (covers clip-space with 3 vertices) ──────────────
    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    // position: big triangle that covers NDC + uv
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  0, 0,
       3, -1,  2, 0,
      -1,  3,  0, 2,
    ]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, 'position');
    const uvLoc  = gl.getAttribLocation(prog, 'uv');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc,  2, gl.FLOAT, false, 16, 8);

    // ── uniforms ──────────────────────────────────────────────────────────────
    const U = {
      iTime:             gl.getUniformLocation(prog, 'iTime'),
      iResolution:       gl.getUniformLocation(prog, 'iResolution'),
      uColor1:           gl.getUniformLocation(prog, 'uColor1'),
      uColor2:           gl.getUniformLocation(prog, 'uColor2'),
      uUseCustomColor:   gl.getUniformLocation(prog, 'uUseCustomColor'),
      uSpeed:            gl.getUniformLocation(prog, 'uSpeed'),
      uDirection:        gl.getUniformLocation(prog, 'uDirection'),
      uScale:            gl.getUniformLocation(prog, 'uScale'),
      uOpacity:          gl.getUniformLocation(prog, 'uOpacity'),
      uMouse:            gl.getUniformLocation(prog, 'uMouse'),
      uMouseInteractive: gl.getUniformLocation(prog, 'uMouseInteractive'),
    };

    gl.uniform3f(U.uColor1,           ...hexToRgb(p.color1!));
    gl.uniform3f(U.uColor2,           ...hexToRgb(p.color2!));
    gl.uniform1f(U.uUseCustomColor,   1.0);
    gl.uniform1f(U.uSpeed,            p.speed * 0.4);
    gl.uniform1f(U.uDirection,        p.direction === 'reverse' ? -1.0 : 1.0);
    gl.uniform1f(U.uScale,            p.scale);
    gl.uniform1f(U.uOpacity,          p.opacity);
    gl.uniform2f(U.uMouse,            0, 0);
    gl.uniform1f(U.uMouseInteractive, p.mouseInteractive ? 1.0 : 0.0);

    // ── resize ────────────────────────────────────────────────────────────────
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      const w = Math.max(1, Math.floor(container!.offsetWidth  * dpr));
      const h = Math.max(1, Math.floor(container!.offsetHeight * dpr));
      canvas.width  = w;
      canvas.height = h;
      gl!.viewport(0, 0, w, h);
      gl!.uniform2f(U.iResolution, w, h);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // ── mouse ─────────────────────────────────────────────────────────────────
    function onMouse(e: MouseEvent) {
      if (!propsRef.current.mouseInteractive) return;
      const rect = container!.getBoundingClientRect();
      gl!.uniform2f(U.uMouse, (e.clientX - rect.left) * dpr, (e.clientY - rect.top) * dpr);
    }
    if (p.mouseInteractive) container.addEventListener('mousemove', onMouse);

    // ── render loop ───────────────────────────────────────────────────────────
    let raf = 0;
    const t0 = performance.now();

    function loop(now: number) {
      let t = (now - t0) * 0.001;
      const { direction: dir } = propsRef.current;

      if (dir === 'pingpong') {
        const dur = 10;
        const seg = t % dur;
        const fwd = Math.floor(t / dur) % 2 === 0;
        const u   = seg / dur;
        const sm  = u * u * (3 - 2 * u);
        t = fwd ? sm * dur : (1 - sm) * dur;
        gl!.uniform1f(U.uDirection, 1.0);
      }

      gl!.uniform1f(U.iTime, t);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // ── cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (propsRef.current.mouseInteractive) container.removeEventListener('mousemove', onMouse);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
      try { container.removeChild(canvas); } catch {}
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className="w-full h-full" />;
}
