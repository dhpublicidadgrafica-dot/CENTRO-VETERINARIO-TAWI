import React, { useState } from 'react';

interface TawiLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TawiLogo: React.FC<TawiLogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-13',
    lg: 'h-12 sm:h-14',
  };

  // Primary: Official Brand Logo from Google Drive
  if (!imgError) {
    if (isDark) {
      return (
        <div
          className={`inline-flex items-center bg-white px-3.5 py-1.5 rounded-2xl shadow-xs transition-transform hover:scale-[1.01] ${className}`}
        >
          <img
            src="/logo_tawi.png"
            alt="Centro Veterinario Tawi"
            onError={() => setImgError(true)}
            className={`${heights[size]} w-auto object-contain select-none`}
          />
        </div>
      );
    }

    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/logo_tawi.png"
          alt="Centro Veterinario Tawi"
          onError={() => setImgError(true)}
          className={`${heights[size]} w-auto object-contain select-none transition-transform hover:scale-[1.01]`}
        />
      </div>
    );
  }

  // Graceful fallback with brand typography if ever offline
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-[#F2F9FA] border border-[#46AFC2]/30 flex items-center justify-center text-[#46AFC2]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-[0.2em] uppercase font-sans text-[10px] text-[#46AFC2]">
          Centro Veterinario
        </span>
        <span className={`font-extrabold tracking-tight font-heading text-xl ${isDark ? 'text-white' : 'text-[#3E1B77]'}`}>
          TAWI
        </span>
      </div>
    </div>
  );
};
