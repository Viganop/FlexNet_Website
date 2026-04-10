'use client';

import { Zap, Shield, Headphones, Unlock } from 'lucide-react';
import { PILARES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  headphones: <Headphones className="w-8 h-8" />,
  unlock: <Unlock className="w-8 h-8" />,
};

export function Vantagens() {
  return (
    <section id="vantagens" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Nossos diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Por que escolher a{' '}
            <span className="gradient-text">FlexNet?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Não somos apenas mais uma operadora. Somos parceiros da sua conexão, 
            comprometidos em entregar a melhor experiência de internet da região.
          </p>
        </div>

        {/* Manifesto Card */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 max-w-4xl mx-auto gradient-border">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-center leading-relaxed text-foreground">
            &ldquo;Acreditamos que internet de qualidade não deveria ser luxo. 
            Por isso, entregamos <span className="gradient-text">velocidade real</span>, 
            cobramos <span className="gradient-text">preço justo</span> e tratamos 
            você como <span className="gradient-text">gente de verdade</span>.&rdquo;
          </blockquote>
        </div>

        {/* Pilares Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILARES.map((pilar, index) => (
            <div
              key={pilar.id}
              className="group glass-card rounded-2xl p-6 hover:glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                {iconMap[pilar.icone]}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {pilar.titulo}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
