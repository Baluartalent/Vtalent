import { useState, useEffect } from 'react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const updateLocation = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('popstate', updateLocation);
    window.addEventListener('hashchange', updateLocation);
    return () => {
      window.removeEventListener('popstate', updateLocation);
      window.removeEventListener('hashchange', updateLocation);
    };
  }, []);

  const closeMobileMenus = () => {
    setMobileMenuOpen(false);
    setMobileNosotrosOpen(false);
    setMobileServiciosOpen(false);
  };

  const navigateTo = (e, href) => {
    closeMobileMenus();

    // 1. Clean subpage routing (ej. /cursos, /verificar-certificado)
    if (href.startsWith('/') && !href.startsWith('/#')) {
      e.preventDefault();
      if (window.location.pathname !== href || window.location.hash) {
        window.history.pushState(null, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setCurrentPath(href);
      setCurrentHash('');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // 2. Hash subpage routing legacy fallback (ej. #/cursos -> /cursos)
    if (href.startsWith('#/')) {
      e.preventDefault();
      const cleanPath = href.replace(/^#/, '');
      if (window.location.pathname !== cleanPath || window.location.hash) {
        window.history.pushState(null, '', cleanPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setCurrentPath(cleanPath);
      setCurrentHash('');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // 3. Home navigation
    if (href === '#' || href === '#inicio' || href === '/') {
      e.preventDefault();
      const onSubpage = window.location.pathname !== '/' || (window.location.hash && window.location.hash.startsWith('#/'));
      if (onSubpage) {
        window.history.pushState(null, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
      } else if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#inicio') {
        window.location.hash = '#';
      }
      setCurrentPath('/');
      setCurrentHash('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 4. In-page anchor navigation (ej. #nosotros, #programas)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const onSubpage = window.location.pathname !== '/' || (window.location.hash && window.location.hash.startsWith('#/'));
      if (onSubpage) {
        window.history.pushState(null, '', `/#${targetId}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setCurrentPath('/');
      } else {
        if (window.location.hash !== href) {
          window.location.hash = href;
        }
        const element = document.getElementById(targetId);
        if (element) {
          const nav = document.querySelector('.navbar');
          const navHeight = nav ? nav.offsetHeight : 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight - 15,
            behavior: 'smooth'
          });
        }
      }
      setCurrentHash(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeActive = currentPath === '/' && (!currentHash || currentHash === '#' || currentHash === '#inicio');
  const isNosotrosActive = ['/nuestros-lideres', '/mision-vision', '/valores-corporativos'].includes(currentPath);
  const isProgramasActive = ['/plan-de-accion', '/modelo-de-desarrollo', '/gestion-nomina', '/asesoria-juridica', '/capacitacion-corporativa'].includes(currentPath);
  const isCursosActive = currentPath === '/cursos';
  const isCertificadosActive = currentPath === '/verificar-certificado';
  const isCasosActive = currentHash === '#casos-de-exito';
  const isContactoActive = currentHash === '#footer-contacto';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* 1. TOP BAR (Fila Superior - Contacto) */}
      <div className="navbar-top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-contact">
            <span>¿Preguntas?</span>
            <span className="separator">|</span>
            <a href="mailto:info@baluartalent.com">info@baluartalent.com</a>
            <span className="separator">|</span>
            <a href="https://aula.baluartalent.com" target="_blank" rel="noopener noreferrer">Cursos Aula Virtual</a>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BAR (Fila Media - Navegación Principal) */}
      <div className="navbar-middle-bar">
        <div className="container middle-bar-container">
          <a href="/" className="logo" onClick={(e) => navigateTo(e, '/')}>
            <img 
              src="/logo.png" 
              alt="BALUARTALENT & Co." 
              style={{ 
                height: scrolled ? '46px' : '56px', 
                transition: 'height 0.3s ease', 
                objectFit: 'contain' 
              }} 
            />
          </a>

          {/* Menú de Navegación Principal */}
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="/" className={isHomeActive ? 'active' : ''} onClick={(e) => navigateTo(e, '/')}>
                INICIO
              </a>
            </li>
            <li className={`nav-item-dropdown ${mobileNosotrosOpen ? 'mobile-open' : ''}`}>
              <a 
                href="#nosotros" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setMobileNosotrosOpen(!mobileNosotrosOpen); 
                }}
                className={`dropdown-toggle ${isNosotrosActive ? 'active' : ''}`}
              >
                NOSOTROS
                <svg className="dropdown-arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.35rem', transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/nuestros-lideres" onClick={(e) => navigateTo(e, '/nuestros-lideres')}>Nuestros líderes</a></li>
                <li><a href="/mision-vision" onClick={(e) => navigateTo(e, '/mision-vision')}>Misión y Visión</a></li>
                <li><a href="/valores-corporativos" onClick={(e) => navigateTo(e, '/valores-corporativos')}>Valores Corporativos</a></li>
              </ul>
            </li>
            <li className={`nav-item-dropdown ${mobileServiciosOpen ? 'mobile-open' : ''}`}>
              <a 
                href="#programas" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setMobileServiciosOpen(!mobileServiciosOpen); 
                }}
                className={`dropdown-toggle ${isProgramasActive ? 'active' : ''}`}
              >
                PROGRAMAS
                <svg className="dropdown-arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.35rem', transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/capacitacion-igualdad-salarial" onClick={(e) => navigateTo(e, '/capacitacion-igualdad-salarial')}>⭐ Ley de Igualdad Salarial (MDT)</a></li>
                <li><a href="#programas-capacitacion" onClick={(e) => navigateTo(e, '#programas-capacitacion')}>Programas de Capacitación</a></li>
                <li><a href="/plan-de-accion" onClick={(e) => navigateTo(e, '/plan-de-accion')}>Plan de Acción</a></li>
                <li><a href="/modelo-de-desarrollo" onClick={(e) => navigateTo(e, '/modelo-de-desarrollo')}>Modelo de Desarrollo</a></li>
              </ul>
            </li>
            <li><a href="/cursos" className={isCursosActive ? 'active' : ''} onClick={(e) => navigateTo(e, '/cursos')}>CURSOS</a></li>
            <li><a href="/verificar-certificado" className={isCertificadosActive ? 'active' : ''} onClick={(e) => navigateTo(e, '/verificar-certificado')}>CERTIFICADOS</a></li>
            <li><a href="#casos-de-exito" className={isCasosActive ? 'active' : ''} onClick={(e) => navigateTo(e, '#casos-de-exito')}>CASOS DE ÉXITO</a></li>
            <li><a href="#footer-contacto" className={isContactoActive ? 'active' : ''} onClick={(e) => navigateTo(e, '#footer-contacto')}>CONTACTO</a></li>
            
            <li className="mobile-only-menu-section">
              <span className="mobile-section-title">Cursos & Aula Virtual</span>
              <ul className="mobile-services-list">
                <li><a href="/capacitacion-igualdad-salarial" onClick={(e) => navigateTo(e, '/capacitacion-igualdad-salarial')}>⭐ Ley de Igualdad Salarial MDT-2025-006</a></li>
                <li><a href="/cursos" onClick={(e) => navigateTo(e, '/cursos')}>Catálogo Completo</a></li>
                <li><a href="/verificar-certificado" onClick={(e) => navigateTo(e, '/verificar-certificado')}>Verificar Certificado Oficial</a></li>
              </ul>
            </li>

            <li className="mobile-only-menu-section">
              <span className="mobile-section-title">Programas de Capacitación</span>
              <ul className="mobile-services-list">
                <li><a href="#programas-capacitacion" onClick={(e) => navigateTo(e, '#programas-capacitacion')}>Gestión del Talento Humano</a></li>
                <li><a href="#programas-capacitacion" onClick={(e) => navigateTo(e, '#programas-capacitacion')}>Seguridad y Salud Ocupacional</a></li>
                <li><a href="#programas-capacitacion" onClick={(e) => navigateTo(e, '#programas-capacitacion')}>Marketing, Ventas y Servicio</a></li>
                <li><a href="#programas-capacitacion" onClick={(e) => navigateTo(e, '#programas-capacitacion')}>Desarrollo Organizacional</a></li>
                <li><a href="#programas-capacitacion" onClick={(e) => navigateTo(e, '#programas-capacitacion')}>Asesorías Especializadas</a></li>
              </ul>
            </li>

            <li className="mobile-only-menu-section">
              <span className="mobile-section-title">Contacto Rápido</span>
              <div className="mobile-contact-info">
                <a href="mailto:info@baluartalent.com" className="mobile-contact-link">info@baluartalent.com</a>
                <a href="tel:+59323617038" className="mobile-contact-link">Telf: (+593) 2 3617038</a>
                <a href="tel:+593964196795" className="mobile-contact-link">Cel: 0964196795</a>
              </div>
            </li>
          </ul>

          <div className="middle-bar-right">
            <button className="nav-cta-btn" onClick={onOpenContact}>
              ¿CONSULTAS? 💬
            </button>

            <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR (Fila Inferior - Programas) */}
      <div className="navbar-bottom-bar">
        <div className="container bottom-bar-container">
          <div className="services-links">
            <a href="#programas-capacitacion">TALENTO HUMANO</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">SEGURIDAD Y SALUD</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">MARKETING Y VENTAS</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">DESARROLLO ORG.</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">ASESORÍAS</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
