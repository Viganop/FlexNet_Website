'use client';

import { PASSOS } from '@/lib/constants';

export function ComoFunciona() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Instalacao
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Simples e{' '}
            <span className="gradient-text">rapido</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Em apenas 3 passos voce ja esta navegando com a melhor internet da regiao.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {PASSOS.map((passo, index) => (
              <div key={passo.numero} className="relative">
                {/* Connector Line - desktop */}
                {index < PASSOS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] border-t-2 border-dashed border-primary/30" />
                )}
                
                <div className="text-center">
                  {/* Number */}
                  <div className={`
                    w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold
                    ${index === PASSOS.length - 1 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                      : 'bg-secondary/50 border-2 border-border text-foreground'
                    }
                  `}>
                    {passo.numero}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
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

      </div>
    </section>
  );
}
