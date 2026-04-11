'use client';

import { Zap, Shield, Headphones, Unlock, Check } from 'lucide-react';
import { PILARES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  headphones: <Headphones className="w-6 h-6" />,
  unlock: <Unlock className="w-6 h-6" />,
};

export function Vantagens() {
  return (
    <section id="vantagens" className="py-24 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo - Texto Principal */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Nossos diferenciais
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Por que escolher a{' '}
              <span className="gradient-text">FlexNet?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Nao somos apenas mais uma operadora. Somos parceiros da sua conexao, 
              comprometidos em entregar a melhor experiencia de internet da regiao.
            </p>

            {/* Lista de beneficios rapidos */}
            <div className="space-y-4">
              {[
                'Velocidade real, sem surpresas',
                'Fibra optica 100% dedicada',
                'Instalacao em ate 48 horas',
                'Cancelamento sem multa',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Grid de Pilares */}
          <div className="grid grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden">
            {PILARES.map((pilar, index) => (
              <div
                key={pilar.id}
                className="group bg-background p-8 hover:bg-secondary/30 transition-colors duration-300 relative"
              >
                {/* Icone */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                  {iconMap[pilar.icone]}
                </div>
                
                {/* Titulo */}
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {pilar.titulo}
                </h3>
                
                {/* Descricao */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pilar.descricao}
                </p>

                {/* Numero decorativo */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
