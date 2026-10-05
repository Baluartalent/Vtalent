import React from 'react';

export default function About() {
  return (
    <section id="nosotros" className="about-section section-padding">
      {/* Decorative Blob */}
      <div className="bg-blob blob-pink" style={{ top: '10%', right: '-5%' }}></div>
      <div className="bg-blob blob-purple" style={{ bottom: '15%', left: '5%' }}></div>
      
      <div className="container about-grid">
        {/* Left Side: Content */}
        <div className="about-content">
          <span className="section-subtitle">SOBRE NOSOTROS</span>
          <h2 className="about-title">
            Baluartalent & Co. ofrece consultoría integral en Talento Humano.
          </h2>
          <p className="about-text">
            En Baluartalent & Co. entendemos que el éxito empresarial se fundamenta en las personas. 
            Somos una firma consultora integral especializada en Talento Humano. Alineamos su capital 
            humano con los objetivos del negocio para transformar la gestión de recursos humanos en una 
            ventaja competitiva sostenible, asegurando innovación y resultados medibles.
          </p>
          
          {/* Key pillars of the agency */}
          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="pillar-info">
                <h3>Resultados Medibles</h3>
                <p>Monitoreamos y optimizamos el impacto directo en tu negocio.</p>
              </div>
            </div>
            
            <div className="pillar-item">
              <div className="pillar-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="pillar-info">
                <h3>Alineación Estratégica</h3>
                <p>Vinculamos el capital humano con las metas y objetivos comerciales.</p>
              </div>
            </div>
            
            <div className="pillar-item">
              <div className="pillar-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="pillar-info">
                <h3>Gestión Innovadora</h3>
                <p>Implementamos metodologías de vanguardia para la nueva era laboral.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image / Graphic */}
        <div className="about-visual">
          <div className="about-image-wrapper">
            <img 
              src="/hero_recruitment.png" 
              alt="Gestión de Talento Humano y Consultoría - BALUARTALENT & Co." 
              className="about-image"
              loading="lazy"
            />
            <div className="glass-card experience-badge">
              <span className="badge-number">100%</span>
              <span className="badge-text">Enfoque Estratégico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
