'use client';

import { MousePointer, Calendar, Wifi, ArrowRight } from 'lucide-react';
import { PASSOS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  '01': <MousePointer className="w-6 h-6" />,
  '02': <Calendar className="w-6 h-6" />,
  '03': <Wifi className="w-6 h-6" />,
};

export function ComoFunciona() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Processo simples
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Como funciona a{' '}
            <span className="gradient-text">instalacao?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Em apenas 3 passos voce ja esta navegando com a melhor internet da regiao.
          </p>
        </div>

        {/* Steps - Layout horizontal fluido */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
            {PASSOS.map((passo, index) => (
              <div key={passo.numero} className="flex-1 flex flex-col lg:flex-row items-center">
                {/* Step content */}
                <div className="flex-1 text-center lg:px-6">
                  {/* Numero grande de fundo */}
                  <div className="relative inline-block mb-4">
                    <span className="text-[120px] lg:text-[150px] font-bold text-primary/10 leading-none select-none">
                      {passo.numero}
                    </span>
                    {/* Icone centralizado */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary">
                      {iconMap[passo.numero]}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {passo.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                    {passo.descricao}
                  </p>
                </div>

                {/* Seta entre steps - desktop */}
                {index < PASSOS.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center shrink-0 -mx-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                )}

                {/* Seta entre steps - mobile */}
                {index < PASSOS.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center rotate-90">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
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
