import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

const SEO_TITLES: Record<PageRoute, string> = {
  inicio: 'Centro Veterinario Tawi | Veterinaria 24 Horas en Medellín',
  nosotros: 'Nosotros | Centro Veterinario Tawi',
  servicios: 'Servicios Veterinarios | Centro Veterinario Tawi',
  contacto: 'Contacto | Centro Veterinario Tawi Medellín',
};

function getRouteFromPath(path: string): PageRoute {
  const cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
  if (cleanPath === '/nosotros') return 'nosotros';
  if (cleanPath === '/servicios') return 'servicios';
  if (cleanPath === '/contacto') return 'contacto';
  return 'inicio';
}

function getPathFromRoute(page: PageRoute): string {
  switch (page) {
    case 'nosotros':
      return '/nosotros';
    case 'servicios':
      return '/servicios';
    case 'contacto':
      return '/contacto';
    case 'inicio':
    default:
      return '/';
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    return getRouteFromPath(window.location.pathname);
  });

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    const newPath = getPathFromRoute(page);
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync document.title with SEO specifications
  useEffect(() => {
    document.title = SEO_TITLES[currentPage];
  }, [currentPage]);

  // Handle browser back and forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      const page = getRouteFromPath(window.location.pathname);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E293B]">
      {/* Sticky Top Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content View with transition */}
      <main className="grow">
        {currentPage === 'inicio' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'nosotros' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'servicios' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'contacto' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
