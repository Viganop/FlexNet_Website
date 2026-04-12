'use client';

import { Star } from 'lucide-react';
import { DEPOIMENTOS } from '@/lib/constants';

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            O que dizem{' '}
            <span className="gradient-text">nossos clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mais de 2.000 clientes satisfeitos em toda a nossa area de cobertura.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {DEPOIMENTOS.map((dep) => (
            <div
              key={dep.id}
              className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(dep.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{dep.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold shrink-0">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <div className="text-foreground font-medium text-sm">
                    {dep.nome}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {dep.cidade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
