import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { TawiLogo } from './TawiLogo';
import { WHATSAPP_BASE_URL } from '../data/servicesData';
import { MessageCircle, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageRoute; path: string }[] = [
    { label: 'INICIO', page: 'inicio', path: '/' },
    { label: 'NOSOTROS', page: 'nosotros', path: '/nosotros' },
    { label: 'SERVICIOS', page: 'servicios', path: '/servicios' },
    { label: 'CONTACTO', page: 'contacto', path: '/contacto' },
  ];

  const handleLinkClick = (page: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-xs border-b border-slate-200/80 py-3'
          : 'border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Zone - Clean Wordmark Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('inicio', e)}
            className="group flex items-center transition-transform active:scale-[0.98]"
            aria-label="Centro Veterinario Tawi - Inicio"
          >
            <TawiLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider font-heading"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={item.path}
                  onClick={(e) => handleLinkClick(item.page, e)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#3E1B77] font-bold'
                      : 'text-slate-600 hover:text-[#46AFC2]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#46AFC2] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Zone: WhatsApp button (Desktop & Mobile) + Mobile Hamburger toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* WhatsApp Header Button */}
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 bg-[#46AFC2] hover:bg-[#3AA1B4] text-white shadow-xs hover:shadow-md active:scale-95 whitespace-nowrap"
              aria-label="Contactar por WhatsApp al Centro Veterinario Tawi"
            >
              <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
              <span>WHATSAPP</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#3E1B77] hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#46AFC2]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[69px] bg-white border-b border-slate-200 shadow-xl transition-all animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
              Menú Principal
            </div>
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={item.path}
                  onClick={(e) => handleLinkClick(item.page, e)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold font-heading transition-colors ${
                    isActive
                      ? 'bg-[#F2F9FA] text-[#3E1B77] font-bold border-l-4 border-[#46AFC2]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#46AFC2]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-100 mt-3">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-white font-bold bg-[#46AFC2] hover:bg-[#3AA1B4] shadow-xs text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>CHATEAR POR WHATSAPP (304 543 9359)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
