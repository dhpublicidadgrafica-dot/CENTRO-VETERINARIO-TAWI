import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  WHATSAPP_BASE_URL,
  HOME_FEATURED_SERVICES,
  getWhatsAppLink,
  HERO_BANNER_IMAGE,
  FAMILY_PET_IMAGE,
  EMERGENCY_VET_IMAGE,
} from '../data/servicesData';
import { ServiceImage } from '../components/ServiceImage';
import { ServiceIcon } from '../components/ServiceIcon';
import {
  Clock,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Bath,
  CalendarCheck,
  AlertTriangle,
  Heart,
  ShieldCheck,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO PRINCIPAL CON BANNER QUE MUESTRA UN PERRO Y UN GATO */}
      <section className="relative pt-4 sm:pt-6 overflow-hidden" aria-labelledby="hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3E1B77] via-[#2F145C] to-[#1E0B3B] text-white shadow-2xl border border-[#46AFC2]/30">
            {/* Background Image of Dog and Cat with measured contrast scrim */}
            <div className="absolute inset-0 z-0">
              {!heroImgError ? (
                <img
                  src={HERO_BANNER_IMAGE.url}
                  alt={HERO_BANNER_IMAGE.alt}
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgError(true)}
                  className="w-full h-full object-cover object-center lg:object-right opacity-45 mix-blend-luminosity scale-105 transition-transform duration-700"
                />
              ) : null}
              {/* Multilayer gradient scrim ensuring WCAG AA contrast for text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3E1B77] via-[#3E1B77]/90 to-transparent lg:w-3/4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0B3B] via-transparent to-transparent" />
            </div>

            {/* Hero Content Overlay */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-16">
              <div className="lg:col-span-7 space-y-6 text-left max-w-2xl">
                {/* Visual Badge: ATENCIÓN 24 HORAS */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#46AFC2]/50 text-[#46AFC2] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#46AFC2] animate-pulse" />
                  <Clock className="w-4 h-4 text-[#46AFC2]" />
                  <span>ATENCIÓN 24 HORAS</span>
                </div>

                {/* Main Headline */}
                <h1
                  id="hero-title"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white font-heading tracking-tight leading-[1.12]"
                >
                  Cuidamos a quienes hacen parte de tu familia
                </h1>

                {/* Secondary text */}
                <p className="text-lg sm:text-xl font-semibold text-[#46AFC2] leading-snug">
                  Atención veterinaria profesional para perros y gatos, 24 horas al día.
                </p>

                {/* Complementary text */}
                <p className="text-white/85 text-base sm:text-lg leading-relaxed">
                  En Centro Veterinario Tawi trabajamos por el bienestar y la salud de las mascotas,
                  brindando atención profesional, cercana y responsable para la tranquilidad de sus familias.
                </p>

                {/* Action Buttons: AGENDAR CITA & URGENCIAS 24/7 */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
                  <a
                    href={getWhatsAppLink('Hola Centro Veterinario Tawi, deseo agendar una cita para mi mascota.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#46AFC2] hover:bg-[#3AA1B4] text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>AGENDAR CITA</span>
                  </a>

                  <a
                    href={getWhatsAppLink('URGENCIA: Hola Centro Veterinario Tawi, necesito atención veterinaria 24/7 urgente para mi mascota.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 backdrop-blur-xs"
                  >
                    <AlertTriangle className="w-4 h-4 text-[#46AFC2]" />
                    <span>URGENCIAS 24/7</span>
                  </a>
                </div>
              </div>

              {/* Visual Spotlight: Perro y Gato juntos */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group">
                  <img
                    src={HERO_BANNER_IMAGE.url}
                    alt="Perro y gato juntos - Centro Veterinario Tawi Medellín"
                    referrerPolicy="no-referrer"
                    className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN — TAWI */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-white via-[#F2F9FA]/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
              Centro Veterinario Tawi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E1B77] font-heading tracking-tight">
              El bienestar de tu mascota es nuestra prioridad
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              En Centro Veterinario Tawi entendemos que las mascotas son parte fundamental de nuestras
              familias. Por eso trabajamos para brindarles atención veterinaria integral y acompañamiento
              profesional, buscando contribuir a su salud, bienestar y calidad de vida.
            </p>
          </div>

          {/* Imagen emocional de mascota junto a su familia */}
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={FAMILY_PET_IMAGE.url}
                  alt={FAMILY_PET_IMAGE.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-96 object-cover object-center rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#46AFC2] font-heading">
                  Vínculo & Calidad de Vida
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3E1B77] font-heading leading-snug">
                  Cuidamos a quienes alegran tus días
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  En Centro Veterinario Tawi entendemos que las mascotas son parte fundamental de nuestras familias. Por eso trabajamos para brindarles atención veterinaria integral y acompañamiento profesional, buscando contribuir a su salud, bienestar y calidad de vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN — SERVICIOS DESTACADOS (6 Tarjetas con imágenes reales) */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
              Atención Clínica & Cuidado
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E1B77] font-heading tracking-tight">
              Todo lo que tu mascota necesita
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Contamos con diferentes servicios veterinarios para acompañar la salud y el cuidado de tu mascota.
            </p>
          </div>

          {/* 6 Featured Service Cards with real photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {HOME_FEATURED_SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#46AFC2]/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Real Image of the service */}
                  <ServiceImage
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    iconName={service.iconName}
                    aspectRatio="aspect-16/10"
                  />

                  {/* Header: Icon & Number */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="w-10 h-10 rounded-xl bg-[#F2F9FA] text-[#46AFC2] group-hover:bg-[#46AFC2] group-hover:text-white transition-colors duration-300 flex items-center justify-center p-2.5 shadow-2xs">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 font-heading">
                      SERVICIO {service.number}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#3E1B77] font-heading group-hover:text-[#46AFC2] transition-colors">
                    {service.name}
                  </h3>

                  {/* Brief description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Vaccine details / OVH details if present */}
                  {service.details && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.details.map((detail) => (
                        <span
                          key={detail}
                          className="text-xs text-[#3E1B77] bg-[#F6F3FB] px-2.5 py-1 rounded-md font-medium"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Button: VER SERVICIO (navigates to /servicios) */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('servicios');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E1B77] hover:text-[#46AFC2] bg-[#F2F9FA] hover:bg-[#E4F4F7] transition-all duration-200 group-hover:bg-[#46AFC2] group-hover:text-white"
                  >
                    <span>VER SERVICIO</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Link to see all services */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                onNavigate('servicios');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#3E1B77] hover:text-[#46AFC2] transition-colors uppercase tracking-wider font-heading"
            >
              <span>Conoce nuestros 13 servicios veterinarios</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN — ATENCIÓN 24/7 */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3E1B77] via-[#2F145C] to-[#1E0B3B] text-white p-8 sm:p-12 shadow-2xl border border-white/10">
            {/* Background Emergency Photo */}
            <div className="absolute inset-0 opacity-25">
              <img
                src={EMERGENCY_VET_IMAGE.url}
                alt={EMERGENCY_VET_IMAGE.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center mix-blend-overlay"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#46AFC2]/40 text-[#46AFC2] text-xs font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#46AFC2] animate-pulse" />
                  Servicio Ininterrumpido
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                  Estamos aquí cuando más nos necesitas
                </h3>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
                  Nuestro centro veterinario cuenta con atención 24 horas para brindar acompañamiento oportuno cuando tu mascota lo necesita.
                </p>
                <div className="pt-3">
                  <a
                    href={getWhatsAppLink('Hola Centro Veterinario Tawi, me contacto para atención de urgencias 24 horas.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#46AFC2] hover:bg-[#3AA1B4] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>CONTACTAR AHORA</span>
                  </a>
                </div>
              </div>

              {/* 24 Horas / 7 Días Highlight */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center">
                <span className="text-5xl sm:text-6xl font-black text-[#46AFC2] font-heading tracking-tight leading-none">
                  24
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/90 mt-1">
                  HORAS
                </span>
                <div className="w-12 h-0.5 bg-[#46AFC2]/60 my-3" />
                <span className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight leading-none">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70 mt-1">
                  DÍAS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN — SPA Y PELUQUERÍA */}
      <section className="py-8 sm:py-12 bg-[#F2F9FA]/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8 p-6 sm:p-10 border border-[#46AFC2]/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#46AFC2] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Bath className="w-3.5 h-3.5" />
            Bienestar & Confort
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E1B77] font-heading tracking-tight">
            También cuidamos su bienestar y apariencia
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Complementamos el cuidado de tu mascota con servicios de SPA y peluquería canina.
          </p>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs max-w-md mx-auto space-y-2">
            <h3 className="text-2xl font-black text-[#46AFC2] font-heading">SPA</h3>
            <p className="text-sm font-semibold text-[#3E1B77]">Domingos a viernes</p>
            <p className="text-sm text-slate-600">8:00 a. m. – 4:00 p. m.</p>
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppLink('Hola Centro Veterinario Tawi, deseo consultar sobre los servicios de SPA y Peluquería Canina.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#46AFC2] hover:bg-[#3AA1B4] text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>CONSULTAR POR WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN — LLAMADO FINAL */}
      <section className="py-10 sm:py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F3FB] text-[#3E1B77] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#46AFC2]" />
            Atención Médica Veterinaria
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3E1B77] font-heading tracking-tight">
            Tu mascota merece el mejor cuidado
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Agenda su atención con Centro Veterinario Tawi.
          </p>

          <div className="pt-3">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#46AFC2] hover:bg-[#3AA1B4] text-white font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>ESCRIBIR POR WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
