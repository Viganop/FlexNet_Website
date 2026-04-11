'use client';

import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PLANOS, WHATSAPP_NUMBER } from '@/lib/constants';
import { Plano } from '@/lib/types';

function PlanoCard({ plano, index }: { plano: Plano; index: number }) {
  const handleAssinar = () => {
    const message = `Olá! Quero assinar o plano ${plano.nome} de ${plano.velocidade}MB por R$${plano.preco.toFixed(2).replace('.', ',')}/mes.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
        plano.destaque
          ? 'bg-primary text-primary-foreground ring-2 ring-primary shadow-lg shadow-primary/20'
          : 'bg-secondary/30 border border-border/50 hover:border-primary/30'
      }`}
    >
      {/* Destaque Badge */}
      {plano.destaque && (
        <div className="absolute -top-3 left-6">
          <span className="bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
            Mais popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className={`text-lg font-semibold mb-1 ${plano.destaque ? 'text-primary-foreground' : 'text-foreground'}`}>
          {plano.nome}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl lg:text-5xl font-bold ${plano.destaque ? 'text-primary-foreground' : 'text-foreground'}`}>
            {plano.velocidade}
          </span>
          <span className={`text-lg ${plano.destaque ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
            Mbps
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-sm ${plano.destaque ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>R$</span>
          <span className={`text-3xl font-bold ${plano.destaque ? 'text-primary-foreground' : 'text-foreground'}`}>
            {plano.preco.toFixed(2).replace('.', ',')}
          </span>
          <span className={`text-sm ${plano.destaque ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>/mes</span>
        </div>
      </div>

      {/* Benefits */}
      <ul className="space-y-3 mb-8">
        {plano.beneficios.slice(0, 4).map((beneficio, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`w-5 h-5 shrink-0 ${plano.destaque ? 'text-primary-foreground' : 'text-primary'}`} />
            <span className={`text-sm ${plano.destaque ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              {beneficio}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={handleAssinar}
        className={`w-full group ${
          plano.destaque
            ? 'bg-foreground text-background hover:bg-foreground/90'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        }`}
      >
        Assinar
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}

export function Planos() {
  return (
    <section id="planos" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Escolha a velocidade ideal{' '}
            <span className="gradient-text">para voce</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Todos os planos incluem instalacao gratuita, sem fidelidade e suporte 24 horas.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANOS.map((plano, index) => (
            <PlanoCard key={plano.id} plano={plano} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Precisa de um plano empresarial?{' '}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Preciso de um plano empresarial.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
