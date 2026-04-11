'use client';

import { Star, Quote } from 'lucide-react';
import { DEPOIMENTOS } from '@/lib/constants';

export function Depoimentos() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            O que nossos clientes{' '}
            <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mais de 2.000 clientes satisfeitos em toda a nossa area de cobertura.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {DEPOIMENTOS.map((dep, index) => (
            <div
              key={dep.id}
              className="group glass-card rounded-2xl p-6 hover:glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote decorativo */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(dep.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                &ldquo;{dep.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <div className="text-foreground font-semibold leading-tight">
                    {dep.nome}
                  </div>
                  <div className="text-muted-foreground text-sm mt-0.5">
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
