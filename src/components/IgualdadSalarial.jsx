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
      a: 'Sí. Conforme a la Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres y el Acuerdo Ministerial MDT-2025-006 emitido por el Ministerio del Trabajo, todas las empresas del sector privado y entidades empleadoras públicas deben capacitar de manera obligatoria a todo su personal en materia de igualdad de remuneración y no discriminación salarial.'
    },
    {
      q: '¿Cuál es la fecha límite para cumplir con la capacitación?',
      a: 'Todas las empresas deben completar la Capacitación Anual de Igualdad Salarial antes del 30 de noviembre de cada período fiscal. El incumplimiento o ejecución tardía es pasible de sanciones, multas e infracciones graves en inspecciones de trabajo del MDT.'
    },
    {
      q: '¿Por qué la duración debe ser de 40 horas académicas?',
      a: 'El Acuerdo Ministerial MDT-2025-006 establece una carga técnica reglamentaria obligatoria de 40 horas académicas divididas en 4 módulos para garantizar que el personal comprenda los principios de trabajo de igual valor, valoración objetiva de puestos, prevención de brecha de género y cumplimiento del marco legal vigente.'
    },
    {
      q: '¿Qué personal de la empresa debe recibir la capacitación?',
      a: 'La normativa establece que la capacitación está dirigida a todo el personal de la empresa (cobertura del 100%): directivos, jefaturas de Recursos Humanos y nómina, personal administrativo, mandos medios y colaboradores operativos.'
    },
    {
      q: '¿Qué entregables y certificados recibe la empresa para justificar ante el Ministerio del Trabajo?',
      a: 'Entregamos: 1) Certificados individuales con código único y respaldo normativo para cada colaborador que aprueba el programa con nota mínima de 70/100, 2) Informe técnico consolidado de gestión y asistencia LMS para auditorías laborales, y 3) Plantilla técnica formulada en Excel para la auditoría y diagnóstico de brecha salarial.'
    },
    {
      q: '¿Cómo se adapta la capacitación a los horarios y turnos de nuestra empresa?',
      a: 'Implementamos el modelo de Aula Invertida (Blended Learning): e-learning autónomo en nuestra aula virtual accesible 24/7 sin detener la jornada laboral, análisis de casos prácticos y sesiones de resolución de dudas con consultores legales senior.'
    }
  ];

  const modules = [
    {
      number: 'Módulo 1',
      title: 'Marco Legal, Derechos y Acuerdo MDT-2025-006',
      objective: 'Comprender el marco normativo de igualdad salarial y el principio de igual remuneración por igual valor.',
      desc: 'Fundamentos de la Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres, alcance vinculante del Acuerdo Ministerial MDT-2025-006, Convenios OIT 100 y 111, principios de igualdad retributiva y obligaciones patronales en los sectores público y privado.'
    },
    {
      number: 'Módulo 2',
      title: 'Enfoque de Género y Desactivación de Sesgos Inconscientes',
      objective: 'Reconocer estereotipos y sesgos inconscientes que afectan la equidad salarial y las oportunidades de ascenso.',
      desc: 'Medición de la brecha salarial en el mercado laboral ecuatoriano, segregación horizontal y vertical (techo de cristal), sesgos inconscientes en procesos de selección, contratación y complementos salariales, y políticas de corresponsabilidad.'
    },
    {
      number: 'Módulo 3',
      title: 'Prevención de Violencia y Discriminación Laboral',
      objective: 'Identificar conductas de acoso y discriminación aplicando los protocolos obligatorios de atención del MDT.',
      desc: 'Tipificación de violencia laboral y acoso por razones de género conforme al Convenio 190 OIT, protocolos obligatorios del Ministerio del Trabajo, diseño de rutas de denuncia interna seguras, Comités de Ética y medidas de protección sin represalias.'
    },
    {
      number: 'Módulo 4',
      title: 'Valoración Técnica de Puestos y Auditoría Salarial',
      objective: 'Aplicar criterios técnicos objetivos para valorar puestos y asegurar transparencia retributiva.',
      desc: 'El concepto técnico de "trabajo de igual valor", factores objetivos de valoración (competencias, esfuerzo, responsabilidad y condiciones), diseño de bandas salariales neutrales, matrices de diagnóstico de brecha y evaluación final (mín. 70/100).'
    }
  ];

  const timelineSteps = [
    {
      step: '01',
      title: 'Diagnóstico de Necesidades (DNC)',
      desc: 'Evaluación del perfil de la organización, censo de colaboradores y mapeo de turnos para asegurar la participación del 100% de la nómina.',
      tag: 'Fase Inicial'
    },
    {
      step: '02',
      title: 'Diseño Curricular & Cronograma (8 Semanas)',
      desc: 'Planificación de la liberación progresiva de los 4 módulos técnicos (10h cada uno) adaptada al dinamismo y horarios de tu empresa.',
      tag: 'Planificación'
    },
    {
      step: '03',
      title: 'Ejecución en Aula Virtual LMS 24/7 (ERCA)',
      desc: 'Aprendizaje autónomo interactivo, foros guiados, análisis de casos prácticos y talleres sincrónicos con consultores laborales senior.',
      tag: 'Formación Activa'
    },
    {
      step: '04',
      title: 'Certificación Oficial & Reporte para el MDT',
      desc: 'Evaluación final con nota mínima de 70/100, emisión de certificados individuales con código único y entrega del informe técnico consolidado.',
      tag: 'Blindaje Legal'
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
                    <span>4 módulos • 8 semanas reglamentarias</span>
                  </div>
                </div>

                <div className="igualdad-spec-item">
                  <span className="spec-icon">👥</span>
                  <div>
                    <strong>Dirigido al 100% del personal</strong>
                    <span>Directivos, mandos medios y operativos</span>
                  </div>
                </div>

                <div className="igualdad-spec-item">
                  <span className="spec-icon">🎯</span>
                  <div>
                    <strong>Equidad y marco legal</strong>
                    <span>Metodología de trabajo de igual valor</span>
                  </div>
                </div>

                <div className="igualdad-spec-item">
                  <span className="spec-icon">📜</span>
                  <div>
                    <strong>Certificado con respaldo</strong>
                    <span>Validación para inspecciones MDT (&ge; 70/100)</span>
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

                <a 
                  href="https://aula.baluartalent.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary-glow btn-lg"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none' }}
                >
                  Ingresar al Aula Virtual 🎓
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
                  <span>🏢 Programa Corporativo In-Company &amp; Virtual B2B</span>
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
                  <li>✔ Metodología blended learning ERCA 24/7</li>
                  <li>✔ Casos prácticos y diagnóstico sectorial</li>
                  <li>✔ Informe consolidado de avance para RRHH</li>
                  <li>✔ Plantilla técnica de auditoría de brecha salarial</li>
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

      {/* 3. SECCIÓN: TEMARIO COMPLETO (40 HORAS ACADÉMICAS EN 4 MÓDULOS) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">PLAN FORMATIVO REGLAMENTARIO • 8 SEMANAS</span>
            <h2>Contenido Académico y Estructura del Programa (40 Horas)</h2>
            <p className="section-desc" style={{ maxWidth: '820px', textAlign: 'left', margin: '0 0 1.5rem 0' }}>
              Un programa diseñado por especialistas en derecho laboral, remuneraciones y desarrollo organizacional, asegurando aplicabilidad práctica y total apego a las disposiciones del Ministerio del Trabajo.
            </p>
          </div>

          <div className="modules-grid-list" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {modules.map((m, index) => (
              <div key={index} className="module-item-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div className="module-item-badge">{m.number}</div>
                </div>
                <h3 className="module-item-title">{m.title}</h3>
                <div style={{ background: '#f8fafc', borderLeft: '3px solid var(--primary)', padding: '0.6rem 0.8rem', borderRadius: '0 8px 8px 0', marginBottom: '0.9rem' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'block' }}>🎯 Objetivo Pedagógico:</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-main)' }}>{m.objective}</span>
                </div>
                <p className="module-item-desc" style={{ margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Banner de llamada dentro de la sección */}
          <div className="temario-callout-box">
            <div className="callout-content">
              <h3>¿Necesitas adaptar el cronograma a los turnos de tu empresa?</h3>
              <p>
                Diseñamos cronogramas específicos por turnos, departamentos o modalidad virtual asincrónica 24/7 para optimizar el tiempo de tus colaboradores sin interrumpir la operación.
              </p>
            </div>
            <button className="nav-cta-btn" onClick={onOpenContact}>
              Solicitar Plan Personalizado &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGÍA & TIMELINE DE APRENDIZAJE (ERCA + BLENDED) */}
      <section className="section-padding bg-alt-light">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">METODOLOGÍA PEDAGÓGICA ERCA &bull; BLENDED LEARNING</span>
            <h2>Plan de Implementación y Acompañamiento Corporativo</h2>
            <p className="section-desc" style={{ maxWidth: '820px', textAlign: 'left', margin: '0 0 1.5rem 0' }}>
              Implementamos el modelo de Aula Invertida optimizado mediante la metodología pedagógica ERCA (Experiencia, Reflexión, Conceptualización y Aplicación), asegurando aplicabilidad práctica sin fricciones en la jornada laboral.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {timelineSteps.map((t, index) => (
              <div key={index} style={{ background: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '18px', padding: '2rem 1.6rem', position: 'relative', boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'rgba(30, 64, 175, 0.15)', position: 'absolute', top: '1rem', right: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                  {t.step}
                </span>
                <span style={{ background: 'rgba(13, 148, 136, 0.08)', color: 'var(--secondary)', fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '50px', display: 'inline-block', marginBottom: '0.9rem' }}>
                  {t.tag}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.6rem' }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Banner de Acceso al Aula Virtual LMS */}
          <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, #09132b 0%, #0d9488 100%)', borderRadius: '20px', padding: '2.4rem 2.8rem', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.8rem', boxShadow: '0 16px 40px rgba(9, 19, 43, 0.3)' }}>
            <div style={{ maxWidth: '650px' }}>
              <span style={{ background: '#38bdf8', color: '#09132b', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '50px', letterSpacing: '0.04em', display: 'inline-block', marginBottom: '0.6rem' }}>
                AULA VIRTUAL LMS DISPONIBLE 24/7
              </span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: '#ffffff' }}>
                Entorno Digital de Aprendizaje BALUARTALENT
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: '1.6' }}>
                Tus colaboradores ingresan con credenciales individuales a nuestra plataforma Moodle de alta disponibilidad, con seguimiento en tiempo real para la gerencia de Talento Humano.
              </p>
            </div>
            <a 
              href="https://aula.baluartalent.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ background: '#ffffff', color: '#09132b', textDecoration: 'none', padding: '0.9rem 1.8rem', borderRadius: '50px', fontWeight: 800, fontSize: '0.92rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', whiteSpace: 'nowrap' }}
            >
              🚀 Acceder al Aula Virtual
            </a>
          </div>
        </div>
      </section>

      {/* 5. MODALIDADES DE IMPLEMENTACIÓN B2B */}
      <section className="section-padding">
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

      {/* 6. ENTREGABLES Y BENEFICIOS PARA LA EMPRESA */}
      <section className="section-padding bg-alt-light">
        <div className="container">
          <div className="deliverables-wrapper">
            <div className="deliverables-content">
              <span className="subtitle">EVIDENCIAS AUDITABLES BALUARTALENT</span>
              <h2>Alcance del Servicio y Entregables Corporativos</h2>
              <p style={{ textAlign: 'left', marginBottom: '1.8rem' }}>
                Garantizamos que la carpeta de talento humano cuente con toda la documentación probatoria requerida ante inspecciones del Ministerio del Trabajo:
              </p>

              <div className="deliverables-list">
                <div style={{ marginBottom: '1.2rem' }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>
                    🏢 Para la Organización (Empresa):
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <div className="deliverable-row">
                      <div className="deliv-icon">📋</div>
                      <div>
                        <strong>Informe Técnico de Gestión e Impacto</strong>
                        <p>Documento ejecutivo institucional con lista de participantes, calificaciones, porcentaje de cobertura y firmas de facilitadores.</p>
                      </div>
                    </div>
                    <div className="deliverable-row">
                      <div className="deliv-icon">📊</div>
                      <div>
                        <strong>Registro Consolidado de Asistencia y Conexión</strong>
                        <p>Reporte técnico detallado con registros automatizados de login mediante la plataforma LMS que certifica las 40 horas completadas.</p>
                      </div>
                    </div>
                    <div className="deliverable-row">
                      <div className="deliv-icon">📐</div>
                      <div>
                        <strong>Matriz de Calificaciones y Herramientas Técnicas</strong>
                        <p>Base de datos auditable con notas (&ge; 70/100) y copias de las plantillas de auditoría salarial básica desarrolladas durante el programa.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: 'var(--secondary)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>
                    🎓 Para los Colaboradores (Participantes):
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <div className="deliverable-row">
                      <div className="deliv-icon">📜</div>
                      <div>
                        <strong>Certificados Individuales con Respaldo Normativo</strong>
                        <p>Con código único de validación digital para el 100% de colaboradores aprobados, acreditando las 40 horas académicas bajo el Acuerdo MDT-2025-006.</p>
                      </div>
                    </div>
                    <div className="deliverable-row">
                      <div className="deliv-icon">📖</div>
                      <div>
                        <strong>Manual Digital del Participante</strong>
                        <p>Compendio descargable en PDF con fundamentos legales, metodologías y guías de bolsillo sobre canales de denuncia e infografías.</p>
                      </div>
                    </div>
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
                    <strong>70/100</strong>
                    <span>Nota Mín.</span>
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

      {/* 7. PREGUNTAS FRECUENTES (FAQ) */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-title text-center">
            <span className="subtitle">RESOLUCIÓN DE DUDAS FRECUENTES</span>
            <h2>Preguntas Frecuentes sobre la Capacitación Obligatoria</h2>
            <p className="section-desc">
              Todo lo que el área de Talento Humano y Gerencia Legal debe saber para cumplir con la auditoría del MDT.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon-arrow">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER FINAL B2B */}
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
