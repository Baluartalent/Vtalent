export default function Footer() {
  return (
    <footer>
      <div className="container">
        
        {/* Footer Top WhatsApp Banner */}
        <div id="footer-contacto" className="footer-top">
          <h3>¿Necesitas asesoría en Recursos Humanos? Estamos para ayudarte.</h3>
          <a href="https://api.whatsapp.com/send?phone=593964196795&text=Hola%20BALUARTALENT%20%26%20Co.,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20de%20RRHH" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: 'currentColor' }}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Conversemos por WhatsApp
          </a>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand & Description */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="BALUARTALENT & Co." style={{ height: '52px', objectFit: 'contain' }} />
            </div>
            <p>
              BALUARTALENT & Co. Consultoría Integral es la consultora de Recursos Humanos de referencia en Quito, Ecuador. Potenciamos la productividad y el clima laboral de tu organización con soluciones a la medida.
            </p>
            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/baluartalent-co" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="footer-column">
            <h4>Enlaces</h4>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#nosotros">Por Qué Nosotros</a></li>
              <li><a href="#programas-capacitacion">Programas</a></li>
              <li><a href="#/cursos">Cursos</a></li>
              <li><a href="#/verificar-certificado">Verificar Certificado</a></li>
              <li><a href="#casos-de-exito">Casos de Éxito</a></li>
              <li><a href="#footer-contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>Programas</h4>
            <ul className="footer-links">
              <li><a href="#programas-capacitacion">Gestión del Talento Humano</a></li>
              <li><a href="#programas-capacitacion">Seguridad y Salud Ocupacional</a></li>
              <li><a href="#programas-capacitacion">Marketing, Ventas y Servicio</a></li>
              <li><a href="#programas-capacitacion">Desarrollo Organizacional</a></li>
              <li><a href="#programas-capacitacion">Asesorías Especializadas</a></li>
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div className="footer-column">
            <h4>Contacto y Ubicación</h4>
            <ul className="footer-links" style={{ gap: '1rem', marginTop: '1.2rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem', color: 'var(--primary)' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>
                  Av. Naciones Unidas E2-30 - entre Iñaquito y Núñez de Vela. Ed. METROPOLITAN, Piso 4, Off. 413.<br/>Quito - Ecuador
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--secondary)' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Teléf: <a href="tel:+59323617038" style={{ color: 'inherit', fontWeight: '500' }}>(+593) 2 3617038</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--primary)' }}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <span>Celular: <a href="tel:+593964196795" style={{ color: 'inherit', fontWeight: '500' }}>0964196795</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: '#25D366' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>WhatsApp: <a href="https://api.whatsapp.com/send?phone=593964196795" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: '600' }}>0964196795</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--primary)' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email: <a href="mailto:info@baluartalent.com" style={{ color: 'inherit', fontWeight: '500' }}>info@baluartalent.com</a></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="footer-bottom">
          <p>© 2026 BALUARTALENT & Co. Consultoría Integral. Todos los derechos reservados. Quito, Ecuador.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#/politica-de-privacidad" style={{ color: 'var(--text-muted)' }}>Política de Privacidad</a>
            <span style={{ color: 'var(--border-light)' }}>|</span>
            <a href="#/politica-de-privacidad" style={{ color: 'var(--text-muted)' }}>Términos y Condiciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
