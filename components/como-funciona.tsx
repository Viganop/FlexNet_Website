'use client';

import { MousePointer, Calendar, Wifi } from 'lucide-react';
import { PASSOS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  '01': <MousePointer className="w-6 h-6" />,
  '02': <Calendar className="w-6 h-6" />,
  '03': <Wifi className="w-7 h-7" />,
};

export function ComoFunciona() {
  const isLastStep = (index: number) => index === PASSOS.length - 1;

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

        {/* Steps - Layout horizontal com linha tracejada */}
        <div className="max-w-4xl mx-auto">
          {/* Container dos steps */}
          <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-8">
            
            {/* Linhas tracejadas entre circulos - desktop */}
            <div className="hidden lg:block absolute top-10 left-[calc(16.66%+50px)] w-[calc(33.33%-60px)] border-t-2 border-dashed border-primary/40" />
            <div className="hidden lg:block absolute top-10 left-[calc(50%+30px)] w-[calc(33.33%-60px)] border-t-2 border-dashed border-primary/40" />
            
            {/* Linhas tracejadas entre circulos - mobile */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[90px] h-[calc(33.33%-30px)] border-l-2 border-dashed border-primary/40" />
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[calc(33.33%+90px)] h-[calc(33.33%-30px)] border-l-2 border-dashed border-primary/40" />

            {PASSOS.map((passo, index) => (
              <div key={passo.numero} className="flex-1 flex flex-col items-center text-center relative z-10">
                {/* Circulo com icone */}
                <div className={`
                  relative mb-6
                  ${isLastStep(index) ? 'scale-110' : ''}
                `}>
                  {/* Glow effect para o ultimo */}
                  {isLastStep(index) && (
                    <div className="absolute inset-0 w-20 h-20 -translate-x-0 -translate-y-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
                  )}
                  
                  {/* Circulo principal */}
                  <div className={`
                    relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
                    ${isLastStep(index) 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50 ring-4 ring-primary/30' 
                      : 'bg-secondary/80 border-2 border-primary/30 text-primary'
                    }
                  `}>
                    {iconMap[passo.numero]}
                  </div>

                  {/* Badge do numero - todos com fundo branco e texto preto */}
                  <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center bg-foreground text-background">
                    {passo.numero}
                  </span>
                </div>
                
                <h3 className={`
                  text-xl font-semibold mb-3 transition-colors
                  ${isLastStep(index) ? 'text-primary' : 'text-foreground'}
                `}>
                  {passo.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-[250px]">
                  {passo.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
