'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Sobre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    const el = document.getElementById('sobre');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">

        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-muted-foreground tracking-widest mb-4"
        >
          &lt; SOBRE /&gt;
        </motion.p>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black text-foreground mb-8 leading-tight"
        >
          Quem sou <em className="text-primary not-italic">eu</em>
        </motion.h2>

        {/* Parágrafos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-muted-foreground leading-relaxed mb-12"
        >
          <p>
            Meu nome é <strong className="text-foreground font-bold">Lucca Viganon Periotto</strong> e sou apaixonado por
            tecnologia, o que me levou a construir minha trajetória profissional
            na área de programação. Nos últimos <strong className="text-foreground underline">quatro anos</strong>, venho me
            aprofundando nas principais ferramentas e tecnologias utilizadas
            pelo mercado, sempre buscando aplicar <strong className="text-foreground">práticas ágeis</strong> no
            desenvolvimento de software.
          </p>
          <p>
            Atualmente, estou no último ano da graduação em{' '}
            <strong className="text-foreground font-bold">Análise e Desenvolvimento de Sistemas</strong> no Senai. Paralelamente à faculdade,
            atuo como <strong className="text-foreground">freelancer</strong> em diferentes projetos e participo de
            iniciativas de <strong className="text-foreground">código aberto</strong>, experiências que têm contribuído
            significativamente para meu crescimento técnico e para a
            consolidação da minha vivência prática na área de desenvolvimento.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-8"
        >
          {[
            { value: '4+',  label: 'ANOS DE\nEXPERIÊNCIA' },
            { value: '10+', label: 'PROJETOS\nENTREGUES' },
            { value: '8+',  label: 'TECNOLOGIAS\nDOMINADAS' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-black text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-semibold tracking-widest text-muted-foreground whitespace-pre-line leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
