'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Wifi, MapPin, ChevronDown } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_NUMBER } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const CIDADES = [
  { id: 'sao-carlos', nome: 'Sao Carlos' },
  { id: 'ibate', nome: 'Ibate' },
  { id: 'araraquara', nome: 'Araraquara' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(CIDADES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os planos FlexNet.`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="relative">
            <Wifi className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-foreground">Flex</span>
            <span className="gradient-text">Net</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Cidade + CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Dropdown de Cidade */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground text-sm transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>{cidadeSelecionada.nome}</span>
              <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-full min-w-[160px] py-2 rounded-xl border border-border bg-background shadow-xl z-50">
                {CIDADES.map((cidade) => (
                  <button
                    key={cidade.id}
                    onClick={() => {
                      setCidadeSelecionada(cidade);
                      setDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-secondary/50 transition-colors ${
                      cidadeSelecionada.id === cidade.id ? 'text-primary bg-primary/5' : 'text-foreground'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{cidade.nome}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button 
            onClick={handleWhatsApp}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow text-base px-6 py-5 font-semibold"
          >
            Assine Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            onClick={handleWhatsApp}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-4 text-base py-5 font-semibold"
          >
            Assine Agora
          </Button>
        </div>
      </div>
    </header>
  );
}
