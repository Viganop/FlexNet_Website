'use client';

import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function Hero() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero assinar a FlexNet.`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Internet Fibra 100% Real</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Conexão que</span>
            <br />
            <span className="gradient-text glow-text">nunca para</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed text-pretty">
            Internet fibra óptica de verdade. Velocidade real, estabilidade garantida 
            e suporte humano 24 horas. Sem surpresas, sem fidelidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow text-lg px-8 py-6 group"
            >
              Ver Planos
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-foreground text-lg px-8 py-6 group"
              onClick={() => document.getElementById('vantagens')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2 text-primary" />
              Por que FlexNet?
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 sm:left-1/2 sm:-translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
