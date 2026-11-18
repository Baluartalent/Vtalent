import React, { useState, useEffect, useCallback } from 'react';
import { verifyCertificateByCode } from '../services/certificateService';

export default function VerificarCertificado({ onOpenContact }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState('');
  const [networkError, setNetworkError] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const executeSearch = useCallback(async (query) => {
    const cleanQuery = (query || '').trim();
    if (!cleanQuery) {
      setSelectedResult(null);
      setHasSearched(false);
      setNotFoundMessage('');
      setNetworkError('');
      return;
    }

    setIsLoading(true);
    setNetworkError('');
    setNotFoundMessage('');
    setSelectedResult(null);

    try {
      const result = await verifyCertificateByCode(cleanQuery);

      if (result.valido && result.certificate) {
        setSelectedResult(result.certificate);
        setNotFoundMessage('');
      } else {
        setSelectedResult(null);
        setNotFoundMessage(result.mensaje || 'Certificado no encontrado');
      }
      setHasSearched(true);
    } catch (err) {
      console.error('Error verificando certificado:', err);
      setSelectedResult(null);
      setNetworkError(
        'No se pudo conectar con el servidor de verificación. Por favor, verifique su conexión e intente nuevamente.'
      );
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Lectura automática desde QR o parámetros de URL (?codigo=BAL-LOISAM1-2026-001)
  useEffect(() => {
    const parseUrlParams = () => {
      let queryParam = '';

      if (window.location.search) {
        const searchParams = new URLSearchParams(window.location.search);
        queryParam = searchParams.get('codigo') || searchParams.get('code') || '';
      }

      if (!queryParam && window.location.hash.includes('?')) {
        const hashQuery = window.location.hash.split('?')[1];
        const hashParams = new URLSearchParams(hashQuery);
        queryParam = hashParams.get('codigo') || hashParams.get('code') || '';
      }

      if (queryParam) {
        setSearchQuery(queryParam);
        executeSearch(queryParam);
      }
    };

    parseUrlParams();
    window.addEventListener('hashchange', parseUrlParams);
    window.addEventListener('popstate', parseUrlParams);
    return () => {
      window.removeEventListener('hashchange', parseUrlParams);
      window.removeEventListener('popstate', parseUrlParams);
    };
  }, [executeSearch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    executeSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedResult(null);
    setHasSearched(false);
    setNotFoundMessage('');
    setNetworkError('');

    if (window.location.pathname.includes('/verificar-certificado')) {
      window.history.replaceState({}, '', '/verificar-certificado');
    } else if (window.location.hash) {
      window.location.hash = '#/verificar-certificado';
    }
  };

  const handleCopyLink = (code) => {
    const url = `${window.location.origin}/verificar-certificado?codigo=${encodeURIComponent(code)}`;
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
            <a href="/">Inicio</a> &gt; <span className="current">Verificación de Certificados</span>
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
            Verifique la autenticidad y registro académico de los certificados de capacitación continua emitidos por BALUARTALENT &amp; Co.
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
            <h3>Ingrese Código del Certificado</h3>
            <p className="cert-search-subtitle">
              Consulte ingresando el código único de registro que aparece en el certificado (ej. BAL-LOISAM1-2026-001).
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
                  placeholder="Código de registro (ej. BAL-LOISAM1-2026-001)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Código de registro del certificado"
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

          {/* Loading State */}
          {isLoading && (
            <div className="cert-loading-card animate-fade-in" role="status" aria-live="polite">
              <svg className="spinner-icon" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" strokeLinecap="round"></circle>
              </svg>
              <h3>Verificando certificado...</h3>
              <p>Consultando el registro oficial en nuestro servidor seguro. Por favor espere un momento.</p>
            </div>
          )}

          {/* Results Area */}
          {hasSearched && !isLoading && selectedResult && (
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
                  <p>Este documento ha sido verificado con éxito en la base de datos oficial de BALUARTALENT &amp; Co. Consultoría Integral.</p>
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
                      {selectedResult.executionDates && (
                        <span className="cert-dates-pill">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          Modalidad / Fechas: {selectedResult.executionDates}
                        </span>
                      )}
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
                      <span className="cert-detail-val">{selectedResult.fullSignatory}</span>
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

                    {selectedResult.pdfUrl && selectedResult.pdfUrl.startsWith('http') ? (
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
                        Ver / Descargar Certificado PDF
                      </a>
                    ) : (
                      <span className="cert-pdf-pending">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Documento PDF en proceso de carga
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Network Error State */}
          {hasSearched && !isLoading && networkError && (
            <div className="cert-not-found-card animate-fade-in" role="alert">
              <div className="cert-not-found-icon">🔌</div>
              <h3>Error de conexión</h3>
              <p>{networkError}</p>
              <div className="cert-not-found-actions">
                <button type="button" className="btn btn-primary" onClick={() => executeSearch(searchQuery)}>
                  Reintentar consulta
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleClearSearch}>
                  Limpiar búsqueda
                </button>
              </div>
            </div>
          )}

          {/* Not Found State */}
          {hasSearched && !isLoading && !networkError && !selectedResult && (
            <div className="cert-not-found-card animate-fade-in">
              <div className="cert-not-found-icon">⚠️</div>
              <h3>{notFoundMessage || 'Certificado no encontrado'}</h3>
              <p>
                No se encontró ningún certificado registrado bajo el código <strong>&quot;{searchQuery}&quot;</strong>.
              </p>
              <div className="cert-not-found-tips">
                <strong>Recomendaciones:</strong>
                <ul>
                  <li>Verifique que el código esté escrito tal como aparece en el certificado físico o digital.</li>
                  <li>Incluya los guiones exactamente como figuran en su documento (ej. BAL-LOISAM1-2026-001).</li>
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
