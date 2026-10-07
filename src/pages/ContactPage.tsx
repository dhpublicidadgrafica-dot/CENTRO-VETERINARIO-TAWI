import React from 'react';
import { PageRoute } from '../types';
import {
  WHATSAPP_PHONE,
  WHATSAPP_BASE_URL,
  CLINIC_ADDRESS,
  getWhatsAppLink,
} from '../data/servicesData';
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  AlertTriangle,
  CalendarCheck,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Cra. 78A #92-204, Kennedy, Medellín, Antioquia, Colombia'
  )}`;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO CONTACTO */}
      <section className="relative pt-8 sm:pt-14 pb-4 overflow-hidden bg-gradient-to-b from-[#F2F9FA]/60 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
            Atención Inmediata & Canales Oficiales
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E1B77] font-heading tracking-tight leading-tight">
            Estamos para cuidar a tu mascota
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Comunícate con Centro Veterinario Tawi.
          </p>
        </div>
      </section>

      {/* 2. INFORMACIÓN DE CONTACTO (3 Tarjetas Principales) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Teléfono / WhatsApp */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-[#46AFC2]/60 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F2F9FA] text-[#46AFC2] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#46AFC2]">
                  Línea Directa
                </span>
                <h2 className="text-xl font-bold text-[#3E1B77] font-heading mt-1">
                  TELÉFONO / WHATSAPP
                </h2>
              </div>

              <p className="text-2xl font-extrabold text-slate-800 font-heading">
                {WHATSAPP_PHONE}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#46AFC2] hover:bg-[#3AA1B4] shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ESCRIBIR POR WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Dirección */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-[#46AFC2]/60 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F6F3FB] text-[#3E1B77] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#46AFC2]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#46AFC2]">
                  Sede Medellín
                </span>
                <h2 className="text-xl font-bold text-[#3E1B77] font-heading mt-1">
                  DIRECCIÓN
                </h2>
              </div>

              <div className="space-y-1 text-slate-700">
                <p className="text-lg font-bold text-[#3E1B77]">
                  {CLINIC_ADDRESS.street}
                </p>
                <p className="text-sm font-medium">
                  {CLINIC_ADDRESS.neighborhood}
                </p>
                <p className="text-xs text-slate-500">
                  {CLINIC_ADDRESS.city}, {CLINIC_ADDRESS.department}, {CLINIC_ADDRESS.country}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E1B77] bg-[#F2F9FA] hover:bg-[#E4F4F7] transition-all"
              >
                <Navigation className="w-4 h-4 text-[#46AFC2]" />
                <span>CÓMO LLEGAR</span>
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-[#46AFC2]/60 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F2F9FA] text-[#46AFC2] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#46AFC2]">
                  Disponibilidad
                </span>
                <h2 className="text-xl font-bold text-[#3E1B77] font-heading mt-1">
                  HORARIO
                </h2>
              </div>

              <div className="space-y-3 pt-1">
                {/* Clínica */}
                <div className="p-3 rounded-xl bg-[#F6F3FB] border border-[#3E1B77]/10">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#3E1B77]">
                    Clínica
                  </h3>
                  <p className="text-base font-extrabold text-[#3E1B77]">24 horas</p>
                  <p className="text-xs text-slate-500">7 días a la semana</p>
                </div>

                {/* SPA */}
                <div className="p-3 rounded-xl bg-[#F2F9FA] border border-[#46AFC2]/20">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#46AFC2]">
                    SPA
                  </h3>
                  <p className="text-sm font-bold text-slate-800">Domingos a viernes</p>
                  <p className="text-xs text-slate-600">8:00 a. m. – 4:00 p. m.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <span className="block text-center text-xs font-semibold text-[#46AFC2]">
                Atención permanente 24/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAPA DE GOOGLE MAPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#46AFC2]">
              Ubicación Geográfica
            </span>
            <h2 className="text-2xl font-bold text-[#3E1B77] font-heading">
              Centro Veterinario Tawi en Medellín
            </h2>
            <p className="text-sm text-slate-600">
              Cra. 78A #92-204, Kennedy, Medellín, Antioquia
            </p>
          </div>

          <div>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3E1B77] hover:bg-[#2F145C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <Navigation className="w-4 h-4 text-[#46AFC2]" />
              <span>CÓMO LLEGAR</span>
            </a>
          </div>
        </div>

        {/* Embedded Interactive Map Frame */}
        <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
          <iframe
            title="Ubicación Centro Veterinario Tawi"
            src="https://maps.google.com/maps?q=Cra.+78A+%2392-204,+Kennedy,+Medellin,+Antioquia,+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      {/* 4. SECCIÓN CONTACTO RÁPIDO (3 Tarjetas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
            Respuestas Rápidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3E1B77] font-heading">
            Contacto Rápido
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: ¿Tienes una urgencia? */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#3E1B77] to-[#2F145C] text-white flex flex-col justify-between space-y-6 shadow-lg border border-[#46AFC2]/30">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#46AFC2]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                ¿Tienes una urgencia?
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#46AFC2]">
                ATENCIÓN 24 HORAS
              </p>
            </div>

            <div>
              <a
                href={getWhatsAppLink('URGENCIA: Hola Centro Veterinario Tawi, tengo una urgencia con mi mascota y requiero atención 24 horas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#46AFC2] hover:bg-[#3AA1B4] text-white shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>CONTACTAR AHORA</span>
              </a>
            </div>
          </div>

          {/* Card 2: ¿Quieres agendar? */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#46AFC2]/60 hover:shadow-lg transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2F9FA] flex items-center justify-center text-[#46AFC2]">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#3E1B77]">
                ¿Quieres agendar?
              </h3>
              <p className="text-sm text-slate-600">
                Agenda la atención de tu mascota.
              </p>
            </div>

            <div>
              <a
                href={getWhatsAppLink('Hola Centro Veterinario Tawi, deseo agendar una cita para mi mascota.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#46AFC2] hover:bg-[#3AA1B4] text-white shadow-xs hover:shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>AGENDAR CITA</span>
              </a>
            </div>
          </div>

          {/* Card 3: ¿Quieres conocer nuestros servicios? */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#46AFC2]/60 hover:shadow-lg transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6F3FB] flex items-center justify-center text-[#3E1B77]">
                <Stethoscope className="w-5 h-5 text-[#46AFC2]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#3E1B77]">
                ¿Quieres conocer nuestros servicios?
              </h3>
              <p className="text-sm text-slate-600">
                Conoce todas nuestras opciones de atención.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  onNavigate('servicios');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#F2F9FA] hover:bg-[#E4F4F7] text-[#3E1B77] transition-all font-heading"
              >
                <span>VER SERVICIOS</span>
                <ArrowRight className="w-4 h-4 text-[#46AFC2]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
