import React from 'react';

// Hero Visual: Professional veterinary consultation with happy dog & calm cat
export const HeroVisualAsset: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#F2F9FA] via-white to-[#F6F3FB] border border-slate-200/80 shadow-xl ${className}`}>
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#46AFC2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3E1B77]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modern High-End Veterinary SVG Art */}
      <svg
        viewBox="0 0 640 460"
        className="w-full h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Atención veterinaria profesional para perros y gatos"
      >
        {/* Modern Clinic Room Interior */}
        <rect width="640" height="460" fill="url(#hero-bg-grad)" />

        <defs>
          <linearGradient id="hero-bg-grad" x1="0" y1="0" x2="640" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFC" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F2F9FA" />
          </linearGradient>
          <linearGradient id="turq-grad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#46AFC2" />
            <stop offset="1" stopColor="#3AA1B4" />
          </linearGradient>
          <linearGradient id="purple-grad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3E1B77" />
            <stop offset="1" stopColor="#5527A1" />
          </linearGradient>
          <linearGradient id="warm-fur" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#E2A76F" />
            <stop offset="1" stopColor="#C98B54" />
          </linearGradient>
          <linearGradient id="cat-fur" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#94A3B8" />
            <stop offset="1" stopColor="#64748B" />
          </linearGradient>
        </defs>

        {/* Clean architectural clinic glass pane */}
        <rect x="40" y="30" width="560" height="400" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
        
        {/* Soft geometric accent waves */}
        <circle cx="520" cy="100" r="120" fill="#46AFC2" fillOpacity="0.06" />
        <circle cx="120" cy="360" r="90" fill="#3E1B77" fillOpacity="0.05" />

        {/* Consultation examination table */}
        <rect x="80" y="270" width="480" height="24" rx="8" fill="#46AFC2" fillOpacity="0.15" />
        <rect x="90" y="294" width="460" height="130" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="220" y1="294" x2="220" y2="424" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="420" y1="294" x2="420" y2="424" stroke="#E2E8F0" strokeWidth="1" />

        {/* Veterinarian Figure */}
        {/* Scrub Body */}
        <path d="M260 210C260 185 285 170 320 170C355 170 380 185 380 210L395 310H245L260 210Z" fill="url(#turq-grad)" />
        {/* Collar & Neck */}
        <path d="M305 170L320 195L335 170" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <rect x="310" y="145" width="20" height="30" rx="8" fill="#FBD38D" />
        {/* Head */}
        <circle cx="320" cy="125" r="32" fill="#FBD38D" />
        {/* Hair */}
        <path d="M288 125C288 100 305 85 320 85C340 85 352 100 352 125C352 135 348 140 348 140C348 140 338 120 320 120C302 120 292 140 292 140C292 140 288 135 288 125Z" fill="#3E1B77" />
        {/* Stethoscope */}
        <path d="M305 175C305 210 335 210 335 175" stroke="#3E1B77" strokeWidth="4" strokeLinecap="round" />
        <path d="M320 200V240" stroke="#3E1B77" strokeWidth="4" strokeLinecap="round" />
        <circle cx="320" cy="245" r="7" fill="#3E1B77" />
        <circle cx="320" cy="245" r="3" fill="#46AFC2" />

        {/* Happy Dog (Golden Retriever) sitting beside vet */}
        <g transform="translate(140, 160)">
          {/* Dog Body */}
          <path d="M30 110C30 80 55 60 85 60C115 60 135 80 135 110H30Z" fill="url(#warm-fur)" />
          {/* Dog Chest & Front Legs */}
          <rect x="45" y="105" width="22" height="40" rx="8" fill="url(#warm-fur)" />
          <rect x="95" y="105" width="22" height="40" rx="8" fill="url(#warm-fur)" />
          {/* Dog Head */}
          <circle cx="85" cy="50" r="32" fill="url(#warm-fur)" />
          {/* Floppy Ears */}
          <ellipse cx="56" cy="45" rx="10" ry="22" fill="#B7793B" transform="rotate(-15 56 45)" />
          <ellipse cx="114" cy="45" rx="10" ry="22" fill="#B7793B" transform="rotate(15 114 45)" />
          {/* Snout */}
          <ellipse cx="85" cy="60" rx="14" ry="11" fill="#FDF3E7" />
          <path d="M80 55H90L85 62Z" fill="#2D3748" />
          <circle cx="75" cy="44" r="3" fill="#2D3748" />
          <circle cx="95" cy="44" r="3" fill="#2D3748" />
          {/* Happy tongue */}
          <path d="M83 65C83 68 87 68 87 65" stroke="#E53E3E" strokeWidth="3" strokeLinecap="round" />
          {/* Turquoise Collar */}
          <rect x="68" y="76" width="34" height="6" rx="3" fill="#46AFC2" />
        </g>

        {/* Calm Domestic Cat on the exam table */}
        <g transform="translate(420, 190)">
          {/* Cat Body */}
          <ellipse cx="60" cy="80" rx="42" ry="28" fill="url(#cat-fur)" />
          {/* Cat Head */}
          <circle cx="35" cy="55" r="22" fill="url(#cat-fur)" />
          {/* Pointy Ears */}
          <path d="M20 45L25 25L38 42Z" fill="#64748B" />
          <path d="M38 42L48 25L52 46Z" fill="#64748B" />
          {/* Face details */}
          <circle cx="28" cy="53" r="2.5" fill="#1E293B" />
          <circle cx="42" cy="53" r="2.5" fill="#1E293B" />
          <ellipse cx="35" cy="60" rx="3" ry="2" fill="#F472B6" />
          {/* Whiskers */}
          <line x1="18" y1="59" x2="8" y2="57" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="18" y1="62" x2="8" y2="64" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="48" y1="59" x2="58" y2="57" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="48" y1="62" x2="58" y2="64" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Tail */}
          <path d="M98 75C115 70 120 50 115 45" stroke="url(#cat-fur)" strokeWidth="8" strokeLinecap="round" />
          {/* Purple Collar */}
          <rect x="27" y="70" width="18" height="4" rx="2" fill="#3E1B77" />
        </g>

        {/* Floating Heart / Care Element */}
        <g transform="translate(305, 50)">
          <circle cx="15" cy="15" r="18" fill="white" stroke="#46AFC2" strokeWidth="2" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.06))" />
          <path d="M15 12C13.5 9.5 9.5 9.5 8 12C6 15 10 19 15 22C20 19 24 15 22 12C20.5 9.5 16.5 9.5 15 12Z" fill="#46AFC2" />
        </g>
      </svg>

      {/* Floating 24h badge overlay on bottom right */}
      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#F2F9FA] flex items-center justify-center text-[#46AFC2]">
          <span className="font-heading font-extrabold text-xs">24/7</span>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#46AFC2]">Disponibilidad Total</p>
          <p className="text-xs font-semibold text-[#3E1B77]">Atención Permanente</p>
        </div>
      </div>
    </div>
  );
};

// Family Bond Visual: Loving family embracing pet dog and cat
export const FamilyPetVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#F6F3FB] via-white to-[#F2F9FA] border border-slate-200/80 p-6 sm:p-8 shadow-lg ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* Visual Graphic */}
        <div className="relative flex items-center justify-center p-4">
          <svg viewBox="0 0 320 280" className="w-full max-w-[280px] drop-shadow-sm" fill="none">
            {/* Circular soft halo */}
            <circle cx="160" cy="140" r="120" fill="#3E1B77" fillOpacity="0.04" />
            <circle cx="160" cy="140" r="95" fill="#46AFC2" fillOpacity="0.06" />

            {/* Hugging Arms & Family Connection representation */}
            <path
              d="M70 180C70 120 120 80 160 80C200 80 250 120 250 180C250 220 210 240 160 240C110 240 70 220 70 180Z"
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            {/* Heart symbol center */}
            <path
              d="M160 115C150 95 120 95 110 115C95 140 125 170 160 195C195 170 225 140 210 115C200 95 170 95 160 115Z"
              fill="#3E1B77"
              fillOpacity="0.85"
            />
            {/* Paw print inside the heart */}
            <circle cx="160" cy="148" r="9" fill="#FFFFFF" />
            <circle cx="148" cy="135" r="4.5" fill="#46AFC2" />
            <circle cx="172" cy="135" r="4.5" fill="#46AFC2" />
            <circle cx="142" cy="147" r="4" fill="#46AFC2" />
            <circle cx="178" cy="147" r="4" fill="#46AFC2" />

            {/* Pet silhouettes in unison */}
            <path
              d="M90 220C90 190 110 170 130 170C140 170 145 175 150 185C140 195 130 210 130 225H90Z"
              fill="#46AFC2"
              fillOpacity="0.7"
            />
            <path
              d="M230 220C230 195 215 175 195 175C185 175 180 180 175 188C185 198 192 212 192 225H230Z"
              fill="#3E1B77"
              fillOpacity="0.7"
            />
          </svg>
        </div>

        {/* Content Callout */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#46AFC2] font-heading">
            Vínculo & Calidad de Vida
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#3E1B77] font-heading leading-snug">
            Cuidamos a quienes alegran tus días
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Trabajamos con vocación y respeto para brindarles la mejor atención clínica, acompañando cada etapa del desarrollo de tus perros y gatos.
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="text-[#3E1B77] font-bold">Medellín</span>
            <span>·</span>
            <span>Perros y Gatos</span>
            <span>·</span>
            <span className="text-[#46AFC2] font-bold">Atención Integral</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 24/7 Emergency Visual Asset
export const EmergencyVisualAsset: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#3E1B77] via-[#2F145C] to-[#1E0B3B] text-white p-8 sm:p-10 shadow-2xl border border-white/10 ${className}`}>
      {/* Background glow and subtle clinical pulse waves */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#46AFC2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#3E1B77]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#46AFC2]/40 text-[#46AFC2] text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#46AFC2] animate-pulse" />
            Servicio Ininterrumpido
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Estamos aquí cuando más nos necesitas
          </h3>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
            Nuestro centro veterinario cuenta con atención 24 horas para brindar acompañamiento oportuno cuando tu mascota lo necesita.
          </p>
        </div>

        {/* High impact 24 Horas / 7 Días display */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
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
  );
};

// Pet Spa & Grooming Visual
export const SpaGroomingVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#F2F9FA] to-white border border-[#46AFC2]/20 p-6 sm:p-8 shadow-md ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-md">
          <span className="text-xs font-bold uppercase tracking-wider text-[#46AFC2] font-heading">
            Higiene & Estética
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#3E1B77] font-heading">
            SPA y Peluquería Canina
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Complementamos el cuidado de tu mascota con servicios de SPA y peluquería canina en un entorno relajante y seguro.
          </p>
          <div className="pt-1">
            <span className="text-xs font-semibold text-slate-500">
              Horario de atención: Domingos a viernes · 8:00 a. m. – 4:00 p. m.
            </span>
          </div>
        </div>

        {/* Clean Grooming & Bath Graphic representation */}
        <div className="shrink-0 w-36 h-36 rounded-2xl bg-white border border-[#46AFC2]/30 shadow-sm flex items-center justify-center p-4">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Bath Tub */}
            <path d="M15 50C15 70 30 80 50 80C70 80 85 70 85 50H15Z" fill="#F2F9FA" stroke="#46AFC2" strokeWidth="3" />
            <rect x="25" y="80" width="8" height="8" rx="2" fill="#3E1B77" />
            <rect x="67" y="80" width="8" height="8" rx="2" fill="#3E1B77" />
            {/* Bubbles */}
            <circle cx="35" cy="42" r="7" fill="#46AFC2" fillOpacity="0.4" />
            <circle cx="50" cy="38" r="9" fill="#46AFC2" fillOpacity="0.3" />
            <circle cx="65" cy="44" r="6" fill="#46AFC2" fillOpacity="0.4" />
            <circle cx="42" cy="26" r="4" fill="#3E1B77" fillOpacity="0.2" />
            <circle cx="58" cy="22" r="5" fill="#3E1B77" fillOpacity="0.2" />
            {/* Sparkle */}
            <path d="M50 10L52 16L58 18L52 20L50 26L48 20L42 18L48 16Z" fill="#46AFC2" />
          </svg>
        </div>
      </div>
    </div>
  );
};
