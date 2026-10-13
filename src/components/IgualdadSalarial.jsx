import { useState } from 'react';

export default function IgualdadSalarial({ onOpenContact }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola BALUARTALENT & Co., deseo solicitar asesoría y una cotización corporativa para la Capacitación Obligatoria de Igualdad Salarial (Acuerdo Ministerial MDT-2025-006) para nuestra empresa.'
  );

  const faqs = [
    {
      q: '¿Es obligatoria esta capacitación para todas las empresas en Ecuador?',
      a: 'Sí. Conforme a la Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres y el Acuerdo Ministerial MDT-2025-006 emitido por el Ministerio del Trabajo, todas las empresas del sector privado y entidades empleadoras deben capacitar de manera obligatoria a todo su personal en materia de igualdad de remuneración y no discriminación salarial.'
    },
    {
      q: '¿Cuál es la fecha límite para cumplir con la capacitación?',
      a: 'Todas las empresas deben completar la Capacitación Anual de Igualdad Salarial antes del 30 de noviembre de cada período fiscal. El incumplimiento o ejecución tardía es pasible de sanciones, multas e infracciones graves en inspecciones de trabajo del MDT.'
    },
    {
      q: '¿Por qué la duración debe ser de 40 horas académicas?',
      a: 'La carga horaria de 40 horas académicas es la duración reglamentaria establecida para garantizar que el personal comprenda los principios de trabajo de igual valor, valoración objetiva de puestos, prevención de brecha de género y cumplimiento del marco legal vigente.'
    },
    {
      q: '¿Qué personal de la empresa debe recibir la capacitación?',
      a: 'La normativa establece que la capacitación está dirigida a todo el personal de la empresa: directivos, jefaturas de Recursos Humanos y nómina, personal administrativo, mandos medios y colaboradores operativos.'
    },
    {
      q: '¿Qué entregables y certificados recibe la empresa para justificar ante el Ministerio del Trabajo?',
      a: 'Entregamos: 1) Certificados individuales con código único y respaldo normativo para cada colaborador que aprueba el programa, 2) Informe ejecutivo consolidado de asistencia y cumplimiento para auditorías laborales, y 3) Plantillas prácticas para el diagnóstico salarial interno.'
    },
    {
      q: '¿Cómo se adapta la capacitación a los horarios y turnos de nuestra empresa?',
      a: 'Ofrecemos modalidad virtual asincrónica 24/7 (donde cada colaborador avanza a su propio ritmo sin interrumpir la jornada de trabajo), sesiones virtuales sincrónicas en vivo con facilitadores expertos, o talleres in-company presenciales para comités y directivos.'
    }
  ];

  const modules = [
    {
      number: 'Módulo 1',
      title: 'Marco Jurídico, Ley de Igualdad Salarial y Acuerdo MDT-2025-006',
      desc: 'Fundamentos de la Ley Orgánica para la Igualdad Salarial, alcance del Acuerdo MDT-2025-006, convenios internacionales OIT (100 y 111), obligaciones patronales y consecuencias legales de la discriminación retributiva.'
    },
    {
      number: 'Módulo 2',
      title: 'El Concepto Técnico-Legal de "Trabajo de Igual Valor"',
      desc: 'Criterios objetivos para determinar el trabajo de igual valor: competencias requeridas, niveles de responsabilidad, esfuerzo físico y mental, y condiciones laborales, desvinculando la valoración de sesgos de género.'
    },
    {
      number: 'Módulo 3',
      title: 'Metodología de Valoración Objetiva de Puestos de Trabajo',
      desc: 'Herramientas cuantitativas y cualitativas para el análisis y descripción de perfiles de puesto, eliminación de sesgos inconscientes en escalas salariales y estandarización de bandas retributivas transparentes.'
    },
    {
      number: 'Módulo 4',
      title: 'Medición y Diagnóstico de la Brecha Salarial en la Organización',
      desc: 'Cálculo técnico de la brecha salarial bruta y ajustada, análisis de complementos salariales, beneficios y variables, e identificación de brechas estructurales en las diferentes áreas de la empresa.'
    },
    {
      number: 'Módulo 5',
      title: 'Planes de Igualdad Salarial, Políticas y Medidas Correctoras',
      desc: 'Diseño e implantación del Plan de Igualdad Salarial de la empresa, definición de acciones correctivas, protocolos de transparencia salarial y políticas de promociones y ascensos equitativos.'
    },
    {
      number: 'Módulo 6',
      title: 'Documentación, Auditoría y Reporte ante el Ministerio del Trabajo',
      desc: 'Preparación de expedientes probatorios, actas de finalización de capacitación, registro en plataformas del MDT y pautas estratégicas para superar inspecciones laborales con cero observaciones.'
    }
  ];

  return (
    <div className="subpage-wrapper igualdad-salarial-page">
      {/* 1. HERO BANNER PRINCIPAL */}
      <header className="subpage-header igualdad-header">
        <div className="courses-header-dim"></div>
        <div className="bg-blob blob-purple" style={{ top: '-10%', right: '5%', opacity: 0.25 }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-15%', left: '0%', opacity: 0.2 }}></div>

        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Inicio</a> &gt; <a href="/cursos">Cursos</a> &gt; <span className="current">Capacitación Igualdad Salarial MDT-2025-006</span>
          </div>

          <div className="igualdad-hero-grid">
            <div className="igualdad-hero-info">
              <div className="igualdad-urgent-pill">
                <span className="urgent-badge-icon">⚠️</span>
                <span className="urgent-badge-text">
                  CAPACITACIÓN ANUAL OBLIGATORIA &bull; <strong>PLAZO: ANTES DEL 30 DE NOVIEMBRE</strong>
                </span>
              </div>

              <h1 className="igualdad-hero-title" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff', background: 'none' }}>
                Ley Orgánica de Igualdad Salarial y Acuerdo Ministerial MDT-2025-006
              </h1>

              <p className="igualdad-hero-lead">
                Asegura el cumplimiento de tu empresa con la <strong>capacitación obligatoria de igualdad salarial</strong>.
                Todas las empresas deben realizar la Capacitación Anual de Igualdad Salarial antes del <strong>30 de noviembre</strong>.
              </p>

              {/* Badges de especificaciones clave */}
              <div className="igualdad-specs-grid">
                <div className="igualdad-spec-item">
                  <span className="spec-icon">⏳</span>
                  <div>
                    <strong>Duración: 40 horas</strong>
                    <span>Carga reglamentaria obligatoria</span>
                  </div>
                </div>

                <div className="igualdad-spec-item">
                  <span className="spec-icon">👥</span>
                  <div>
                    <strong>Dirigido a todo el personal</strong>
                    <span>Directivos, mandos y operativos</span>
                  </div>
                </div>

                <div className="igualdad-spec-item">
                  <span className="spec-icon">🎯</span>
                  <div>
                    <strong>Equidad y marco legal</strong>
                    <span>Promover la equidad salarial vigente</span>
                  </div>
                </div>

                <div className="igualdad-spec-item">
                  <span className="spec-icon">📜</span>
                  <div>
                    <strong>Certificado con respaldo</strong>
                    <span>Validación para inspecciones MDT</span>
                  </div>
                </div>
              </div>

              {/* Acciones principales B2B */}
              <div className="igualdad-hero-cta-group">
                <a 
                  href="mailto:info@baluartalent.com?subject=Solicitud%20de%20Asesor%C3%ADa%20y%20Cotizaci%C3%B3n%20B2B%20-%20Capacitaci%C3%B3n%20Igualdad%20Salarial"
                  className="btn-primary-glow btn-lg igualdad-cta-btn" 
                >
                  Solicitar Asesoría &amp; Cotización B2B 💼
                </a>

                <a 
                  href={`https://wa.me/593964196795?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary-glow btn-lg igualdad-wa-btn"
                >
                  Hablar por WhatsApp 💬
                </a>
              </div>
            </div>

            {/* Tarjeta Visual de Respaldo */}
            <div className="igualdad-hero-card">
              <div className="hero-card-image-wrap">
                <img 
                  src="/courses/igualdad_salarial.jpg" 
                  alt="Capacitación Obligatoria Ley de Igualdad Salarial Ecuador MDT-2025-006" 
                  className="hero-card-img"
                />
                <div className="hero-card-badge-overlay">
                  <span>🏢 Programa Corporativo In-Company &amp; Virtual</span>
                </div>
              </div>

              <div className="hero-card-body">
                <div className="hero-card-deadline-box">
                  <div className="deadline-box-header">
                    <span className="deadline-alert-icon">📅</span>
                    <div>
                      <strong>Fecha Límite Legal Improrrogable</strong>
                      <p>30 de Noviembre de cada año fiscal</p>
                    </div>
                  </div>
                </div>

                <ul className="hero-card-checkpoints">
                  <li>✔ Respaldo normativo oficial MDT-2025-006</li>
                  <li>✔ Modalidad 100% adaptable a turnos de tu empresa</li>
                  <li>✔ Informe consolidado de avance para RRHH</li>
                  <li>✔ Plantilla de diagnóstico de brecha salarial incluida</li>
                </ul>

                <button 
                  className="btn-card-full-cta"
                  onClick={onOpenContact}
                >
                  Cotizar para mi Equipo de Colaboradores &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SECCIÓN: POR QUÉ ES OBLIGATORIO (MARCO LEGAL MDT) */}
      <section className="section-padding bg-alt-light">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">MARCO LEGAL OBLIGATORIO &bull; ECUADOR</span>
            <h2>¿Por qué tu empresa debe cumplir antes del 30 de Noviembre?</h2>
            <p className="section-desc" style={{ maxWidth: '820px', textAlign: 'left', margin: '0 0 1.5rem 0' }}>
              El Ministerio del Trabajo de Ecuador ha intensificado los controles y auditorías de cumplimiento laboral sobre la
              <strong> Ley Orgánica para la Igualdad Salarial</strong> y el <strong>Acuerdo Ministerial MDT-2025-006</strong>.
            </p>
          </div>

          <div className="normative-cards-grid">
            <div className="normative-card">
              <div className="normative-card-icon">⚖️</div>
              <h3>Acuerdo Ministerial MDT-2025-006</h3>
              <p>
                Reglamenta la obligatoriedad de que todos los empleadores ejecuten anualmente procesos de capacitación en igualdad de remuneración sin sesgo de género, con una carga técnica certificable de 40 horas.
              </p>
              <div className="normative-tag">Vigencia Obligatoria</div>
            </div>

            <div className="normative-card">
              <div className="normative-card-icon">👥</div>
              <h3>Cobertura al 100% del Personal</h3>
              <p>
                A diferencia de capacitaciones técnicas restringidas a Recursos Humanos, la norma exige involucrar a directores, gerentes, mandos medios y colaboradores de todas las áreas y niveles operativos.
              </p>
              <div className="normative-tag">Universalidad Laboral</div>
            </div>

            <div className="normative-card">
              <div className="normative-card-icon">🛡️</div>
              <h3>Prevención de Sanciones e Inspecciones</h3>
              <p>
                Las empresas que no justifiquen la ejecución de la capacitación anual antes del 30 de noviembre enfrentan observaciones graves en inspecciones integrales del MDT y sanciones pecuniarias conforme al Código de Trabajo.
              </p>
              <div className="normative-tag">Blindaje Jurídico</div>
            </div>

            <div className="normative-card">
              <div className="normative-card-icon">📊</div>
              <h3>Evidencia y Registro Oficial</h3>
              <p>
                No basta con dictar una charla informativa; se requiere contar con certificados formales, matrices de valoración objetiva y el informe consolidado con firmas de asistencia de cada colaborador.
              </p>
              <div className="normative-tag">Sustento en Auditorías</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN: TEMARIO COMPLETO (40 HORAS ACADÉMICAS) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">PLAN FORMATIVO REGLAMENTARIO</span>
            <h2>Contenido Académico y Estructura del Programa (40 Horas)</h2>
            <p className="section-desc" style={{ maxWidth: '780px', textAlign: 'left', margin: '0 0 1.5rem 0' }}>
              Un programa diseñado por especialistas en derecho laboral, remuneraciones y desarrollo organizacional, asegurando aplicabilidad práctica y total apego a las disposiciones del Ministerio del Trabajo.
            </p>
          </div>

          <div className="modules-grid-list">
            {modules.map((m, index) => (
              <div key={index} className="module-item-card">
                <div className="module-item-badge">{m.number}</div>
                <h3 className="module-item-title">{m.title}</h3>
                <p className="module-item-desc">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Banner de llamada dentro de la sección */}
          <div className="temario-callout-box">
            <div className="callout-content">
              <h3>¿Necesitas adaptar el temario al sector o estructura de tu empresa?</h3>
              <p>
                Diseñamos cronogramas específicos por turnos, departamentos o modalidad para optimizar el tiempo de tus colaboradores.
              </p>
            </div>
            <button className="nav-cta-btn" onClick={onOpenContact}>
              Solicitar Plan Personalizado &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 4. MODALIDADES DE IMPLEMENTACIÓN B2B */}
      <section className="section-padding bg-alt-light">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">MODALIDADES B2B FLEXIBLES</span>
            <h2>Opciones de Capacitación Adaptadas a tu Operación</h2>
            <p className="section-desc" style={{ maxWidth: '800px', textAlign: 'left', margin: '0 0 1.5rem 0' }}>
              Evita fricciones en la jornada laboral. Implementamos la metodología que mejor se adapte al volumen y dinamismo de tu nómina.
            </p>
          </div>

          <div className="modalities-grid">
            <div className="modality-card">
              <div className="modality-icon">💻</div>
              <h3>Virtual Asincrónica (Plataforma 24/7)</h3>
              <p>
                Cada colaborador ingresa a nuestra aula virtual con usuario personal y completa las 40 horas en sus momentos disponibles, con videos didácticos, lecturas y evaluaciones automáticas.
              </p>
              <ul className="modality-perks">
                <li>✔ Cero interrupciones en turnos o atención al cliente</li>
                <li>✔ Panel de seguimiento en tiempo real para RRHH</li>
                <li>✔ Acceso desde PC, tablet o smartphone</li>
              </ul>
            </div>

            <div className="modality-card">
              <div className="modality-icon">🎙️</div>
              <h3>Virtual Sincrónica (En Vivo por Zoom/Teams)</h3>
              <p>
                Sesiones interactivas en tiempo real dictadas por consultores senior de BALUARTALENT, ideales para resolución de dudas complejas, debate de casos y comités directivos.
              </p>
              <ul className="modality-perks">
                <li>✔ Interacción directa con abogados laborales</li>
                <li>✔ Grabación de respaldo de todas las sesiones</li>
                <li>✔ Talleres prácticos aplicados a la empresa</li>
              </ul>
            </div>

            <div className="modality-card">
              <div className="modality-icon">🏢</div>
              <h3>In-Company Presencial</h3>
              <p>
                Talleres ejecutivos in situ en las instalaciones de tu organización para mandos altos, gerentes de nómina y comités de igualdad y clima organizacional.
              </p>
              <ul className="modality-perks">
                <li>✔ Dinámicas de trabajo grupal y casos reales</li>
                <li>✔ Diagnóstico preliminar in situ de bandas salariales</li>
                <li>✔ Material impreso y diplomas oficiales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENTREGABLES Y BENEFICIOS PARA LA EMPRESA */}
      <section className="section-padding">
        <div className="container">
          <div className="deliverables-wrapper">
            <div className="deliverables-content">
              <span className="subtitle">RESPALDO TOTAL BALUARTALENT</span>
              <h2>¿Qué recibe tu empresa al finalizar la capacitación?</h2>
              <p>
                Garantizamos que la carpeta de talento humano cuente con toda la documentación probatoria requerida ante inspecciones del Ministerio del Trabajo:
              </p>

              <div className="deliverables-list">
                <div className="deliverable-row">
                  <div className="deliv-icon">🎓</div>
                  <div>
                    <strong>Certificados Individuales con Respaldo Normativo</strong>
                    <p>Con código único de validación digital para el 100% de colaboradores aprobados, acreditando las 40 horas académicas.</p>
                  </div>
                </div>

                <div className="deliverable-row">
                  <div className="deliv-icon">📋</div>
                  <div>
                    <strong>Informe Consolidado de Cumplimiento para el MDT</strong>
                    <p>Documento ejecutivo institucional con lista de participantes, calificaciones, porcentaje de cobertura y firmas de facilitadores.</p>
                  </div>
                </div>

                <div className="deliverable-row">
                  <div className="deliv-icon">📐</div>
                  <div>
                    <strong>Plantilla de Diagnóstico y Matriz de Brecha Salarial</strong>
                    <p>Plantilla técnica en Excel formulada para que tu equipo de Recursos Humanos pueda realizar la medición interna de equidad salarial.</p>
                  </div>
                </div>

                <div className="deliverable-row">
                  <div className="deliv-icon">🛡️</div>
                  <div>
                    <strong>Acompañamiento y Asesoría Técnica</strong>
                    <p>Soporte de nuestro equipo legal y consultor ante dudas sobre el registro de evidencias en las plataformas del Ministerio del Trabajo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="deliverables-card-highlight">
              <div className="highlight-seal">
                <span className="seal-star">⭐</span>
                <h3>Garantía de Cumplimiento Normativo</h3>
                <p>
                  Capacitación alineada punto a punto con la Ley Orgánica para la Igualdad Salarial y las directrices del Acuerdo Ministerial MDT-2025-006 de Ecuador.
                </p>
                <div className="seal-stats">
                  <div className="stat-pill">
                    <strong>40</strong>
                    <span>Horas</span>
                  </div>
                  <div className="stat-pill">
                    <strong>100%</strong>
                    <span>Personal</span>
                  </div>
                  <div className="stat-pill">
                    <strong>30 Nov</strong>
                    <span>Plazo Límite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES (FAQ NORMATIVO) */}
      <section className="section-padding bg-alt-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="section-title text-center">
            <span className="subtitle">RESOLUCIÓN DE DUDAS FRECUENTES</span>
            <h2>Preguntas Frecuentes sobre la Normativa de Igualdad Salarial</h2>
            <p className="section-desc">
              Todo lo que gerentes de RRHH y directores de empresa deben saber para cumplir a tiempo.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-accordion-item ${openFaq === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon-arrow">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer-pane animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER FINAL B2B */}
      <section className="section-padding igualdad-final-cta-section">
        <div className="container">
          <div className="igualdad-cta-box">
            <div className="cta-box-badge">🚨 ATENCIÓN CORPORATIVA &bull; PLAZO 30 DE NOVIEMBRE</div>
            <h2>Asegura el cumplimiento de tu empresa hoy mismo</h2>
            <p>
              No expongas a tu organización a multas o contingencias laborales. Cotiza la capacitación obligatoria para todo tu personal y recibe el respaldo normativo que exige el Ministerio del Trabajo.
            </p>

            <div className="cta-box-buttons">
              <a 
                href={`https://wa.me/593964196795?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary-glow btn-lg"
              >
                Contactar por WhatsApp 💬
              </a>
              <a 
                href="mailto:info@baluartalent.com?subject=Cotizaci%C3%B3n%20Capacitaci%C3%B3n%20Obligatoria%20Igualdad%20Salarial%20MDT-2025-006"
                className="btn-secondary-glow btn-lg btn-email-cta"
              >
                ✉️ info@baluartalent.com
              </a>
            </div>

            <div className="cta-box-foot">
              <div className="cta-foot-contact-row">
                <span>Canales Oficiales:</span>
                <a href="mailto:info@baluartalent.com" className="foot-contact-link">✉️ info@baluartalent.com</a>
                <span className="foot-separator">&bull;</span>
                <a href="tel:+593964196795" className="foot-contact-link">📞 Telf/Cel: 0964196795</a>
                <span className="foot-separator">&bull;</span>
                <span>Cobertura en Quito, Guayaquil, Cuenca y todo el Ecuador</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
