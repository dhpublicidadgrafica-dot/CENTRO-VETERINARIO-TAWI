import { ServiceItem } from '../types';

export const WHATSAPP_PHONE = '304 543 9359';
export const WHATSAPP_INTERNATIONAL = '+57 304 543 9359';
export const WHATSAPP_BASE_URL = 'https://wa.me/573045439359';

export const CLINIC_ADDRESS = {
  street: 'Cra. 78A #92-204',
  neighborhood: 'Kennedy',
  city: 'Medellín',
  department: 'Antioquia',
  country: 'Colombia',
  full: 'Cra. 78A #92-204, Kennedy, Medellín, Antioquia, Colombia',
  mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Cra.+78A+%2392-204,+Kennedy,+Medellin,+Antioquia,+Colombia',
};

export const CLINIC_HOURS = {
  clinic: '24 horas, 7 días a la semana',
  clinicShort: '24 Horas / 7 Días',
  spa: 'Domingos a viernes: 8:00 a. m. – 4:00 p. m.',
};

// Banner principal de la página de inicio con perro y gato juntos
export const HERO_BANNER_IMAGE = {
  url: '/hero_banner.jpg',
  alt: 'Centro Veterinario Tawi Medellín',
};

// Imagen emocional de mascota con familia
export const FAMILY_PET_IMAGE = {
  url: '/tawi_family_pet.jpg',
  alt: 'El bienestar de tu mascota es nuestra prioridad - Centro Veterinario Tawi',
};

// Imagen de atención veterinaria de urgencias 24/7
export const EMERGENCY_VET_IMAGE = {
  url: '/services/service_24horas.png',
  alt: 'Atención veterinaria de urgencias 24 horas en Centro Veterinario Tawi',
};

export function getWhatsAppLink(customMessage?: string): string {
  if (!customMessage) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(customMessage)}`;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'consulta-veterinaria',
    number: '01',
    name: 'Consulta Veterinaria',
    description: 'Atención médica veterinaria para la valoración y seguimiento de la salud de tu mascota.',
    buttonText: 'CONSULTAR',
    iconName: 'Stethoscope',
    featuredInHome: true,
    imageUrl: '/services/service_consulta.jpg',
    imageAlt: 'Consulta médica veterinaria en Centro Veterinario Tawi',
    whatsappMessage: 'Hola, deseo consultar sobre el servicio de Consulta Veterinaria en Centro Veterinario Tawi.',
  },
  {
    id: 'atencion-24-horas',
    number: '02',
    name: 'Atención Veterinaria 24 Horas',
    description: 'Atención veterinaria disponible las 24 horas para situaciones que requieren atención oportuna.',
    buttonText: 'CONTACTAR AHORA',
    isEmergency: true,
    iconName: 'ClockAlert',
    featuredInHome: false,
    imageUrl: '/services/service_24horas.png',
    imageAlt: 'Atención veterinaria 24 horas y urgencias en Medellín',
    whatsappMessage: 'Hola Centro Veterinario Tawi, requiero atención veterinaria de urgencia / 24 horas para mi mascota.',
  },
  {
    id: 'ecografia',
    number: '03',
    name: 'Ecografía',
    description: 'Servicio de diagnóstico mediante ecografía veterinaria para apoyar la valoración médica.',
    buttonText: 'CONSULTAR',
    iconName: 'Activity',
    featuredInHome: true,
    imageUrl: '/services/service_ecografia.jpg',
    imageAlt: 'Servicio de diagnóstico por ecografía veterinaria',
    whatsappMessage: 'Hola, deseo información y agendamiento para Ecografía veterinaria en Centro Veterinario Tawi.',
  },
  {
    id: 'toma-de-muestras',
    number: '04',
    name: 'Toma de Muestras',
    description: 'Toma de muestras para exámenes como apoyo a los procesos de diagnóstico veterinario.',
    buttonText: 'CONSULTAR',
    iconName: 'FlaskConical',
    featuredInHome: false,
    imageUrl: '/services/service_toma_muestras.png',
    imageAlt: 'Toma de muestras para exámenes de diagnóstico veterinario',
    whatsappMessage: 'Hola, deseo consultar sobre la toma de muestras para exámenes veterinarios en Centro Veterinario Tawi.',
  },
  {
    id: 'medicamentos-en-consulta',
    number: '05',
    name: 'Medicamentos Aplicados en Consulta',
    description: 'Administración de medicamentos durante la atención veterinaria según valoración y necesidad del paciente.',
    buttonText: 'CONSULTAR',
    iconName: 'Pill',
    featuredInHome: false,
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Administración de medicamentos aplicados en consulta veterinaria',
    whatsappMessage: 'Hola, deseo información sobre la administración de medicamentos en consulta en Centro Veterinario Tawi.',
  },
  {
    id: 'hospitalizacion-ambulatoria',
    number: '06',
    name: 'Hospitalización Ambulatoria',
    description: 'Medicamentos y atención relacionados con procesos de hospitalización ambulatoria.',
    buttonText: 'CONSULTAR',
    iconName: 'BedDouble',
    featuredInHome: false,
    imageUrl: '/services/service_hospitalizacion.jpg',
    imageAlt: 'Cuidado y hospitalización ambulatoria veterinaria',
    whatsappMessage: 'Hola, deseo consultar sobre el servicio de hospitalización ambulatoria en Centro Veterinario Tawi.',
  },
  {
    id: 'cateterismo',
    number: '07',
    name: 'Cateterismo',
    description: 'Procedimientos de cateterismo veterinario como parte de la atención médica del paciente.',
    buttonText: 'CONSULTAR',
    iconName: 'Syringe',
    featuredInHome: false,
    imageUrl: '/services/service_cateterismo.jpg',
    imageAlt: 'Procedimiento de cateterismo veterinario profesional',
    whatsappMessage: 'Hola, deseo información sobre procedimientos de cateterismo veterinario en Centro Veterinario Tawi.',
  },
  {
    id: 'esterilizacion',
    number: '08',
    name: 'Esterilización',
    description: 'Procedimientos de esterilización para mascotas.',
    details: ['OVH', 'Orquiectomía'],
    buttonText: 'CONSULTAR',
    iconName: 'ShieldCheck',
    featuredInHome: true,
    imageUrl: '/services/service_esterilizacion.jpg',
    imageAlt: 'Procedimiento de esterilización para perros y gatos OVH y Orquiectomía',
    whatsappMessage: 'Hola, deseo agendar o consultar sobre la esterilización (OVH / Orquiectomía) de mi mascota en Centro Veterinario Tawi.',
  },
  {
    id: 'profilaxis',
    number: '09',
    name: 'Profilaxis',
    description: 'Servicio de profilaxis para contribuir al cuidado de la salud oral de las mascotas.',
    buttonText: 'CONSULTAR',
    iconName: 'Sparkles',
    featuredInHome: true,
    imageUrl: '/services/service_profilaxis.jpg',
    imageAlt: 'Profilaxis dental y salud oral de mascotas',
    whatsappMessage: 'Hola, deseo consultar sobre el servicio de profilaxis dental para mi mascota en Centro Veterinario Tawi.',
  },
  {
    id: 'vacunacion',
    number: '10',
    name: 'Vacunación',
    description: 'Vacunación para la prevención y protección de la salud de las mascotas.',
    details: ['Esquema inicial obligatorio', 'Triple felina anual', 'Séxtuple anual'],
    buttonText: 'CONSULTAR',
    iconName: 'ShieldPlus',
    featuredInHome: true,
    imageUrl: '/services/service_vacunacion.jpg',
    imageAlt: 'Vacunación preventiva para perros y gatos en Centro Veterinario Tawi',
    whatsappMessage: 'Hola, deseo consultar sobre el esquema de vacunación para mi mascota en Centro Veterinario Tawi.',
  },
  {
    id: 'eutanasia',
    number: '11',
    name: 'Eutanasia',
    description: 'Procedimiento disponible previa valoración médica. Este procedimiento se realiza únicamente cuando el paciente, después de una valoración médica, es considerado candidato.',
    buttonText: 'CONSULTAR',
    isSolemn: true,
    iconName: 'HeartHandshake',
    featuredInHome: false,
    imageUrl: '/services/service_eutanasia.jpg',
    imageAlt: 'Acompañamiento respetuoso y empático previa valoración médica',
    whatsappMessage: 'Hola, me comunico respetuosamente con Centro Veterinario Tawi para consultar sobre el procedimiento de eutanasia previa valoración médica.',
  },
  {
    id: 'peluqueria-canina',
    number: '12',
    name: 'Peluquería Canina',
    description: 'Servicio de cuidado estético y peluquería para perros.',
    buttonText: 'CONSULTAR',
    iconName: 'Scissors',
    featuredInHome: true,
    imageUrl: '/services/service_peluqueria.jpg',
    imageAlt: 'Peluquería canina y cuidado estético profesional para perros',
    whatsappMessage: 'Hola, deseo consultar y agendar servicio de Peluquería Canina en Centro Veterinario Tawi.',
  },
  {
    id: 'spa',
    number: '13',
    name: 'SPA',
    description: 'Espacio dedicado al cuidado y bienestar de las mascotas.',
    schedule: 'Domingos a viernes: 8:00 a. m. – 4:00 p. m.',
    buttonText: 'CONSULTAR',
    iconName: 'Bath',
    featuredInHome: false,
    imageUrl: '/services/service_spa.jpg',
    imageAlt: 'Servicio de SPA para mascotas en Centro Veterinario Tawi',
    whatsappMessage: 'Hola, deseo consultar y agendar el servicio de SPA para mascotas en Centro Veterinario Tawi.',
  },
];

export const HOME_FEATURED_SERVICES = ALL_SERVICES.filter((s) => s.featuredInHome);
