import React from 'react';
import { WHATSAPP_BASE_URL } from '../data/servicesData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-6 right-5 sm:right-7 z-50 flex items-center group pointer-events-auto"
    >
      <a
        href={WHATSAPP_BASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear con Centro Veterinario Tawi por WhatsApp"
        className="relative flex items-center gap-2.5 bg-[#46AFC2] hover:bg-[#3AA1B4] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#46AFC2]/40"
      >
        {/* Subtle breathing ripple effect */}
        <span
          className="absolute -inset-1 rounded-full bg-[#46AFC2] opacity-35 animate-ping -z-10 group-hover:opacity-60"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-current shrink-0" />

        {/* Text shown on Desktop / Tablet, hidden on Mobile as requested */}
        <div className="hidden sm:flex flex-col text-left leading-tight pr-1">
          <span className="text-xs font-medium text-white/90">¿Necesitas ayuda?</span>
          <span className="text-sm font-bold tracking-tight font-heading">WhatsApp 24/7</span>
        </div>
      </a>
    </aside>
  );
};
