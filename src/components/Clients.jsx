export default function Clients() {
  const CLIENTS_DATA = [
    {
      name: 'Consorcio Línea 1 Metro de Quito',
      category: 'ACCIONA · Infraestructura',
      services: 'Gestión Integral de Nómina y Capacitación para el Metro de Quito',
      text: [
        'Asumimos la administración global de la nómina del Consorcio Metro de Quito, la infraestructura de transporte subterráneo más importante del país, que cuenta con una extensión de 22.6 km y 15 estaciones estratégicas.',
        'Bajo el estricto marco de la normativa legal ecuatoriana, gestionamos oportunamente las compensaciones y beneficios de una nómina activa de 5,000 colaboradores, abarcando al personal administrativo, técnico y operativo de primera línea. Así como el desarrollo y ejecución de programas de capacitación y certificación profesional para el personal técnico.'
      ],
      logoInitials: 'MQ'
    },
    {
      name: 'Semeg Cia. Ltda.',
      category: 'Servicios de Oil & Gas · Quito, Ecuador',
      services: 'Gestión de Nómina y Capacitación',
      text: 'Empresa en servicios petroleros, clasificada como Gran Contribuyente. Proveemos gestión integral de nómina bajo normativa IESS, MDT y SRI para sus operaciones de campo y oficina. Implementamos programas de capacitación técnica especializada para fortalecer las competencias de sus equipos operativos en entornos de alta exigencia.',
      logoInitials: 'SM'
    },
    {
      name: 'ICESA S.A.',
      category: 'Retail y Electrodomésticos · Fundada en 1965',
      services: 'Capacitación en Servicio al Cliente y Ventas',
      text: 'Una de las empresas retail más importantes del Ecuador, operando marcas como Almacenes Japón y Orve Hogar con más de 200 locales a nivel nacional. Diseñamos e implementamos programas de capacitación en excelencia de servicio al cliente y técnicas avanzadas de ventas, fortaleciendo las competencias comerciales de sus equipos en todo el país.',
      logoInitials: 'IC'
    }
  ];

  return (
    <section id="casos-de-exito" className="section-padding" style={{ position: 'relative', background: '#F8FAFC' }}>
      <div className="bg-blob blob-purple" style={{ top: '20%', right: '-10%', opacity: 0.08 }}></div>
      <div className="bg-blob blob-cyan" style={{ bottom: '10%', left: '-10%', opacity: 0.08 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="services-header" style={{ marginBottom: '4rem' }}>
          <span className="section-subtitle" style={{ marginBottom: '1.5rem', background: 'rgba(30, 64, 175, 0.1)', color: 'var(--primary)' }}>CASOS DE ÉXITO</span>
          <h2>Historias de Impacto y Resultados Realizados</h2>
          <p>
            Conozca cómo colaboramos con organizaciones líderes para potenciar y blindar sus operaciones y equipos de trabajo.
          </p>
        </div>

        <div className="clients-grid">
          {CLIENTS_DATA.map((client, index) => {
            const isFirst = index === 0;
            if (isFirst) {
              return (
                <div key={index} className="client-card first-case-card">
                  <div className="first-case-inner">
                    <div className="first-case-left">
                      <div className="client-header" style={{ marginBottom: '1.5rem' }}>
                        <div className="client-logo-placeholder" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', flexShrink: 0 }}>
                          {client.logoInitials}
                        </div>
                        <div className="client-meta">
                          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '0.2rem', lineHeight: '1.3' }}>{client.name}</h3>
                          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', display: 'block', textTransform: 'none', letterSpacing: 'normal' }}>{client.category}</span>
                        </div>
                      </div>
                      <div className="client-card-img-wrapper">
                        <img 
                          src="/metro_quito.jpg" 
                          alt="Consorcio Línea 1 Metro de Quito" 
                          className="client-card-img"
                        />
                      </div>
                    </div>
                    <div className="first-case-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                      <div className="client-services" style={{ 
                        background: 'rgba(13, 148, 136, 0.08)', 
                        color: 'var(--secondary)', 
                        padding: '0.5rem 1rem', 
                        borderRadius: '8px', 
                        fontSize: '0.85rem', 
                        fontWeight: '700', 
                        marginBottom: '1.2rem',
                        borderLeft: '3px solid var(--secondary)',
                        display: 'inline-block'
                      }}>
                        Servicios: {client.services}
                      </div>
                      <div className="client-text" style={{ textAlign: 'justify', fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%' }}>
                        {Array.isArray(client.text) ? (
                          client.text.map((paragraph, pIdx) => (
                            <p key={pIdx} style={{ margin: 0 }}>{paragraph}</p>
                          ))
                        ) : (
                          <p style={{ margin: 0 }}>{client.text}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="client-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="client-header" style={{ marginBottom: '1.5rem' }}>
                  <div className="client-logo-placeholder" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', flexShrink: 0 }}>
                    {client.logoInitials}
                  </div>
                  <div className="client-meta">
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '0.2rem', lineHeight: '1.3' }}>{client.name}</h3>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', display: 'block', textTransform: 'none', letterSpacing: 'normal' }}>{client.category}</span>
                  </div>
                </div>
                
                <div className="client-services" style={{ 
                  background: 'rgba(13, 148, 136, 0.08)', 
                  color: 'var(--secondary)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '8px', 
                  fontSize: '0.85rem', 
                  fontWeight: '700', 
                  marginBottom: '1.2rem',
                  borderLeft: '3px solid var(--secondary)',
                  alignSelf: 'flex-start'
                }}>
                  Servicios: {client.services}
                </div>

                <div className="client-text" style={{ textAlign: 'justify', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
                  {Array.isArray(client.text) ? (
                    client.text.map((paragraph, pIdx) => (
                      <p key={pIdx} style={{ margin: 0 }}>{paragraph}</p>
                    ))
                  ) : (
                    <p style={{ margin: 0 }}>{client.text}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
