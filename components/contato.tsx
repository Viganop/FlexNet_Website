'use client';

import { Clock } from 'lucide-react';
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

        {/* Contact Cards — 2 colunas */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* WhatsApp */}
          <div className="glass-card rounded-3xl p-8 text-center hover:glow transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              {/* Ícone oficial WhatsApp SVG */}
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="#25d366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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

          {/* E-mail */}
          <div className="glass-card rounded-3xl p-8 text-center hover:glow transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              {/* Ícone Gmail SVG */}
              <svg className="w-9 h-9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                <path d="M24 5.457v.48L12 13.09 0 5.937v-.48c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#FBBC05"/>
              </svg>
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
