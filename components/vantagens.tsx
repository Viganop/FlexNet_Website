'use client';

import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const BENEFICIOS = [
  'Velocidade real, sem surpresas',
  'Fibra optica 100% dedicada',
  'Instalacao gratuita em ate 48h',
  'Suporte humano 24/7',
  'Cancelamento sem multa',
  'Wi-Fi de ultima geracao incluso',
];

export function Vantagens() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero saber mais sobre a FlexNet.`, '_blank');
  };

  return (
    <section id="vantagens" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Por que FlexNet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance leading-tight">
              Internet que{' '}
              <span className="gradient-text">realmente funciona</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Nao somos apenas mais uma operadora. Somos parceiros da sua conexao, 
              comprometidos em entregar a melhor experiencia de internet da regiao.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {BENEFICIOS.map((beneficio, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{beneficio}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              Quero assinar
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime garantido</div>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">2h</div>
              <div className="text-muted-foreground">Tempo medio de instalacao</div>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">5min</div>
              <div className="text-muted-foreground">Resposta do suporte</div>
            </div>
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <div className="text-4xl lg:text-5xl font-bold mb-2">1 Gbps</div>
              <div className="text-primary-foreground/70">Velocidade maxima</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
