import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AreasDesarrollo from './components/AreasDesarrollo';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Subpages
import NuestrosLideres from './components/NuestrosLideres';
import MisionVision from './components/MisionVision';
import ValoresCorporativos from './components/ValoresCorporativos';
import PlanDeAccion from './components/PlanDeAccion';
import ModeloDesarrollo from './components/ModeloDesarrollo';
import GestionNomina from './components/GestionNomina';
import AsesoriaJuridica from './components/AsesoriaJuridica';
import CapacitacionCorporativa from './components/CapacitacionCorporativa';
import Cursos from './components/Cursos';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import VerificarCertificado from './components/VerificarCertificado';

export const scrollToSection = (targetId, smooth = true) => {
  if (!targetId || targetId === 'inicio' || targetId === 'top') {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' });
    return;
  }
  const element = document.getElementById(targetId);
  if (element) {
    const nav = document.querySelector('.navbar');
    const navHeight = nav ? nav.offsetHeight : 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight - 15;
    window.scrollTo({
      top: offsetPosition,
      behavior: smooth ? 'smooth' : 'instant'
    });
  }
};

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const pendingScrollRef = useRef(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.split('?')[0];
      const path = window.location.pathname.replace(/\/+$/, '');

      if (hash === '#/nuestros-lideres' || path === '/nuestros-lideres') {
        setCurrentView('nuestros-lideres');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/mision-vision' || path === '/mision-vision') {
        setCurrentView('mision-vision');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/valores-corporativos' || path === '/valores-corporativos') {
        setCurrentView('valores-corporativos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/plan-de-accion' || path === '/plan-de-accion') {
        setCurrentView('plan-de-accion');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/modelo-de-desarrollo' || path === '/modelo-de-desarrollo') {
        setCurrentView('modelo-de-desarrollo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/gestion-de-nomina' || path === '/gestion-de-nomina') {
        setCurrentView('gestion-de-nomina');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/asesoria-juridica-legal' || path === '/asesoria-juridica-legal') {
        setCurrentView('asesoria-juridica-legal');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/capacitacion-corporativa' || path === '/capacitacion-corporativa') {
        setCurrentView('capacitacion-corporativa');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/cursos' || path === '/cursos') {
        setCurrentView('cursos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        hash === '#/verificar-certificado' || 
        hash === '#/certificados' || 
        hash === '#/validar-certificado' || 
        hash === '#/validacion' || 
        path === '/verificar-certificado' || 
        path === '/certificados'
      ) {
        setCurrentView('verificar-certificado');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        hash === '#/politica-de-privacidad' || 
        hash === '#politica-de-privacidad' || 
        hash === '#/privacidad' || 
        hash === '#privacidad' || 
        path === '/politica-de-privacidad' || 
        path === '/privacidad'
      ) {
        setCurrentView('politica-de-privacidad');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        const rawHash = window.location.hash;
        const id = rawHash && !rawHash.startsWith('#/') && !rawHash.startsWith('#privacidad') && !rawHash.startsWith('#politica-de-privacidad') ? rawHash.substring(1) : null;
        setCurrentView((prev) => {
          if (prev !== 'home') {
            pendingScrollRef.current = id;
            return 'home';
          }
          if (id) {
            scrollToSection(id, true);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return 'home';
        });
      }

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // When returning from a subpage to home, immediately scroll to the target section once home mounts
  useEffect(() => {
    if (currentView === 'home') {
      if (pendingScrollRef.current) {
        const targetId = pendingScrollRef.current;
        pendingScrollRef.current = null;
        const timer = setTimeout(() => {
          scrollToSection(targetId, true);
        }, 40);
        return () => clearTimeout(timer);
      }
    }
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'nuestros-lideres':
        return <NuestrosLideres />;
      case 'mision-vision':
        return <MisionVision />;
      case 'valores-corporativos':
        return <ValoresCorporativos />;
      case 'plan-de-accion':
        return <PlanDeAccion />;
      case 'modelo-de-desarrollo':
        return <ModeloDesarrollo />;
      case 'gestion-de-nomina':
        return <GestionNomina />;
      case 'asesoria-juridica-legal':
        return <AsesoriaJuridica />;
      case 'capacitacion-corporativa':
        return <CapacitacionCorporativa />;
      case 'cursos':
        return <Cursos onOpenContact={handleOpenContact} />;
      case 'verificar-certificado':
        return <VerificarCertificado onOpenContact={handleOpenContact} />;
      case 'politica-de-privacidad':
        return <PoliticaPrivacidad />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <WhyUs />
            <AreasDesarrollo />
            <Services />
            <Clients />
          </>
        );
    }
  };

  return (
    <>
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
}

export default App;

