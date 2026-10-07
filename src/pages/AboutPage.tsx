import React from 'react';
import { PageRoute } from '../types';
import { WHATSAPP_BASE_URL, getWhatsAppLink } from '../data/servicesData';
import {
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  Clock,
  MessageCircle,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const commitments = [
    {
      title: 'Profesionalismo',
      icon: ShieldCheck,
      description: 'Atención médica veterinaria con rigurosidad clínica, ética y vocación de servicio.',
    },
    {
      title: 'Cercanía',
      icon: Users,
      description: 'Trato humano, empático y atento tanto para los animales como para sus familias.',
    },
    {
      title: 'Responsabilidad',
      icon: Heart,
      description: 'Cuidado minucioso y seguimiento dedicado en cada procedimiento médico.',
    },
    {
      title: 'Bienestar',
      icon: Sparkles,
      description: 'Priorizamos la comodidad, tranquilidad y calidad de vida integral de tu mascota.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO NOSOTROS */}
      <section className="relative pt-8 sm:pt-14 pb-6 overflow-hidden bg-gradient-to-b from-[#F6F3FB]/50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
            Centro Veterinario Tawi · Medellín
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E1B77] font-heading tracking-tight leading-tight">
            Amor, cuidado y compromiso con cada mascota
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            En Centro Veterinario Tawi trabajamos por el bienestar y la salud de cada mascota, ofreciendo atención veterinaria integral, profesional y cercana.
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN — QUIÉNES SOMOS */}
      <section className="py-6 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
                Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E1B77] font-heading tracking-tight">
                Sobre Centro Veterinario Tawi
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xs border border-slate-100">
                <img
                  src="/hero_banner.jpg"
                  alt="Perro y gato cuidados con cariño en Centro Veterinario Tawi"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed border-l-4 border-[#46AFC2] pl-6 sm:pl-8">
                <p>
                  En Centro Veterinario Tawi trabajamos por el bienestar y la salud de cada mascota, ofreciendo atención veterinaria integral, profesional y cercana para brindar tranquilidad a sus familias.
                </p>
                <p>
                  Entendemos que las mascotas son parte fundamental de nuestras vidas. Por eso, nuestro compromiso va más allá de atender una enfermedad: buscamos cuidar su salud, acompañar cada etapa de su vida y fortalecer el vínculo que existe entre las mascotas y sus familias.
                </p>
                <p className="font-semibold text-[#3E1B77]">
                  Contamos con atención veterinaria las 24 horas para brindar acompañamiento oportuno cuando más lo necesitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN — NUESTRA MISIÓN */}
      <section className="py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F2F9FA] to-white border border-[#46AFC2]/30 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
              Propósito Fundamental
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3E1B77] font-heading">
              Nuestra misión
            </h2>
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              Proteger, cuidar y mejorar la calidad de vida de las mascotas mediante servicios veterinarios integrales, atención profesional y un trato cálido y responsable.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN — NUESTRO COMPROMISO (4 Visual Elements) */}
      <section className="py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#46AFC2] font-heading">
              Valores Esenciales
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E1B77] font-heading tracking-tight">
              Nuestro compromiso
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Cada paciente es importante para nosotros. Trabajamos con vocación, responsabilidad y empatía para que cada mascota reciba el cuidado que merece.
            </p>
          </div>

          {/* Four Visual Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-[#46AFC2]/50 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#F6F3FB] text-[#3E1B77] flex items-center justify-center p-3">
                    <IconComp className="w-8 h-8 text-[#46AFC2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3E1B77] font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN — ATENCIÓN 24 HORAS */}
      <section className="py-6 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#3E1B77] text-white p-8 sm:p-12 shadow-xl border border-white/10 text-center space-y-6 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#46AFC2]/20 rounded-full blur-2xl" />

            <div className="relative z-10 space-y-4 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#46AFC2] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                Atención Clínica Permanente
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Siempre listos para atenderte
              </h2>

              <p className="text-white/80 text-base sm:text-lg">
                Centro Veterinario Tawi cuenta con atención clínica 24 horas.
              </p>

              {/* Highlight 24/7 */}
              <div className="py-2">
                <span className="text-5xl sm:text-6xl font-black text-[#46AFC2] font-heading tracking-wider">
                  24/7
                </span>
              </div>

              <div>
                <a
                  href={getWhatsAppLink('Hola Centro Veterinario Tawi, deseo comunicarme con el servicio de atención clínica 24 horas.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#46AFC2] hover:bg-[#3AA1B4] text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>CONTACTAR AHORA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
