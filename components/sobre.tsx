'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code2, Layers, Rocket, User } from 'lucide-react';

const skills = [
  { label: 'Front-end', icon: Code2, desc: 'React, Next.js, TypeScript, Tailwind CSS' },
  { label: 'UI/UX', icon: Layers, desc: 'Design de interfaces modernas e responsivas' },
  { label: 'Performance', icon: Rocket, desc: 'Otimização, SEO e boas práticas web' },
];

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
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-14"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
              <User className="w-5 h-5 text-primary" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Sobre <span className="gradient-text">mim</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Olá! Sou um desenvolvedor apaixonado por criar experiências digitais que combinam
                <span className="text-foreground font-medium"> design cuidadoso</span> com{' '}
                <span className="text-foreground font-medium">código de qualidade</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tenho experiência construindo produtos web modernos com foco em performance,
                acessibilidade e usabilidade. Gosto de trabalhar próximo do design para transformar
                ideias em interfaces que realmente funcionam para as pessoas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando não estou codando, estou aprendendo sobre novas tecnologias, contribuindo
                com projetos open source ou explorando como a IA pode ampliar as possibilidades
                do desenvolvimento front-end.
              </p>

              {/* CTA */}
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-primary/50 hover:shadow-xl mt-2"
              >
                Entre em contato
              </motion.a>
            </motion.div>

            {/* Skills cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary/60 transition-colors"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{skill.label}</p>
                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
