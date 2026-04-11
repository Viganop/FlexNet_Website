'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, ChevronDown, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/ui/blur-text';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const CIDADES = [
  { id: 'sao-carlos', nome: 'Sao Carlos' },
  { id: 'ibate', nome: 'Ibate' },
  { id: 'araraquara', nome: 'Araraquara' },
];

export function Hero() {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showSub,      setShowSub]      = useState(false);
  const [showBtns,     setShowBtns]     = useState(false);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(CIDADES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // headline: 4 palavras × 150ms + 500ms = ~1100ms
    // sub começa logo depois
    setShowHeadline(true);
    const t1 = setTimeout(() => setShowSub(true),  1200);
    const t2 = setTimeout(() => setShowBtns(true), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero assinar a FlexNet.`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover object-center">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-2xl text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Internet Fibra 100% Real</span>
          </motion.div>

          {/* Headline — todas as palavras num único BlurText */}
          <BlurText
            text="Conexão que nunca para"
            delay={150}
            duration={0.5}
            animateBy="words"
            direction="top"
            visible={showHeadline}
            gradientFrom={2} /* palavras 0-1 brancas, 2-3 com gradient */
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          />

          {/* Subheadline */}
          <BlurText
            text="Internet fibra óptica de verdade. Velocidade real, estabilidade garantida e suporte humano 24 horas. Sem surpresas, sem fidelidade."
            delay={35}
            duration={0.4}
            animateBy="words"
            direction="bottom"
            visible={showSub}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          />

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showBtns ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Button size="lg" onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow text-xl px-12 py-7 group">
              Ver Planos
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            {/* Dropdown de Cidade */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-6 py-4 rounded-xl border border-border bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{cidadeSelecionada.nome}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-full min-w-[180px] py-2 rounded-xl border border-border bg-background shadow-xl z-50"
                  >
                    {CIDADES.map((cidade) => (
                      <button
                        key={cidade.id}
                        onClick={() => {
                          setCidadeSelecionada(cidade);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary/50 transition-colors ${
                          cidadeSelecionada.id === cidade.id ? 'text-primary bg-primary/5' : 'text-foreground'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{cidade.nome}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showBtns ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-8 left-8 sm:left-1/2 sm:-translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
