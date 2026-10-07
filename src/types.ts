export type PageRoute = 'inicio' | 'nosotros' | 'servicios' | 'contacto';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  details?: string[];
  schedule?: string;
  buttonText: string;
  whatsappMessage?: string;
  isEmergency?: boolean;
  isSolemn?: boolean;
  iconName: string;
  featuredInHome?: boolean;
  imageUrl: string;
  imageAlt: string;
}
