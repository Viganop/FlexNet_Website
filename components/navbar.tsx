'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, Settings, Sun, Moon, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, ColorTheme } from '@/components/theme-context';

const NAV_LINKS = [
  { label: 'Início',     href: '#inicio' },
  { label: 'Sobre',      href: '#sobre' },
  { label: 'Projetos',   href: '#projetos' },
  { label: 'Linguagens', href: '#linguagens' },
  { label: 'Contato',    href: '#contato' },
];

const COLORS: { id: ColorTheme; label: string; swatch: string }[] = [
  { id: 'blue',   label: 'Azul',     swatch: '#4fc3d4' },
  { id: 'green',  label: 'Verde',    swatch: '#4ade80' },
  { id: 'purple', label: 'Roxo',     swatch: '#c084fc' },
  { id: 'orange', label: 'Laranja',  swatch: '#fb923c' },
  { id: 'red',    label: 'Vermelho', swatch: '#f87171' },
];

export function Navbar() {
  const [isOpen,       setIsOpen]       = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [lang,         setLang]         = useState<'PT' | 'EN'>('PT');
  const settingsRef = useRef<HTMLDivElement>(null);

  const { darkMode, colorTheme, toggleDark, setColor } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node))
        setSettingsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center pt-8 px-10">

      {/* Col 1 — empty left */}
      <div />

      {/* Col 2 — pill nav, truly centered */}
      <div className="flex justify-center">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center justify-center gap-1 rounded-full border border-white/10 px-3 py-2 transition-all duration-300 ${
            scrolled
              ? 'bg-background/60 backdrop-blur-xl shadow-lg shadow-black/20'
              : 'bg-background/40 backdrop-blur-md'
          }`}
        >
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Col 3 — Language + Settings, aligned left within column */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="flex items-center gap-2 justify-start pl-6"
      >
        {/* Language */}
        <button
          onClick={() => setLang(l => l === 'PT' ? 'EN' : 'PT')}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 backdrop-blur-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
        >
          <Globe className="w-4 h-4" />
          {lang}
        </button>

        {/* Settings */}
        <div ref={settingsRef} className="relative">
          <button
            onClick={() => setSettingsOpen(o => !o)}
            className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-background/40 backdrop-blur-md p-2.5 transition-all ${
              settingsOpen ? 'text-foreground bg-white/10' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Settings className="w-4 h-4" />
          </button>

          <AnimatePresence>
            {settingsOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: -8 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                exit={{   opacity: 0, scale: 0.92, y: -8 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute right-0 top-full mt-3 w-52 rounded-2xl border border-white/10 bg-background/80 backdrop-blur-xl shadow-2xl shadow-black/30 p-4 flex flex-col gap-4"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Tema</p>
                  <div className="flex gap-2">
                    {(['dark', 'light'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={toggleDark}
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-medium transition-all ${
                          darkMode === mode
                            ? 'border-primary/60 bg-primary/10 text-foreground'
                            : 'border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5'
                        }`}
                      >
                        {mode === 'dark' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                        {mode === 'dark' ? 'Escuro' : 'Claro'}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Cor de destaque</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {COLORS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setColor(c.id)}
                        title={c.label}
                        className="relative w-7 h-7 rounded-full border-2 transition-all hover:scale-110"
                        style={{
                          backgroundColor: c.swatch,
                          borderColor: colorTheme === c.id ? 'rgba(255,255,255,0.5)' : 'transparent',
                          boxShadow:   colorTheme === c.id ? `0 0 0 1px ${c.swatch}` : 'none',
                        }}
                      >
                        {colorTheme === c.id && (
                          <Check className="w-3 h-3 text-black absolute inset-0 m-auto" strokeWidth={3} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl border border-white/10 bg-background/80 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-3 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/5 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
