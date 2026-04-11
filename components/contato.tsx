'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function Contato() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero assinar a FlexNet.`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* CTA Card */}
          <div className="p-12 lg:p-16 rounded-3xl bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-foreground rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                Pronto para ter a melhor internet da regiao?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                Fale com nosso time agora mesmo e comece a navegar com velocidade real. 
                Instalacao gratuita e sem fidelidade.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 group"
                >
                  Falar com consultor
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <a 
                  href="tel:+551699999999"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  ou ligue: (16) 99999-9999
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
