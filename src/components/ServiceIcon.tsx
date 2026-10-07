import React from 'react';
import {
  Stethoscope,
  Clock,
  Activity,
  FlaskConical,
  Pill,
  BedDouble,
  Syringe,
  ShieldCheck,
  Sparkles,
  ShieldPlus,
  HeartHandshake,
  Scissors,
  Bath,
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Stethoscope':
      return <Stethoscope className={className} />;
    case 'ClockAlert':
      return <Clock className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'FlaskConical':
      return <FlaskConical className={className} />;
    case 'Pill':
      return <Pill className={className} />;
    case 'BedDouble':
      return <BedDouble className={className} />;
    case 'Syringe':
      return <Syringe className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ShieldPlus':
      return <ShieldPlus className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Scissors':
      return <Scissors className={className} />;
    case 'Bath':
      return <Bath className={className} />;
    default:
      return <Stethoscope className={className} />;
  }
};
