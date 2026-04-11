'use client';

import { Zap, Shield, Headphones, Unlock } from 'lucide-react';
import { PILARES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap className="w-7 h-7" />,
  shield: <Shield className="w-7 h-7" />,
  headphones: <Headphones className="w-7 h-7" />,
  unlock: <Unlock className="w-7 h-7" />,
};

export function Vantagens() {
  return (
    <section id="vantagens" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Nossos diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Por que escolher a{' '}
            <span className="gradient-text">FlexNet?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nao somos apenas mais uma operadora. Somos parceiros da sua conexao, 
            comprometidos em entregar a melhor experiencia de internet da regiao.
          </p>
        </div>

        {/* Pilares - Layout horizontal com linha conectora */}
        <div className="relative max-w-6xl mx-auto">
          {/* Linhas horizontais entre circulos - desktop */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+60px)] w-[calc(25%-70px)] h-px bg-primary/30" />
          <div className="hidden lg:block absolute top-12 left-[calc(37.5%+30px)] w-[calc(25%-60px)] h-px bg-primary/30" />
          <div className="hidden lg:block absolute top-12 left-[calc(62.5%+30px)] w-[calc(25%-70px)] h-px bg-primary/30" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {PILARES.map((pilar, index) => (
              <div
                key={pilar.id}
                className="group text-center relative"
              >
                {/* Icone com efeito */}
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-secondary transition-all duration-300">
                    {iconMap[pilar.icone]}
                  </div>
                  {/* Numero */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                
                {/* Titulo */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {pilar.titulo}
                </h3>
                
                {/* Descricao */}
                <p className="text-muted-foreground leading-relaxed">
                  {pilar.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
