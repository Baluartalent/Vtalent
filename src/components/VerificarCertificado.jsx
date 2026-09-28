import React, { useState, useEffect } from 'react';
import { fetchLiveCertificates } from '../services/certificateService';

export default function VerificarCertificado({ onOpenContact }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const normalizeStr = (str) => {
    return (str || '').toString().trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  };

  const isCodeMatch = (certCode, query) => {
    const normCert = normalizeStr(certCode);
    const normQuery = normalizeStr(query);
    if (!normCert || !normQuery) return false;

    // 1. Coincidencia exacta
    if (normCert === normQuery) return true;

    // 2. Coincidencia parcial o substring
    if (normCert.includes(normQuery) || normQuery.includes(normCert)) return true;

    // 3. Coincidencia inteligente por prefijo y número secuencial (ej. REG-BAL-0003 vs REG-BAL-2026-EC-0003)
    const certDigits = normCert.replace(/\D/g, '');
    const queryDigits = normQuery.replace(/\D/g, '');

    const certHasBal = normCert.startsWith('regbal') || normCert.startsWith('bal');
    const queryHasBal = normQuery.startsWith('regbal') || normQuery.startsWith('bal');

    if (certHasBal && queryHasBal && queryDigits) {
      if (certDigits.endsWith(queryDigits)) {
        return true;
      }
    }

    return false;
  };

  const executeSearch = async (query) => {
    const cleanQuery = normalizeStr(query);
    if (!cleanQuery) {
      setSearchResults([]);
      setSelectedResult(null);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    try {
      const certificates = await fetchLiveCertificates();
      const matches = certificates.filter((cert) => {
        const matchCode = isCodeMatch(cert.code, query);
        const matchId = normalizeStr(cert.idNumber) === cleanQuery;
        return matchCode || matchId;
      });

      setSearchResults(matches);
      setSelectedResult(matches.length > 0 ? matches[0] : null);
      setHasSearched(true);
    } catch (err) {
      console.error('Error buscando certificados:', err);
      setSearchResults([]);
      setSelectedResult(null);
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Parse URL query parameter (e.g., #/verificar-certificado?codigo=REG-BAL-2026-EC-0001)
  useEffect(() => {
    const parseUrlParams = () => {
      const fullUrl = window.location.href;
      let queryParam = '';

      if (fullUrl.includes('?')) {
        const queryStr = fullUrl.split('?')[1];
        const params = new URLSearchParams(queryStr);
        queryParam = params.get('codigo') || params.get('code') || params.get('cedula') || params.get('id') || '';
      }

      if (queryParam) {
        setSearchQuery(queryParam);
        executeSearch(queryParam);
      }
    };

    parseUrlParams();
    window.addEventListener('hashchange', parseUrlParams);
    return () => window.removeEventListener('hashchange', parseUrlParams);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    executeSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedResult(null);
    setHasSearched(false);
    window.location.hash = '#/verificar-certificado';
  };

  const handleCopyLink = (code) => {
    const url = `${window.location.origin}${window.location.pathname}#/verificar-certificado?codigo=${encodeURIComponent(code)}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  return (
    <div className="subpage-wrapper cert-verification-wrapper">
      {/* Page Header Banner */}
      <header className="subpage-header cert-header">
        <div className="bg-blob blob-purple" style={{ top: '-15%', right: '10%', opacity: 0.25 }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-20%', left: '5%', opacity: 0.25 }}></div>

        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Verificación de Certificados</span>
          </div>

          <div className="cert-header-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span>SISTEMA DE VALIDACIÓN DIGITAL OFICIAL</span>
          </div>

          <h1>CONSULTA Y VALIDACIÓN DE CERTIFICADOS</h1>
          <p className="subpage-subtitle">
            Verifique la autenticidad y registro académico de los certificados de capacitación continua emitidos por BALUARTALENT & Co.
          </p>
        </div>
      </header>

      {/* Main Section */}
      <section className="subpage-content section-padding" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          
          {/* Search Card */}
          <div className="cert-search-card">
            <div className="cert-search-icon-bubble">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3>Ingrese Código de Registro o C.I.</h3>
            <p className="cert-search-subtitle">
              Consulte ingresando el código del certificado o número de cédula de identidad del participante.
            </p>

            <form onSubmit={handleSearchSubmit} className="cert-search-form">
              <div className="cert-input-wrapper">
                <svg className="cert-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  <line x1="7" y1="8" x2="17" y2="8"></line>
                  <line x1="7" y1="12" x2="17" y2="12"></line>
                  <line x1="7" y1="16" x2="12" y2="16"></line>
                </svg>
                <input
                  type="text"
                  className="cert-input"
                  placeholder="Código de registro o C.I."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Código de registro o cédula de identidad"
                  required
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="cert-input-clear-btn"
                    onClick={handleClearSearch}
                    aria-label="Limpiar búsqueda"
                  >
                    ×
                  </button>
                )}
              </div>
              <button type="submit" className="btn btn-primary cert-search-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <svg className="spinner-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" strokeLinecap="round"></circle>
                    </svg>
                    Consultando...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Consultar Certificado
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Multiple Certificates Selector (if participant has more than 1 certificate registered) */}
          {hasSearched && searchResults.length > 1 && (
            <div className="cert-multi-selector-box animate-fade-in" style={{ marginBottom: '1.5rem' }}>
              <div className="cert-multi-header">
                <span className="cert-multi-count-badge">
                  {searchResults.length} Certificados Registrados
                </span>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  Seleccione el programa o curso que desea visualizar:
                </p>
              </div>
              <div className="cert-multi-list">
                {searchResults.map((cert) => (
                  <button
                    key={cert.code}
                    type="button"
                    className={`cert-multi-item ${selectedResult?.code === cert.code ? 'active' : ''}`}
                    onClick={() => setSelectedResult(cert)}
                  >
                    <div className="cert-multi-item-title">{cert.courseName}</div>
                    <div className="cert-multi-item-meta">
                      <span className="code-pill">{cert.code}</span>
                      <span className="hours-pill">{cert.durationText}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Area */}
          {hasSearched && selectedResult && (
            <div className="cert-result-container animate-fade-in">
              {/* Authenticity Banner */}
              <div className="cert-auth-banner">
                <div className="cert-auth-badge-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="cert-auth-texts">
                  <h4>CERTIFICADO AUTÉNTICO Y REGISTRADO</h4>
                  <p>Este documento ha sido verificado con éxito en la base de datos oficial de BALUARTALENT & Co. Consultoría Integral.</p>
                </div>
                <div className="cert-auth-seal-pill">
                  <span>ESTADO: {selectedResult.status || 'VÁLIDO'}</span>
                </div>
              </div>

              {/* Certificate Visual Replica Card */}
              <div className="cert-replica-card">
                <div className="cert-replica-top-bar">
                  <div className="cert-replica-brand">
                    <img src="/logo.png" alt="BALUARTALENT & Co." className="cert-replica-logo" />
                  </div>
                  <div className="cert-replica-header-texts">
                    <span className="cert-replica-tag-label">CERTIFICADO DE</span>
                    <h2 className="cert-replica-main-title">CAPACITACIÓN</h2>
                  </div>
                </div>

                <div className="cert-replica-body">
                  <div className="cert-replica-recipient-box">
                    <span className="cert-subheading">Otorgado con distinción a:</span>
                    <h3 className="cert-recipient-name">{selectedResult.participantName}</h3>
                    <div className="cert-id-tag">
                      <strong>C.I. / Identificación:</strong> {selectedResult.idNumber}
                    </div>
                  </div>

                  <p className="cert-award-text">
                    Por haber aprobado satisfactoriamente los requisitos teóricos y prácticos correspondientes al programa de formación profesional especializada en:
                  </p>

                  <div className="cert-course-box">
                    <h4 className="cert-course-title">{selectedResult.courseName}</h4>
                    <div className="cert-course-meta-pills">
                      <span className="cert-duration-pill">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Carga Horaria: {selectedResult.durationText || `${selectedResult.durationHours} Horas`}
                      </span>
                      <span className="cert-dates-pill">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Efectuado en: {selectedResult.executionDates}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Grid */}
                  <div className="cert-details-grid">
                    <div className="cert-detail-item">
                      <span className="cert-detail-label">Fecha de Emisión</span>
                      <span className="cert-detail-val">{selectedResult.issueDate}</span>
                    </div>
                    <div className="cert-detail-item">
                      <span className="cert-detail-label">Código Único de Registro</span>
                      <span className="cert-detail-val code-highlight">{selectedResult.code}</span>
                    </div>
                    <div className="cert-detail-item">
                      <span className="cert-detail-label">Entidad Emisora</span>
                      <span className="cert-detail-val">{selectedResult.institution}</span>
                    </div>
                    <div className="cert-detail-item">
                      <span className="cert-detail-label">Acreditación Académica</span>
                      <span className="cert-detail-val">{selectedResult.signatory} ({selectedResult.signatoryRole})</span>
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="cert-replica-footer">
                  <div className="cert-footer-left">
                    <div className="cert-reg-badge">
                      <span className="reg-code-label">Código Oficial:</span>
                      <strong className="reg-code-text">{selectedResult.code}</strong>
                    </div>
                  </div>

                  <div className="cert-footer-actions">
                    <button 
                      type="button" 
                      className={`btn-cert-secondary ${copiedLink ? 'copied' : ''}`}
                      onClick={() => handleCopyLink(selectedResult.code)}
                    >
                      {copiedLink ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          ¡Enlace Copiado!
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                          Copiar Enlace de Verificación
                        </>
                      )}
                    </button>

                    {selectedResult.pdfUrl && (
                      <a 
                        href={selectedResult.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-cert-download"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Descargar Certificado Oficial (PDF)
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Not Found State */}
          {hasSearched && !isLoading && searchResults.length === 0 && (
            <div className="cert-not-found-card animate-fade-in">
              <div className="cert-not-found-icon">⚠️</div>
              <h3>Certificado no encontrado</h3>
              <p>
                No se encontró ningún certificado registrado bajo el código o documento <strong>"{searchQuery}"</strong>.
              </p>
              <div className="cert-not-found-tips">
                <strong>Recomendaciones:</strong>
                <ul>
                  <li>Verifique que el código esté escrito tal como aparece en el certificado físico o digital.</li>
                  <li>Si busca por documento de identidad, ingrese únicamente números sin guiones ni espacios.</li>
                  <li>Los certificados emitidos recientemente pueden tardar unos instantes en reflejarse en el sistema online.</li>
                </ul>
              </div>
              <div className="cert-not-found-actions">
                <button type="button" className="btn btn-secondary" onClick={handleClearSearch}>
                  Intentar con otro código
                </button>
                <a 
                  href="https://api.whatsapp.com/send?phone=593964196795&text=Hola%20BALUARTALENT%20%26%20Co.,%20tengo%20una%20consulta%20sobre%20la%20validaci%C3%B3n%20de%20mi%20certificado" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ background: '#25D366' }}
                >
                  Contactar a Soporte por WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Security & Verification Guarantees Info */}
          <div className="cert-guarantee-grid">
            <div className="cert-guarantee-card">
              <div className="guarantee-icon" style={{ background: 'rgba(30, 64, 175, 0.1)', color: 'var(--primary)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4>Código Único e Inalterable</h4>
              <p>Cada certificado emitido cuenta con un código alfanumérico único registrado en nuestro repositorio oficial para evitar duplicaciones o falsificaciones.</p>
            </div>

            <div className="cert-guarantee-card">
              <div className="guarantee-icon" style={{ background: 'rgba(13, 148, 136, 0.1)', color: 'var(--secondary)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
              </div>
              <h4>Validación en Tiempo Real 24/7</h4>
              <p>Reclutadores, empresas y evaluadores de talento pueden validar al instante las competencias y horas cursadas por los participantes.</p>
            </div>

            <div className="cert-guarantee-card">
              <div className="guarantee-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h4>Acreditación de Capacitación Continua</h4>
              <p>Programas diseñados bajo altos estándares pedagógicos y marco normativo ecuatoriano en gestión del talento humano y desarrollo corporativo.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
