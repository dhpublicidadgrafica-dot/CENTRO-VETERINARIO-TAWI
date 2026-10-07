import React from 'react';
import { PageRoute } from '../types';
import { TawiLogo } from './TawiLogo';
import { WHATSAPP_PHONE, WHATSAPP_BASE_URL, CLINIC_ADDRESS } from '../data/servicesData';
import { MessageCircle, MapPin, Clock, Phone, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Inicio', page: 'inicio' },
    { label: 'Nosotros', page: 'nosotros' },
    { label: 'Servicios', page: 'servicios' },
    { label: 'Contacto', page: 'contacto' },
  ];

  return (
    <footer className="bg-[#3E1B77] text-white pt-16 pb-12 border-t-4 border-[#46AFC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Slogan Column */}
          <div className="md:col-span-5 space-y-4">
            <TawiLogo variant="dark" size="lg" />
            <p className="text-white/80 text-base leading-relaxed max-w-sm pt-2">
              Bienestar, cuidado y atención para quienes hacen parte de tu familia.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#46AFC2] text-xs font-semibold tracking-wide border border-[#46AFC2]/30">
                <Clock className="w-3.5 h-3.5 text-[#46AFC2]" />
                Clínica 24 horas
              </span>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#46AFC2] font-heading">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(link.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#46AFC2] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#46AFC2] font-heading">
              Contacto
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#46AFC2] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50">Teléfono / WhatsApp</span>
                  <a
                    href={WHATSAPP_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-[#46AFC2] transition-colors"
                  >
                    {WHATSAPP_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#46AFC2] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50">Dirección</span>
                  <p className="text-white font-medium">
                    {CLINIC_ADDRESS.street}
                  </p>
                  <p className="text-white/70 text-xs">
                    {CLINIC_ADDRESS.neighborhood}, {CLINIC_ADDRESS.city}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#46AFC2] hover:bg-[#3AA1B4] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 Centro Veterinario Tawi. Todos los derechos reservados.</p>
          <p className="text-white/50">Medellín, Antioquia, Colombia</p>
        </div>
      </div>
    </footer>
  );
};
