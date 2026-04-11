'use client';

import { Wifi } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_NUMBER, EMAIL, CIDADES } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <Wifi className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">
                Flex<span className="text-primary">Net</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Internet fibra optica de alta velocidade para residencias e empresas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navegacao</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Cobertura</h4>
            <ul className="space-y-2">
              {CIDADES.map((cidade) => (
                <li key={cidade.nome} className="text-muted-foreground text-sm">
                  {cidade.nome}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  (16) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} FlexNet Telecom
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
