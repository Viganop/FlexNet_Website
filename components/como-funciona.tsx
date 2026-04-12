'use client';

import { MousePointer, CalendarDays, Wifi } from 'lucide-react';
import { PASSOS } from '@/lib/constants';

const ICONS = [MousePointer, CalendarDays, Wifi];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Processo Simples
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Como funciona a{' '}
            <span className="gradient-text">instalacao?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Em apenas 3 passos voce ja esta navegando com a melhor internet da regiao.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-6 relative">

            {PASSOS.map((passo, index) => {
              const Icon = ICONS[index];
              const isLast = index === PASSOS.length - 1;

              return (
                <div key={passo.numero} className="relative flex flex-col items-center text-center">

                  {/* Dashed connector line between circles */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+44px)] w-[calc(100%-44px)] border-t-2 border-dashed border-primary/40 z-0" />
                  )}

                  {/* Circle with icon */}
                  <div className="relative mb-6 z-10">
                    <div className={`
                      w-20 h-20 rounded-full flex items-center justify-center
                      ${isLast
                        ? 'bg-primary shadow-xl shadow-primary/40'
                        : 'bg-secondary/60 border border-border/60 backdrop-blur-sm'
                      }
                    `}>
                      <Icon className={`w-8 h-8 ${isLast ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                    {/* Step number badge */}
                    <span className={`
                      absolute -bottom-1 -right-1 w-6 h-6 rounded-full text-xs font-bold
                      flex items-center justify-center
                      ${isLast
                        ? 'bg-primary-foreground text-primary'
                        : 'bg-border text-foreground'
                      }
                    `}>
                      {passo.numero}
                    </span>
                  </div>

                  <h3 className={`text-lg font-semibold mb-2 ${isLast ? 'text-primary' : 'text-foreground'}`}>
                    {passo.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
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
