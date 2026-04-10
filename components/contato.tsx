'use client';

import { MessageCircle, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER, EMAIL } from '@/lib/constants';

export function Contato() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Preciso de ajuda.`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Precisa de{' '}
            <span className="gradient-text">ajuda?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossa equipe está pronta para atender você a qualquer momento.
            Escolha o canal de sua preferência.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <div className="glass-card rounded-3xl p-8 text-center hover:glow transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">WhatsApp</h3>
            <p className="text-muted-foreground mb-6">
              Resposta rápida e atendimento humanizado
            </p>
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Iniciar conversa
            </Button>
          </div>

          {/* Email */}
          <div className="glass-card rounded-3xl p-8 text-center hover:glow transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">E-mail</h3>
            <p className="text-muted-foreground mb-6">
              Para assuntos que precisam de documentação
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full border-border hover:bg-secondary"
            >
              <a href={`mailto:${EMAIL}`}>Enviar e-mail</a>
            </Button>
          </div>

          {/* Phone */}
          <div className="glass-card rounded-3xl p-8 text-center hover:glow transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Telefone</h3>
            <p className="text-muted-foreground mb-6">
              Ligue diretamente para nossa central
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full border-border hover:bg-secondary"
            >
              <a href="tel:+551633334444">(16) 3333-4444</a>
            </Button>
          </div>
        </div>

        {/* 24h Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Atendimento <span className="text-foreground font-semibold">24 horas</span>, 7 dias por semana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
