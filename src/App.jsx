import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   HOOK — revela ao entrar na viewport
───────────────────────────────────────────── */
function useInView(opts = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.12, ...opts });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   COMPONENTE — animação de entrada
───────────────────────────────────────────── */
function Reveal({ children, delay = 0, dir = "up", style: extraStyle = {}, ...props }) {
  const [ref, visible] = useInView();
  const t = { up: "translateY(28px)", down: "translateY(-28px)", left: "translateX(-28px)", right: "translateX(28px)" }[dir];
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : t,
      transition: `opacity 0.65s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.65s cubic-bezier(.4,0,.2,1) ${delay}ms`,
      ...extraStyle,
    }} {...props}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ÍCONES
───────────────────────────────────────────── */
const Ico = {
  WA: (s = 15) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  Check: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
  X: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
  Wifi: (s = 22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>,
  Bolt: (s = 24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  Shield: (s = 24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Users: (s = 24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Phone: (s = 22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3"/></svg>,
  Mail: (s = 26) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Pin: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Chevron: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>,
};

/* helpers de estilo inline */
const C = {
  accent: "#a2ddff", teal: "#89d4ff", muted: "#7a8aaa", white: "#fff",
  bg: "#0a0e1a", surf: "#111827", surf2: "#1a2235", danger: "#ff6b4a",
  green: "#25d366", red: "#ea4335",
  border: "rgba(255,255,255,0.07)", border2: "rgba(255,255,255,0.12)",
};
const tag = (color, bg, border) => ({
  display: "inline-block", fontSize: "0.7rem", fontWeight: 800,
  letterSpacing: "2.5px", textTransform: "uppercase",
  padding: "5px 14px", borderRadius: 40, marginBottom: 18,
  color, background: bg, border: `1px solid ${border}`,
});
const sectionH2 = { fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.7rem)", color: C.white, lineHeight: 1.2, marginBottom: 16 };
const hover = (enter, leave) => ({ onMouseEnter: enter, onMouseLeave: leave });

/* ════════════════════════════════════════════
   NAVBAR
════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [["#", "Home"], ["#problemas", "Por que nós?"], ["#planos", "Planos"], ["#contato", "Contato"]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,14,26,0.96)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}`, boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none", transition: "box-shadow 0.3s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 68, display: "flex", alignItems: "center", gap: 40 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 2, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.55rem", letterSpacing: "-0.5px", flexShrink: 0 }}>
          <span style={{ color: C.accent }}>Flex</span><span style={{ color: C.white }}>Net</span>
          <span style={{ fontSize: "0.58rem", letterSpacing: "3px", color: C.muted, marginLeft: 7, fontWeight: 700, alignSelf: "center" }}>TELECOM</span>
        </div>
        {/* Nav */}
        <nav className="fn-desk-nav" style={{ display: "flex", gap: 36, marginLeft: "auto" }}>
          {links.map(([href, label]) => (
            <a key={href+label} href={href} style={{ fontSize: "0.88rem", fontWeight: 600, color: C.muted, textDecoration: "none", letterSpacing: "0.3px", transition: "color 0.2s" }}
              {...hover(e => e.target.style.color = C.white, e => e.target.style.color = C.muted)}>{label}</a>
          ))}
        </nav>
        {/* WA CTA */}
        <a href="https://wa.me/5516996356696" target="_blank" rel="noreferrer" className="fn-desk-cta"
          style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 20px", background: C.green, color: C.white, fontWeight: 700, fontSize: "0.84rem", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0, transition: "background 0.2s, transform 0.15s" }}
          {...hover(e => { e.currentTarget.style.background = "#1eb858"; e.currentTarget.style.transform = "translateY(-1px)"; }, e => { e.currentTarget.style.background = C.green; e.currentTarget.style.transform = "none"; })}>
          {Ico.WA()} Falar no WhatsApp
        </a>
        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} className="fn-mob-toggle"
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4, marginLeft: "auto" }}>
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 24, height: 2, background: "#f0f4ff", borderRadius: 2, transition: "all 0.3s", transform: open ? (i===0?"translateY(7px) rotate(45deg)":i===2?"translateY(-7px) rotate(-45deg)":"none"):"none", opacity: open&&i===1?0:1 }} />)}
        </button>
      </div>
      {/* Mobile menu */}
      <div style={{ overflow: "hidden", maxHeight: open ? 280 : 0, transition: "max-height 0.35s cubic-bezier(.4,0,.2,1)", background: C.surf, borderTop: open ? `1px solid ${C.border}` : "none" }}>
        <div style={{ padding: "20px 32px", display: "flex", flexDirection: "column", gap: 18 }}>
          {links.map(([href, label]) => <a key={href+label} href={href} onClick={() => setOpen(false)} style={{ fontSize: "1rem", fontWeight: 600, color: C.muted, textDecoration: "none" }}>{label}</a>)}
          <a href="https://wa.me/5516996356696" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: C.green, color: C.white, fontWeight: 700, fontSize: "0.9rem", borderRadius: 8, textDecoration: "none", width: "fit-content" }}>{Ico.WA()} Falar no WhatsApp</a>
        </div>
      </div>
      {/* Banner */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "rgba(162,221,255,0.04)", padding: "7px 16px", fontSize: "0.78rem", color: C.muted, borderTop: `1px solid ${C.border}` }}>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent, opacity: 0.5, display: "inline-block" }} />
        Atendemos em <strong style={{ color: C.accent, margin: "0 3px" }}>São Carlos</strong>, <strong style={{ color: C.accent, margin: "0 3px" }}>Ibaté</strong> e <strong style={{ color: C.accent, margin: "0 3px" }}>Araraquara</strong>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent, opacity: 0.5, display: "inline-block" }} />
      </div>
    </header>
  );
}

/* ════════════════════════════════════════════
   HERO
════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "80px 32px", background: "url('hero-bg.jpg') center/cover no-repeat" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,14,26,.88),rgba(10,14,26,.65) 55%,rgba(10,14,26,.35))", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,200,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,200,.04) 1px,transparent 1px)", backgroundSize: "50px 50px", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle,rgba(245,166,35,.12),transparent 70%)", zIndex: 0, animation: "fn-pulse 4s ease-in-out infinite" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 3, animation: "fn-fadeup .8s ease both" }}>
        <p style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: C.teal, marginBottom: 20 }}>Conecte-se ao futuro</p>
        <h1 style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 40 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 300, color: C.white, letterSpacing: "-1px", lineHeight: 1 }}>INTERNET RÁPIDA</span>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 900, color: C.accent, letterSpacing: "-1px", lineHeight: 1 }}>PARA SUA CASA</span>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(1.2rem,3vw,2rem)", fontWeight: 400, color: C.muted, letterSpacing: "1px", marginTop: 8 }}>COM AS <strong style={{ color: C.white }}>MELHORES OPERADORAS</strong></span>
        </h1>
        <a href="#planos" style={{ display: "inline-block", padding: "16px 48px", background: "transparent", border: `2px solid ${C.white}`, color: C.white, fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", borderRadius: 8, textDecoration: "none", marginBottom: 32, transition: "all .25s" }}
          {...hover(e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.bg; e.currentTarget.style.transform = "translateY(-2px)"; }, e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.white; e.currentTarget.style.transform = "none"; })}>
          Ver Planos
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "1.2rem", color: C.accent }}>
          {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          <small style={{ fontSize: "0.8rem", color: C.muted, marginLeft: 8 }}>+2.000 clientes satisfeitos</small>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   MÉTRICAS
════════════════════════════════════════════ */
function Metricas() {
  const items = [["+2.000","Clientes ativos"],["99,9%","Uptime garantido"],["5","Operadoras parceiras"],["24/7","Suporte disponível"]];
  return (
    <section style={{ background: C.surf, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {items.map(([num, label], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <Reveal delay={i * 80}>
              <div style={{ padding: "28px 48px", textAlign: "center", minWidth: 140 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "2rem", fontWeight: 900, color: C.accent, lineHeight: 1, marginBottom: 4 }}>{num}</div>
                <div style={{ fontSize: "0.78rem", color: C.muted, fontWeight: 600, letterSpacing: "0.5px" }}>{label}</div>
              </div>
            </Reveal>
            {i < items.length - 1 && <div style={{ width: 1, height: 40, background: C.border2, flexShrink: 0 }} />}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PILAR CARD (com barra animada)
════════════════════════════════════════════ */
function PilarCard({ num, icon, title, desc, stat, pct, delay }) {
  const [ref, visible] = useInView({ threshold: 0.3 });
  return (
    <div ref={ref} style={{ background: C.surf, padding: "40px 32px", display: "flex", flexDirection: "column", gap: 16, position: "relative", cursor: "default", transition: "background .2s, opacity .6s, transform .6s", transitionDelay: `${delay}ms`, opacity: visible?1:0, transform: visible?"none":"translateY(24px)" }}
      {...hover(e=>e.currentTarget.style.background=C.surf2, e=>e.currentTarget.style.background=C.surf)}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${C.accent},transparent)`, opacity: visible?1:0, transition:`opacity .8s ${delay+200}ms` }} />
      <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.65rem", fontWeight:900, letterSpacing:"3px", color:"rgba(162,221,255,.25)" }}>{num}</div>
      <div style={{ width:48, height:48, borderRadius:12, background:"rgba(162,221,255,.07)", border:"1px solid rgba(162,221,255,.14)", display:"flex", alignItems:"center", justifyContent:"center", color:C.accent }}>{icon}</div>
      <div>
        <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"1.15rem", fontWeight:800, color:C.white, marginBottom:8 }}>{title}</h3>
        <p style={{ fontSize:"0.84rem", color:C.muted, lineHeight:1.75 }}>{desc}</p>
      </div>
      <div style={{ marginTop:8 }}>
        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"1.1rem", fontWeight:900, color:C.accent, display:"block", marginBottom:6 }}>{stat}</span>
        <div style={{ height:3, background:"rgba(162,221,255,.1)", borderRadius:2, overflow:"hidden" }}>
          <div style={{ height:"100%", width: visible?`${pct}%`:"0%", background:`linear-gradient(90deg,${C.accent},${C.teal})`, borderRadius:2, transition:`width 1.2s cubic-bezier(.4,0,.2,1) ${delay+300}ms` }} />
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   POR QUE FLEXNET
════════════════════════════════════════════ */
function PorqueFlexnet() {
  const badPills = ["Velocidade que cai no pico","Suporte que some quando precisa","Instalação que demora semanas"];
  const goodPills = ["Fibra óptica simétrica até 1 Giga","Atendimento humano 24 horas por dia","Instalação rápida sem burocracia"];
  const pilares = [
    { num:"01", icon:Ico.Bolt(24), title:"Velocidade que não engana", desc:"Fibra óptica simétrica: você contrata 600 Mega e recebe 600 Mega — no download e no upload. Sem asteriscos, sem letras miúdas.", stat:"até 1 Gbps", pct:100 },
    { num:"02", icon:Ico.Shield(24), title:"Estabilidade de verdade", desc:"Nossa infraestrutura de fibra garante conexão estável mesmo nos horários de pico. 99,9% de uptime — porque sua rotina não pode parar.", stat:"99,9% uptime", pct:99.9 },
    { num:"03", icon:Ico.Users(24), title:"Suporte que resolve", desc:"Equipe humana disponível 24 horas. Nada de robô, nada de fila. Quando você ligar, alguém vai atender — e vai resolver.", stat:"24/7 disponível", pct:100 },
  ];
  const comp = [
    ["Velocidade","Cai nos horários de pico","Fibra simétrica até 1 Giga"],
    ["Estabilidade","Quedas frequentes","99,9% de disponibilidade"],
    ["Suporte","Fila de espera e robôs","Atendimento humano 24/7"],
    ["Instalação","Agendamentos demorados","Rápida e sem burocracia"],
    ["Planos","Pacotes engessados","Opções para cada perfil"],
    ["Wi-Fi em casa","Sinal fraco em vários cômodos","Roteador incluso no plano"],
  ];

  const pillStyle = (bad) => ({
    display:"flex", alignItems:"center", gap:12, padding:"14px 18px", borderRadius:8,
    fontSize:"0.88rem", fontWeight:600, cursor:"default",
    background: bad?"rgba(232,51,10,.07)":"rgba(162,221,255,.06)",
    border: `1px solid ${bad?"rgba(232,51,10,.18)":"rgba(162,221,255,.18)"}`,
    color: bad?"#c0715a":"#f0f4ff",
    transition:"transform .15s",
  });

  return (
    <section id="problemas" style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>

      {/* MANIFESTO */}
      <div style={{ borderBottom:`1px solid ${C.border}`, padding:"96px 0 80px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
          <div className="fn-manifesto" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>

            <Reveal dir="left">
              <span style={tag("#ff6b4a","rgba(232,51,10,.1)","rgba(232,51,10,.22)")}>Por que a FlexNet?</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"clamp(2.2rem,4.5vw,3.6rem)", fontWeight:900, lineHeight:1.08, letterSpacing:"-0.5px", color:C.white, margin:"0 0 22px" }}>
                Enquanto outros<br/>
                <span style={{ color:"#ff6b4a", fontStyle:"italic" }}>te fazem esperar,</span><br/>
                <span style={{ color:C.accent }}>a gente te conecta.</span>
              </h2>
              <p style={{ fontSize:"1rem", color:C.muted, lineHeight:1.8, maxWidth:420, marginBottom:32 }}>
                Não somos mais uma operadora. Somos o elo entre você e as melhores redes de fibra da região — com quem cuida, responde e resolve de verdade.
              </p>
              <a href="#planos" style={{ display:"inline-flex", alignItems:"center", gap:6, fontFamily:"'Barlow Condensed',sans-serif", fontSize:"1rem", fontWeight:800, letterSpacing:"1px", color:C.accent, borderBottom:"1.5px solid rgba(162,221,255,.35)", paddingBottom:3, textDecoration:"none", transition:"all .2s" }}
                {...hover(e=>{e.currentTarget.style.color=C.white;e.currentTarget.style.borderColor="rgba(255,255,255,.5)";},e=>{e.currentTarget.style.color=C.accent;e.currentTarget.style.borderColor="rgba(162,221,255,.35)";})}>
                Ver os planos →
              </a>
            </Reveal>

            <Reveal dir="right" delay={120}>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {badPills.map((t,i) => (
                  <div key={i} style={pillStyle(true)} {...hover(e=>e.currentTarget.style.transform="translateX(4px)",e=>e.currentTarget.style.transform="none")}>
                    <div style={{ width:28, height:28, borderRadius:6, background:"rgba(232,51,10,.15)", color:"#ff6b4a", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{Ico.X()}</div>{t}
                  </div>
                ))}
                <div style={{ display:"flex", alignItems:"center", gap:12, margin:"6px 0" }}>
                  <div style={{ flex:1, height:1, background:C.border2 }} />
                  <span style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.muted, whiteSpace:"nowrap" }}>com a FlexNet é diferente</span>
                  <div style={{ flex:1, height:1, background:C.border2 }} />
                </div>
                {goodPills.map((t,i) => (
                  <div key={i} style={pillStyle(false)} {...hover(e=>e.currentTarget.style.transform="translateX(4px)",e=>e.currentTarget.style.transform="none")}>
                    <div style={{ width:28, height:28, borderRadius:6, background:"rgba(162,221,255,.12)", color:C.teal, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{Ico.Check()}</div>{t}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* PILARES */}
      <div style={{ borderBottom:`1px solid ${C.border}`, padding:"80px 0", background:C.surf }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
          <div className="fn-pilares" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:C.border2, border:`1px solid ${C.border2}`, borderRadius:14, overflow:"hidden" }}>
            {pilares.map((p,i) => <PilarCard key={i} {...p} delay={i*100} />)}
          </div>
        </div>
      </div>

    </section>
  );
}

/* ════════════════════════════════════════════
   PLANOS
════════════════════════════════════════════ */
const ADDON = { "15GB": 19.99, "20GB": 29.99 };

function PlanoCard({ op, mega, unit, features, preco, info, featured, cats, delay }) {
  const [open, setOpen] = useState(false);
  const [addons, setAddons] = useState({ "15GB":false, "20GB":false });
  const [ref, visible] = useInView();
  const base = parseFloat((preco||"0").replace(",","."));
  const total = base + (addons["15GB"]?ADDON["15GB"]:0) + (addons["20GB"]?ADDON["20GB"]:0);
  const disp = isNaN(base) ? preco : total.toFixed(2).replace(".",",");

  return (
    <div ref={ref} style={{ background:C.surf, border:`1px solid ${featured?C.accent:C.border2}`, boxShadow:featured?`0 0 0 1px ${C.accent},0 0 48px rgba(162,221,255,.08)`:0, borderRadius:14, padding:"30px 24px 26px", display:"flex", flexDirection:"column", gap:14, position:"relative", transition:"opacity .6s, transform .6s, box-shadow .22s", transitionDelay:`${delay}ms`, opacity:visible?1:0, transform:visible?"none":"translateY(24px)" }}
      {...hover(e=>{e.currentTarget.style.transform="translateY(-7px)";if(!featured)e.currentTarget.style.boxShadow="0 20px 50px rgba(0,0,0,.45)";},e=>{e.currentTarget.style.transform="none";if(!featured)e.currentTarget.style.boxShadow="none";})}>
      {featured && <div style={{ position:"absolute", top:-13, left:"50%", transform:"translateX(-50%)", background:C.accent, color:"#000", fontSize:"0.7rem", fontWeight:800, letterSpacing:"0.8px", padding:"5px 16px", borderRadius:40, whiteSpace:"nowrap" }}>🏆 Mais Popular</div>}
      <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.muted }}>{op}</div>
      <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"3.6rem", fontWeight:900, lineHeight:1, color:featured?"#e8330a":C.accent }}>
        {mega}<span style={{ fontSize:"1rem", fontWeight:700, color:C.muted, marginLeft:4, verticalAlign:"middle" }}>{unit}</span>
      </div>
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:7 }}>
        {features.map((f,i) => <li key={i} style={{ fontSize:"0.83rem", color:C.muted, paddingLeft:16, position:"relative" }}><span style={{ position:"absolute", left:0, color:C.teal, fontSize:"0.75rem" }}>✓</span><span dangerouslySetInnerHTML={{ __html:f }} /></li>)}
      </ul>
      <button onClick={()=>setOpen(o=>!o)} style={{ fontSize:"0.77rem", color:C.teal, fontWeight:600, background:"none", border:"none", cursor:"pointer", textAlign:"left", padding:0, transition:"color .2s" }}>
        {open?"Ocultar opções ↑":"Ver opções adicionais ↓"}
      </button>
      <div style={{ overflow:"hidden", maxHeight:open?120:0, transition:"max-height .35s cubic-bezier(.4,0,.2,1)", borderTop:open?`1px solid ${C.border}`:0, paddingTop:open?12:0 }}>
        <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
          {["15GB","20GB"].map(gb => (
            <label key={gb} style={{ fontSize:"0.79rem", color:C.muted, display:"flex", alignItems:"center", gap:8, cursor:"pointer" }}>
              <input type="checkbox" checked={addons[gb]} onChange={e=>setAddons(a=>({...a,[gb]:e.target.checked}))} style={{ accentColor:C.accent, width:13, height:13 }} />
              Móvel {gb} — <strong style={{ color:C.white }}>+R${gb==="15GB"?"19,99":"29,99"}</strong>
            </label>
          ))}
        </div>
      </div>
      <div style={{ display:"flex", alignItems:"baseline", gap:4, marginTop:"auto" }}>
        <span style={{ fontSize:"1rem", fontWeight:700, color:C.muted }}>R$</span>
        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"2.6rem", fontWeight:900, color:C.white, lineHeight:1 }}>{disp}</span>
        <span style={{ fontSize:"0.82rem", color:C.muted, marginLeft:2 }}>/mês</span>
      </div>
      <small style={{ fontSize:"0.7rem", color:C.muted, marginTop:-8 }}>{info}</small>
      <a href="https://wa.me/5516996356696" target="_blank" rel="noreferrer"
        style={{ display:"block", textAlign:"center", padding:14, borderRadius:8, background:featured?C.accent:"transparent", border:`1.5px solid ${featured?C.accent:C.border2}`, color:featured?"#000":C.white, fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.92rem", fontWeight:800, letterSpacing:"1.5px", textDecoration:"none", transition:"all .2s" }}
        {...hover(e=>{if(featured){e.currentTarget.style.background="#c9eaff";}else{e.currentTarget.style.borderColor=C.teal;e.currentTarget.style.color=C.teal;}},e=>{if(featured){e.currentTarget.style.background=C.accent;}else{e.currentTarget.style.borderColor=C.border2;e.currentTarget.style.color=C.white;}})}>
        Contratar agora
      </a>
    </div>
  );
}

function Planos() {
  const [filtro, setFiltro] = useState("internet");
  const filtros = [["internet","Internet"],["internet-celular","Internet + Celular"],["tv-internet","TV + Internet"],["planos-premium","Planos Premium"]];
  const todos = [
    { op:"Desktop Fibra", mega:"600", unit:"MEGA", features:["<strong>600 Mbps</strong> de download","<strong>600 Mbps</strong> de upload","Roteador Wi-Fi incluso","Instalação gratuita"], preco:"99,99", info:"Promoção por 6 meses. Após, consulte valores.", cats:["internet"], featured:true },
    { op:"Fibra Básica", mega:"400", unit:"MEGA", features:["<strong>400 Mbps</strong> de download","<strong>200 Mbps</strong> de upload","Roteador Wi-Fi incluso","Instalação gratuita"], preco:"XX,XX", info:"Consulte condições vigentes.", cats:["internet"], featured:false },
    { op:"Fibra + Mobile", mega:"700", unit:"MEGA", features:["<strong>700 Mbps</strong> de download","<strong>350 Mbps</strong> de upload","Linha móvel inclusa","Instalação gratuita"], preco:"XX,XX", info:"Consulte condições vigentes.", cats:["internet","internet-celular"], featured:false },
    { op:"Ultra Fibra", mega:"1", unit:"GIGA", features:["<strong>1.000 Mbps</strong> de download","<strong>500 Mbps</strong> de upload","Roteador dual-band incluso","Instalação gratuita"], preco:"XX,XX", info:"Consulte condições vigentes.", cats:["internet","tv-internet","planos-premium"], featured:false },
  ];
  const visible = todos.filter(p => filtro==="internet" || p.cats.includes(filtro));

  const ops = [
    { bg:"#6d2fb5", el:<><span>vivo</span><sup>✦</sup></> },
    { bg:"#009a5a", el:<><span>Algar</span><span style={{fontSize:"1.5rem",fontWeight:300}}>›</span></> },
    { bg:"#cc2820", el:<><div style={{fontSize:"1.4rem"}}>🖥</div><span style={{fontSize:"0.95rem"}}>DESKTOP</span></>, col:true },
    { bg:"#e63027", el:<><span>Claro</span><sup>✦</sup></> },
    { bg:"linear-gradient(135deg,#e5820a,#c45500)", el:<><span>HD<em style={{fontStyle:"normal",fontSize:"0.6rem",letterSpacing:"4px",color:"rgba(255,255,255,0.65)"}}>NET</em></span><small style={{fontSize:"0.6rem",letterSpacing:"3px"}}>FIBRA</small></>, col:true },
  ];

  return (
    <section id="planos" style={{ background:C.bg, padding:"88px 0", borderBottom:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>

        {/* Operadoras */}
        <Reveal>
          <div style={{ marginBottom:56, paddingBottom:48, borderBottom:`1px solid ${C.border}` }}>
            <p style={{ textAlign:"center", fontSize:"0.75rem", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.muted, marginBottom:28 }}>
              Trabalhamos com as maiores operadoras do Brasil
            </p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              {ops.map((op, i) => (
                <Reveal key={i} delay={i*60} dir="up">
                  <div style={{ width:136, height:76, borderRadius:14, display:"flex", flexDirection:op.col?"column":"row", alignItems:"center", justifyContent:"center", gap:4, fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"1.25rem", cursor:"pointer", color:C.white, background:op.bg, letterSpacing:"0.5px", transition:"transform .2s,box-shadow .2s" }}
                    {...hover(e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 10px 28px rgba(0,0,0,.45)";},e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";})}>
                    {op.el}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={tag(C.accent,"rgba(162,221,255,.08)","rgba(162,221,255,.18)")}>Nossos Planos</span>
            <h2 style={sectionH2}>Escolha o plano ideal <strong style={{ color:C.accent }}>para você</strong></h2>
            <p style={{ fontSize:"0.95rem", color:C.muted, maxWidth:520, margin:"0 auto", lineHeight:1.75 }}>Todos os planos incluem fibra óptica, instalação gratuita e suporte completo.</p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:44 }}>
            {filtros.map(([id,label]) => (
              <button key={id} onClick={()=>setFiltro(id)}
                style={{ padding:"9px 22px", borderRadius:40, border:"1px solid", borderColor:filtro===id?C.accent:C.border2, background:filtro===id?C.accent:"transparent", color:filtro===id?"#000":C.muted, fontFamily:"'Barlow',sans-serif", fontSize:"0.84rem", fontWeight:600, cursor:"pointer", transition:"all .2s" }}>
                {label}
              </button>
            ))}
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:20, marginBottom:28 }}>
          {visible.map((p,i) => <PlanoCard key={p.op} {...p} delay={i*80} />)}
        </div>
        <p style={{ fontSize:"0.73rem", color:"#3a4a6a", textAlign:"center" }}>* Velocidades conforme plano e operadora. Sujeito a disponibilidade de cobertura.</p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   COMO FUNCIONA
════════════════════════════════════════════ */
function ComoFunciona() {
  const steps = [
    { num:"01", icon:Ico.Phone(22), title:"Escolha seu plano", desc:"Navegue pelos planos e selecione o que melhor se encaixa no seu uso e orçamento." },
    { num:"02", icon:Ico.WA(22), title:"Fale com a gente", desc:"Nossa equipe confirma disponibilidade e agenda a instalação pelo WhatsApp, sem burocracia." },
    { num:"03", icon:Ico.Check(22), title:"Conectado!", desc:"Técnico especializado instala tudo no prazo. Você começa a navegar no mesmo dia." },
  ];
  return (
    <section style={{ background:C.surf, padding:"88px 0", borderBottom:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={tag(C.accent,"rgba(162,221,255,.08)","rgba(162,221,255,.18)")}>Simples assim</span>
            <h2 style={sectionH2}>Da escolha à conexão em <strong style={{ color:C.accent }}>poucos passos</strong></h2>
          </div>
        </Reveal>
        <div className="fn-passos" style={{ display:"flex", alignItems:"flex-start", justifyContent:"center" }}>
          {steps.map((s,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center" }}>
              <Reveal delay={i*120} dir="up">
                <div style={{ maxWidth:280, textAlign:"center", padding:"0 24px", display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.7rem", fontWeight:900, letterSpacing:"3px", color:"rgba(162,221,255,.35)" }}>{s.num}</div>
                  <div style={{ width:56, height:56, borderRadius:14, background:"rgba(162,221,255,.07)", border:"1px solid rgba(162,221,255,.15)", display:"flex", alignItems:"center", justifyContent:"center", color:C.accent }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"1.1rem", fontWeight:800, color:C.white }}>{s.title}</h3>
                  <p style={{ fontSize:"0.84rem", color:C.muted, lineHeight:1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
              {i < steps.length-1 && <div style={{ color:"rgba(162,221,255,.3)", flexShrink:0, paddingTop:28 }}>{Ico.Chevron()}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CONTATO
════════════════════════════════════════════ */
function Contato() {
  const cards = [
    { href:"https://wa.me/5516996356696", icon:Ico.WA(26), label:"WhatsApp", valor:"16 99635–6696", acao:"Iniciar conversa →", iB:"rgba(37,211,102,.1)", iBd:"rgba(37,211,102,.2)", iC:C.green, cB:"rgba(37,211,102,.04)", cBd:"rgba(37,211,102,.3)", hBd:"rgba(37,211,102,.55)" },
    { href:"mailto:flexnettelecom@gmail.com", icon:Ico.Mail(), label:"E-mail", valor:"flexnettelecom@gmail.com", acao:"Enviar mensagem →", iB:"rgba(234,67,53,.1)", iBd:"rgba(234,67,53,.2)", iC:C.red, cB:C.surf, cBd:C.border2, hBd:"rgba(234,67,53,.4)" },
  ];
  return (
    <section id="contato" style={{ background:C.bg, padding:"88px 0", borderBottom:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
        <div className="fn-contato" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <Reveal dir="left">
            <span style={tag(C.accent,"rgba(162,221,255,.08)","rgba(162,221,255,.18)")}>Atendimento</span>
            <h2 style={{ ...sectionH2, marginBottom:14 }}>Pronto para ter uma <strong style={{ color:C.accent }}>internet de verdade?</strong></h2>
            <p style={{ fontSize:"0.9rem", color:C.muted, lineHeight:1.75, marginBottom:24 }}>Nossa equipe está disponível para tirar dúvidas, apresentar planos e agendar sua instalação. Sem robôs, sem espera longa.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {[[Ico.Pin(),"São Carlos · Ibaté · Araraquara"],[Ico.Clock(),"Atendimento disponível 24 horas por dia"]].map(([icon,text],i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:10, fontSize:"0.85rem", color:C.muted }}><span style={{ color:C.accent }}>{icon}</span>{text}</div>
              ))}
            </div>
          </Reveal>
          <Reveal dir="right" delay={100}>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {cards.map((c,i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer"
                  style={{ background:c.cB, border:`1px solid ${c.cBd}`, borderRadius:14, padding:"24px 26px", display:"flex", alignItems:"center", gap:18, textDecoration:"none", transition:"transform .2s,border-color .2s,box-shadow .2s" }}
                  {...hover(e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.borderColor=c.hBd;e.currentTarget.style.boxShadow="0 12px 36px rgba(0,0,0,.4)";},e=>{e.currentTarget.style.transform="none";e.currentTarget.style.borderColor=c.cBd;e.currentTarget.style.boxShadow="none";})}>
                  <div style={{ width:52, height:52, borderRadius:12, background:c.iB, border:`1px solid ${c.iBd}`, display:"flex", alignItems:"center", justifyContent:"center", color:c.iC, flexShrink:0 }}>{c.icon}</div>
                  <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
                    <span style={{ fontSize:"0.69rem", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.muted }}>{c.label}</span>
                    <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"1.05rem", fontWeight:800, color:C.white }}>{c.valor}</span>
                    <span style={{ fontSize:"0.77rem", color:C.accent }}>{c.acao}</span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════ */
function Footer() {
  const cols = [
    { title:"Navegação", links:[["#","Home"],["#problemas","Por que nós?"],["#planos","Planos"],["#contato","Fale Conosco"]] },
    { title:"Planos", links:[["#planos","Internet Fibra"],["#planos","Internet + Celular"],["#planos","TV + Internet"],["#planos","Planos Premium"],["#contato","Solicitar Instalação"]] },
  ];
  return (
    <footer style={{ background:"#050810" }}>
      <div style={{ padding:"64px 32px 52px", borderTop:`1px solid ${C.border}` }}>
        <div className="fn-footer" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1.8fr 1fr 1fr", gap:52 }}>
          <div>
            <div style={{ display:"flex", alignItems:"baseline", gap:2, fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"1.75rem", marginBottom:14 }}>
              <span style={{ color:C.accent }}>Flex</span><span style={{ color:C.white }}>Net</span>
              <span style={{ fontSize:"0.58rem", letterSpacing:"3px", color:C.muted, marginLeft:7, fontWeight:700, alignSelf:"center" }}>TELECOM</span>
            </div>
            <p style={{ fontSize:"0.84rem", color:C.muted, lineHeight:1.75, marginBottom:22 }}>Internet fibra óptica para sua casa,<br/>com as melhores operadoras da região.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {[["📞","(16) 99635–6696"],["📍","São Carlos · Ibaté · Araraquara"]].map(([ic,t],i)=>(
                <span key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:"0.82rem", color:C.muted }}><span style={{ color:C.accent }}>{ic}</span>{t}</span>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.68rem", fontWeight:900, letterSpacing:"2.5px", textTransform:"uppercase", color:C.muted, marginBottom:20 }}>{col.title}</h4>
              <ul style={{ listStyle:"none" }}>
                {col.links.map(([href,label],i) => (
                  <li key={i} style={{ marginBottom:12 }}>
                    <a href={href} style={{ fontSize:"0.86rem", color:"#3d4e6a", textDecoration:"none", transition:"color .2s" }}
                      {...hover(e=>e.target.style.color=C.white,e=>e.target.style.color="#3d4e6a")}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop:`1px solid ${C.border}`, padding:"20px 32px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
          <p style={{ fontSize:"0.74rem", color:"#242f47" }}>© 2025 FlexNet Telecom — Todos os direitos reservados.</p>
          <div style={{ display:"flex", gap:20 }}>
            {["Política de Privacidade","Termos de Uso"].map(t=>(
              <a key={t} href="#" style={{ fontSize:"0.74rem", color:"#242f47", textDecoration:"none", transition:"color .2s" }}
                {...hover(e=>e.target.style.color=C.muted,e=>e.target.style.color="#242f47")}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   CSS GLOBAL + APP
════════════════════════════════════════════ */
const G = `
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Barlow',sans-serif;background:#0a0e1a;color:#f0f4ff;line-height:1.6;overflow-x:hidden}
a{text-decoration:none;color:inherit}
@keyframes fn-pulse{0%,100%{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
@keyframes fn-fadeup{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}

@media(max-width:768px){
  .fn-desk-nav,.fn-desk-cta{display:none!important}
  .fn-mob-toggle{display:flex!important}
  .fn-manifesto{grid-template-columns:1fr!important;gap:40px!important}
  .fn-pilares{grid-template-columns:1fr!important}
  .fn-passos{flex-direction:column!important;align-items:center!important;gap:8px!important}
  .fn-contato{grid-template-columns:1fr!important;gap:40px!important}
  .fn-footer{grid-template-columns:1fr!important;gap:36px!important}
}
@media(max-width:1024px){
  .fn-manifesto{gap:48px!important}
  .fn-pilares{grid-template-columns:1fr!important}
}
`;

export default function App() {
  return (
    <>
      <style>{G}</style>
      <Navbar />
      <Hero />
      <Metricas />
      <PorqueFlexnet />
      <Planos />
      <ComoFunciona />
      <Contato />
      <Footer />
    </>
  );
}
