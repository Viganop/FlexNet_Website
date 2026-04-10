'use client';

import { MousePointer, Calendar, Wifi, ArrowRight } from 'lucide-react';
import { PASSOS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  '01': <MousePointer className="w-7 h-7" />,
  '02': <Calendar className="w-7 h-7" />,
  '03': <Wifi className="w-7 h-7" />,
};

const colorMap: Record<string, { ring: string; icon: string; num: string }> = {
  '01': { ring: 'ring-primary/30', icon: 'text-primary', num: 'text-primary/20' },
  '02': { ring: 'ring-primary/50', icon: 'text-primary', num: 'text-primary/20' },
  '03': { ring: 'ring-primary/30', icon: 'text-primary', num: 'text-primary/20' },
};

export function ComoFunciona() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            Simples e rápido
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Como funciona a{' '}
            <span className="gradient-text">instalação?</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 leading-relaxed">
            Em apenas 3 passos você já está navegando com a melhor internet da região.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">

          {/* Linha conectora desktop */}
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {PASSOS.map((passo, index) => {
              const colors = colorMap[passo.numero];
              return (
                <div key={passo.numero} className="flex flex-col items-center text-center group">

                  {/* Número + ícone */}
                  <div className="relative mb-6">
                    {/* Anel externo pulsante */}
                    <div className={`absolute inset-0 rounded-full ring-2 ${colors.ring} scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                    <div className="w-28 h-28 rounded-full bg-secondary/60 border border-primary/20 flex flex-col items-center justify-center gap-1 relative z-10 group-hover:border-primary/50 group-hover:bg-secondary transition-all duration-300">
                      <span className={`text-xs font-black tracking-[0.2em] ${colors.num} group-hover:text-primary/40 transition-colors`}>
                        {passo.numero}
                      </span>
                      <span className={`${colors.icon}`}>{iconMap[passo.numero]}</span>
                    </div>
                  </div>

                  {/* Seta mobile entre passos */}
                  {index < PASSOS.length - 1 && (
                    <ArrowRight className="md:hidden w-5 h-5 text-primary/40 rotate-90 mb-4 -mt-2" />
                  )}

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {passo.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
                    {passo.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
