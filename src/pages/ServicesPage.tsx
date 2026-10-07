import React from 'react';
import { PageRoute } from '../types';
import { ALL_SERVICES, getWhatsAppLink, WHATSAPP_BASE_URL } from '../data/servicesData';
import { ServiceImage } from '../components/ServiceImage';
import { ServiceIcon } from '../components/ServiceIcon';
import { MessageCircle, Clock, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      {/* 1. HERO SERVICIOS */}
      <section className="relative pt-8 sm:pt-14 pb-4 overflow-hidden bg-gradient-to-b from-[#F2F9FA]/60 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
            Portafolio Clínico & Bienestar
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E1B77] font-heading tracking-tight leading-tight">
            Servicios veterinarios para el cuidado integral de tu mascota
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Encuentra en Centro Veterinario Tawi diferentes servicios orientados al cuidado, prevención, diagnóstico y bienestar de perros y gatos.
          </p>
        </div>
      </section>

      {/* 2. LISTA DE LOS 13 SERVICIOS CON FOTOGRAFÍAS REALES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ALL_SERVICES.map((service) => {
            const is24h = service.isEmergency;
            const isSolemn = service.isSolemn;

            return (
              <article
                key={service.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
                  is24h
                    ? 'bg-gradient-to-br from-[#3E1B77] to-[#2F145C] text-white shadow-xl border border-[#46AFC2]/40 ring-1 ring-[#46AFC2]/20'
                    : isSolemn
                    ? 'bg-slate-50 text-slate-800 border border-slate-200/90 shadow-sm'
                    : 'bg-white text-slate-800 border border-slate-200/80 hover:border-[#46AFC2]/60 hover:shadow-xl shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Real Image of the service */}
                  <ServiceImage
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    iconName={service.iconName}
                    aspectRatio="aspect-16/10"
                  />

                  {/* Header: Badge & Service Index */}
                  <div className="flex items-center justify-between pt-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center p-2.5 ${
                        is24h
                          ? 'bg-white/10 text-[#46AFC2]'
                          : isSolemn
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-[#F2F9FA] text-[#46AFC2]'
                      }`}
                    >
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-xs font-bold tracking-wider font-heading ${
                        is24h ? 'text-[#46AFC2]' : 'text-slate-400'
                      }`}
                    >
                      SERVICIO {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-xl sm:text-2xl font-bold font-heading leading-snug ${
                      is24h ? 'text-white' : 'text-[#3E1B77]'
                    }`}
                  >
                    {service.name}
                  </h2>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      is24h ? 'text-white/85' : 'text-slate-600'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Respectful notice for Eutanasia */}
                  {isSolemn && (
                    <div className="pt-2 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#3E1B77]">
                        <Heart className="w-3.5 h-3.5 text-[#46AFC2]" />
                        <span>Acompañamiento empático y responsable</span>
                      </div>
                      <p>
                        Procedimiento disponible previa valoración médica.
                      </p>
                    </div>
                  )}

                  {/* Specific Service Details (Esterilización: OVH, Orquiectomía / Vacunación) */}
                  {service.details && (
                    <div className="space-y-2 pt-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider block ${
                          is24h ? 'text-[#46AFC2]' : 'text-[#46AFC2]'
                        }`}
                      >
                        Opciones / Componentes:
                      </span>
                      <ul className="space-y-1.5">
                        {service.details.map((item) => (
                          <li
                            key={item}
                            className={`flex items-center gap-2 text-xs font-medium ${
                              is24h ? 'text-white/90' : 'text-slate-700'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#46AFC2] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Specific Service Schedule (SPA) */}
                  {service.schedule && (
                    <div className="pt-2 p-3 rounded-xl bg-[#F2F9FA] border border-[#46AFC2]/30 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#3E1B77]">
                        <Clock className="w-3.5 h-3.5 text-[#46AFC2]" />
                        <span>Horario de atención:</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">
                        {service.schedule}
                      </p>
                    </div>
                  )}
                </div>

                {/* Service Button */}
                <div className="pt-6 mt-4 border-t border-slate-100/60">
                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 ${
                      is24h
                        ? 'bg-[#46AFC2] hover:bg-[#3AA1B4] text-white'
                        : isSolemn
                        ? 'bg-slate-700 hover:bg-slate-800 text-white'
                        : 'bg-[#46AFC2] hover:bg-[#3AA1B4] text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{service.buttonText}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. CTA FINAL DE SERVICIOS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#F6F3FB] via-[#F2F9FA] to-[#F6F3FB] border border-[#46AFC2]/30 p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#46AFC2] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            Asesoría Profesional
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3E1B77] font-heading tracking-tight">
            ¿Necesitas atención para tu mascota?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Comunícate con nosotros y recibe información sobre nuestros servicios.
          </p>

          <div className="pt-2">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#46AFC2] hover:bg-[#3AA1B4] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ESCRIBIR POR WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
