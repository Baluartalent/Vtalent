import React from 'react';

export default function NuestrosLideres() {
  return (
    <div className="subpage-wrapper">
      {/* Page Header Banner */}
      <header className="subpage-header">
        <div className="bg-blob blob-purple" style={{ top: '-10%', right: '10%' }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-10%', left: '10%' }}></div>
        
        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Nuestros Líderes</span>
          </div>
          <h1>Nuestros Líderes</h1>
          <p className="subpage-subtitle">Un socio estratégico con experiencia comprobada</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '2.5rem', maxWidth: '800px' }}>
            <h2>Nuestra Dirección Estratégica</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '400', lineHeight: '1.6' }}>
              El equipo de Baluartalent & Co. está integrado por profesionales especializados en Dirección Estratégica de Recursos Humanos, Capacitación Continua y Legislación Laboral. Con amplia trayectoria corporativa liderando áreas de Talento Humano en sectores multisectoriales, combinan la visión del negocio con metodologías ágiles para blindar y potenciar su capital humano.
            </p>
          </div>

          <div className="leaders-grid">
            {/* Leader 1 */}
            <div className="leader-card">
              <div className="leader-image-wrapper">
                <img 
                  src="/hector_cevallos.png" 
                  alt="Hector Cevallos - Asesor Jurídico" 
                  className="leader-img"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="leader-info">
                <h3>Hector Cevallos</h3>
                <span className="leader-role">Asesor Jurídico</span>
                <span className="leader-subtitle">Abogado en Derecho Laboral y Seguridad Social</span>
                <p className="leader-bio">
                  +20 años de experiencia en litigio, consultoría estratégica y representación jurídica integral en el área procesal y Derecho Laboral.
                </p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="leader-card">
              <div className="leader-image-wrapper">
                <img 
                  src="/jorge_macias.png" 
                  alt="Jorge Macias - Consultor Senior" 
                  className="leader-img"
                />
              </div>
              <div className="leader-info">
                <h3>Jorge Macias</h3>
                <span className="leader-role">Consultor Senior</span>
                <span className="leader-subtitle">Magíster en Administración de Empresas</span>
                <p className="leader-bio">
                  +20 años de experiencia en capacitación empresarial. Especialista en estrategias de marketing, gestión de ventas y formación del talento humano.
                </p>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="leader-card">
              <div className="leader-image-wrapper">
                <img 
                  src="/sandra_vivian.jpg" 
                  alt="Sandra Vivian Gualsaqui - Consultora de Talento Humano" 
                  className="leader-img"
                />
              </div>
              <div className="leader-info">
                <h3>Sandra Vivian Gualsaqui</h3>
                <span className="leader-role">Consultora de Talento Humano</span>
                <span className="leader-subtitle">Especialista en Gestión del Talento y Desarrollo Organizacional</span>
                <p className="leader-bio">
                  +8 años de experiencia liderando procesos de atracción de talento, clima laboral, desarrollo de competencias, planes de retención y capacitación corporativa.
                </p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="#" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              Volver al Inicio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
