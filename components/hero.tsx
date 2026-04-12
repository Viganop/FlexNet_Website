'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import LightRays from '@/components/ui/light-rays';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* LightRays background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 z-[1] bg-background/70 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-24">

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground mb-5"
        >
          Lucca Viganon<br />Periotto
        </motion.h1>

        {/* Badge — FULL-STACK DEVELOPER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-primary" />
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Full-Stack Developer
          </span>
          <span className="h-px w-10 bg-primary" />
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
        >
          Desenvolvedor web especializado na criação de<br />
          experiências modernas e eficientes.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 border border-primary px-10 py-4 text-sm font-bold tracking-widest uppercase text-foreground hover:bg-primary/10 transition-colors"
          >
            <Search className="w-4 h-4 text-primary" />
            Veja meus trabalhos
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
