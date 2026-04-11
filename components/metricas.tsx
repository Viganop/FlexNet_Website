'use client';

import { Wifi, Zap, Shield, Users } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Velocidade Real',
    description: 'Entregamos a velocidade contratada. Sem surpresas.',
  },
  {
    icon: Shield,
    title: 'Estabilidade Total',
    description: 'Fibra optica 100% dedicada. Sem oscilacoes.',
  },
  {
    icon: Users,
    title: 'Suporte Humanizado',
    description: 'Atendimento real, 24h por dia. Sem robos.',
  },
  {
    icon: Wifi,
    title: 'Sem Fidelidade',
    description: 'Cancele quando quiser. Sem multas.',
  },
];

export function Metricas() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
