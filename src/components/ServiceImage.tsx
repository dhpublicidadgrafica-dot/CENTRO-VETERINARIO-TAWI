import React, { useState } from 'react';
import { ServiceIcon } from './ServiceIcon';

interface ServiceImageProps {
  src: string;
  alt: string;
  iconName?: string;
  className?: string;
  aspectRatio?: string;
}

export const ServiceImage: React.FC<ServiceImageProps> = ({
  src,
  alt,
  iconName,
  className = '',
  aspectRatio = 'aspect-4/3',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-[#F2F9FA] ${aspectRatio} ${className}`}
    >
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-200/70 animate-pulse z-10" />
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : (
        /* Zero-Broken-Image Fallback Container */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#F2F9FA] via-white to-[#F6F3FB] text-center">
          <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-[#46AFC2]/30 flex items-center justify-center text-[#46AFC2] mb-2">
            {iconName ? (
              <ServiceIcon name={iconName} className="w-6 h-6" />
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </div>
          <span className="text-xs font-semibold text-[#3E1B77] px-2 leading-tight">
            {alt}
          </span>
        </div>
      )}

      {/* Subtle overlay vignette for high-end look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />
    </div>
  );
};
