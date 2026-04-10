'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DEPOIMENTOS } from '@/lib/constants';

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => {
          if (direction === 'right') {
            return prev === DEPOIMENTOS.length - 1 ? 0 : prev + 1;
          }
          return prev === 0 ? DEPOIMENTOS.length - 1 : prev - 1;
        });
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, direction]);

  const depoimento = DEPOIMENTOS[currentIndex];

  return (
    <section className="relative overflow-hidden">
      {/* Fundo azul cobalto sólido */}
      <div className="absolute inset-0 bg-[#0a1628]" />

      <div className="container mx-auto px-4 relative z-10 py-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-8">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-white">
            Avaliações
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 z-10 w-12 h-12 rounded-full border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 text-white"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 z-10 w-12 h-12 rounded-full border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 text-white"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Testimonial Content - No Card */}
          <div 
            className={`text-center px-4 sm:px-12 py-8 transition-all duration-300 ease-out ${
              isAnimating 
                ? `opacity-0 ${direction === 'right' ? '-translate-x-8' : 'translate-x-8'}` 
                : 'opacity-100 translate-x-0'
            }`}
          >
            {/* Quote Icon */}
            <Quote className="w-14 h-14 text-white/30 mx-auto mb-6" />

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 transition-all duration-300 ${
                    i < depoimento.rating
                      ? 'text-primary fill-primary'
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-foreground text-xl sm:text-2xl leading-relaxed mb-10 italic max-w-2xl mx-auto">
              &ldquo;{depoimento.texto}&rdquo;
            </p>

            {/* Author */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-semibold text-3xl border-2 border-primary/20">
                {depoimento.nome.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-foreground text-xl">
                  {depoimento.nome}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {depoimento.cidade}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {DEPOIMENTOS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentIndex && !isAnimating) {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
