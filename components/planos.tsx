'use client';

import { Check, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { PLANOS, WHATSAPP_NUMBER } from '@/lib/constants';
import { Plano } from '@/lib/types';

function PlanoCard({ plano }: { plano: Plano }) {
  const handleAssinar = () => {
    const message = `Olá! Quero assinar o plano ${plano.nome} de ${plano.velocidade}MB por R$${plano.preco.toFixed(2).replace('.', ',')}/mês.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Separar parte inteira e decimal do preço
  const precoStr = plano.preco.toFixed(2).replace('.', ',');
  const [precoInt, precioDec] = precoStr.split(',');

  return (
    <div className={`relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden
      ${plano.destaque
        ? 'border-primary bg-secondary/40 shadow-xl shadow-primary/20'
        : 'border-border/50 bg-secondary/20 hover:border-primary/40'
      }`}
    >
      {/* Badge "Mais Popular" */}
      {plano.destaque && (
        <div className="flex justify-center pt-4">
          <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            Mais Popular
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Nome */}
        <h3 className="text-lg font-bold text-foreground text-center mb-4">
          {plano.nome}
        </h3>

        {/* Velocidade */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-primary shrink-0" />
          <span className="text-5xl font-extrabold text-primary leading-none">{plano.velocidade}</span>
          <span className="text-muted-foreground text-base self-end mb-1">MB</span>
        </div>

        {/* Preço */}
        <div className="flex items-baseline justify-center gap-1 mb-5">
          <span className="text-muted-foreground text-sm">R$</span>
          <span className="text-5xl font-extrabold text-foreground leading-none">{precoInt}</span>
          <span className="text-muted-foreground text-sm">,{precioDec}/mês</span>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 mb-5" />

        {/* Benefícios */}
        <ul className="space-y-3 mb-8 flex-1">
          {plano.beneficios.map((b, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          onClick={handleAssinar}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className={`w-full py-3 rounded-lg text-base font-semibold transition-shadow
            ${plano.destaque
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:shadow-xl'
              : 'bg-transparent border border-border/60 text-foreground hover:border-primary/50'
            }`}
        >
          Assinar Agora
        </motion.button>
      </div>
    </div>
  );
}

export function Planos() {
  return (
    <section id="planos" className="py-24 relative">
      <div className="container mx-auto px-4">

        {/* Header */}
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANOS.map((plano) => (
            <PlanoCard key={plano.id} plano={plano} />
          ))}
        </div>

        {/* Footer */}
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
