'use client';

import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PLANOS, WHATSAPP_NUMBER } from '@/lib/constants';
import { Plano } from '@/lib/types';

function PlanoCard({ plano }: { plano: Plano }) {
  const handleAssinar = () => {
    const message = `Olá! Quero assinar o plano ${plano.nome} de ${plano.velocidade}MB por R$${plano.preco.toFixed(2).replace('.', ',')}/mês.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
        plano.destaque
          ? 'glass-card gradient-border glow'
          : 'glass-card'
      }`}
    >
      {/* Destaque Badge */}
      {plano.destaque && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            Mais Popular
          </div>
        </div>
      )}

      {/* Plan Name */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground">{plano.nome}</h3>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-4xl font-bold gradient-text">{plano.velocidade}</span>
          <span className="text-muted-foreground">MB</span>
        </div>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-muted-foreground text-lg">R$</span>
          <span className="text-5xl font-bold text-foreground">
            {Math.floor(plano.preco)}
          </span>
          <span className="text-muted-foreground">
            ,{((plano.preco % 1) * 100).toFixed(0).padStart(2, '0')}/mês
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-8" />

      {/* Benefits */}
      <ul className="space-y-4 mb-8">
        {plano.beneficios.map((beneficio, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-muted-foreground">{beneficio}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={handleAssinar}
        className={`w-full py-6 text-lg ${
          plano.destaque
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        Assinar Agora
      </Button>
    </div>
  );
}

export function Planos() {
  return (
    <section id="planos" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Nossos planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Escolha a velocidade ideal{' '}
            <span className="gradient-text">para você</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Todos os planos incluem instalação gratuita, sem fidelidade e suporte 24 horas.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PLANOS.map((plano) => (
            <PlanoCard key={plano.id} plano={plano} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Precisa de um plano empresarial?{' '}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Preciso de um plano empresarial.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
