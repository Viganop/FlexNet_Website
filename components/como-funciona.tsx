'use client';

import { MousePointer, Calendar, Wifi } from 'lucide-react';
import { PASSOS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  '01': <MousePointer className="w-8 h-8" />,
  '02': <Calendar className="w-8 h-8" />,
  '03': <Wifi className="w-8 h-8" />,
};

export function ComoFunciona() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Simples e rápido
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Como funciona a{' '}
            <span className="gradient-text">instalação?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Em apenas 3 passos você já está navegando com a melhor internet da região.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PASSOS.map((passo, index) => (
            <div key={passo.numero} className="relative">
              {/* Connector Line */}
              {index < PASSOS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              <div className="glass-card rounded-3xl p-8 text-center relative z-10 hover:glow transition-all duration-300">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  {iconMap[passo.numero]}
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {passo.numero}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {passo.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {passo.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
