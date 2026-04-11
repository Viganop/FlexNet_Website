'use client';

import { MousePointer, Calendar, Wifi } from 'lucide-react';
import { PASSOS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  '01': <MousePointer className="w-5 h-5" />,
  '02': <Calendar className="w-5 h-5" />,
  '03': <Wifi className="w-5 h-5" />,
};

export function ComoFunciona() {
  return (
    <section className="py-24 relative overflow-hidden">
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

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Linha central - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50" />

          <div className="space-y-12 md:space-y-0">
            {PASSOS.map((passo, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={passo.numero} 
                  className={`relative md:flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Conteudo */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="group">
                      {/* Numero grande */}
                      <span className="text-8xl lg:text-9xl font-bold text-primary/10 leading-none block mb-2">
                        {passo.numero}
                      </span>
                      
                      {/* Titulo com icone */}
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary ${isEven ? 'md:order-2' : ''}`}>
                          {iconMap[passo.numero]}
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {passo.titulo}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {passo.descricao}
                      </p>
                    </div>
                  </div>

                  {/* Ponto central na linha - desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Espaco vazio do outro lado - desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Linha conectora - mobile */}
                  {index < PASSOS.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-primary/30 mx-auto my-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
