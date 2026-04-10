'use client';

import { useEffect, useRef, useState } from 'react';
import { METRICAS } from '@/lib/constants';

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numValue = parseFloat(value.replace(/[.,]/g, ''));
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(numValue * easeOut);
            
            // Format with original separators
            if (value.includes('.')) {
              setDisplayValue(current.toLocaleString('pt-BR'));
            } else if (value.includes(',')) {
              setDisplayValue(current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
            } else {
              setDisplayValue(current.toString());
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
      {displayValue}
      {suffix && <span className="text-primary">{suffix}</span>}
    </div>
  );
}

export function Metricas() {
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {METRICAS.map((metrica, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl glass-card hover:glow transition-all duration-300"
            >
              <AnimatedNumber value={metrica.valor} suffix={metrica.sufixo} />
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">{metrica.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
