'use client';

import { Star, Quote } from 'lucide-react';
import { DEPOIMENTOS } from '@/lib/constants';

export function Depoimentos() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Fundo azul cobalto sólido */}
      <div className="absolute inset-0 bg-[#0a1628]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-white">
            Avaliações
          </h2>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {DEPOIMENTOS.map((dep) => (
            <div
              key={dep.id}
              className="group relative flex flex-col gap-4 rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* Quote decorativo */}
              <Quote className="w-7 h-7 text-primary/30 shrink-0" />

              {/* Estrelas */}
              <div className="flex gap-0.5">
                {[...Array(dep.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{dep.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.07]">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold leading-tight">
                    {dep.nome}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">
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
