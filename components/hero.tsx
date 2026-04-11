'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero assinar a FlexNet.`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Fibra optica de verdade</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-balance"
            >
              Internet de alta velocidade{' '}
              <span className="gradient-text">para sua casa</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Velocidade real, estabilidade garantida e suporte humano 24 horas. 
              Sem surpresas, sem fidelidade. A partir de R$ 79,90/mes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
              >
                Assinar agora
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-border hover:bg-secondary text-foreground text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2 text-primary" />
                Ver planos
              </Button>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 pt-12 border-t border-border/50"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">2.000+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime garantido</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte disponivel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">1 Gbps</div>
              <div className="text-sm text-muted-foreground">Velocidade maxima</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
