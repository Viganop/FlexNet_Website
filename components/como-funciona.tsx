'use client';

import { MousePointer, Calendar, Wifi, ChevronRight } from 'lucide-react';
import { PASSOS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  '01': <MousePointer className="w-6 h-6" />,
  '02': <Calendar className="w-6 h-6" />,
  '03': <Wifi className="w-6 h-6" />,
};

export function ComoFunciona() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Processo simples
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Como funciona a{' '}
            <span className="gradient-text">instalação?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Em apenas 3 passos você já está navegando com a melhor internet da região.
          </p>
        </div>

        {/* Steps - Layout horizontal com setas */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {PASSOS.map((passo, index) => (
              <div key={passo.numero} className="relative flex">
                {/* Card */}
                <div className="group glass-card rounded-2xl p-6 flex-1 hover:glow transition-all duration-500 hover:-translate-y-2">
                  {/* Número e Ícone */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {iconMap[passo.numero]}
                    </div>
                    <span className="text-5xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors">
                      {passo.numero}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {passo.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>

                {/* Seta entre cards - desktop */}
                {index < PASSOS.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                    <ChevronRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
