import React, { useState, useMemo } from 'react';

/**
 * CATÁLOGO DE CURSOS - BALUARTALENT & CO.
 * Estructura académica formal: 10 cursos en modalidad virtual de 40 horas académicas.
 * Valor: $50 + IVA.
 */
const COURSES_DATA = [
  {
    id: 1,
    title: 'Gestión de Recursos Humanos y Administración y Legislación Laboral Aplicada',
    category: 'Talento Humano & Legal',
    price: '$99 + IVA',
    instructor: 'Ing. Anita Barrios',
    image: '/courses/curso_1.png',
    colorAccent: '#1e40af',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Administración estratégica del talento humano y marco laboral ecuatoriano: contratos en el portal SUT, cálculo de nómina y recargos horarios, aportaciones al IESS, décimos, fondos de reserva, reglamentos internos y finiquitos.',
      highlights: [
        'Perfiles de puesto y KPIs de talento',
        'Cálculo de nómina, horas extras y liquidaciones',
        'Contratación laboral y normativas MDT / IESS',
        'Gestión de trámites en plataforma SUT'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Taller intensivo y práctico enfocado en los aspectos críticos de la legislación laboral ecuatoriana: elaboración de contratos clave, cálculo de nómina y horas suplementarias/extraordinarias, y prevención de contingencias ante el MDT e IESS.',
      highlights: [
        'Cálculo práctico de nómina y beneficios de ley',
        'Contratación laboral y formalización en SUT',
        'Aportaciones y planillas ante el IESS',
        'Elaboración y liquidación de actas de finiquito'
      ]
    }
  },
  {
    id: 2,
    title: 'Liderazgo de Equipos de Alto Rendimiento y Habilidades Blandas',
    category: 'Liderazgo & Soft Skills',
    price: '$99 + IVA',
    instructor: 'MBA. Jorge Macías Robles',
    image: '/courses/curso_2.png',
    colorAccent: '#6366f1',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Desarrollo de liderazgo transformacional, inteligencia emocional y gestión del tiempo (Matriz de Eisenhower), comunicación asertiva, retroalimentación (modelo SBI) y resolución de conflictos para guiar equipos de alto desempeño.',
      highlights: [
        'Dirección de equipos multidisciplinarios',
        'Comunicación asertiva y feedback continuo',
        'Inteligencia emocional y resolución de conflictos',
        'Delegación efectiva y rendición de cuentas'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Entrenamiento ejecutivo intensivo en herramientas esenciales de liderazgo: técnicas de feedback constructivo (modelo SBI), gestión ágil del tiempo de trabajo y comunicación asertiva para la alineación de metas en equipos de alto rendimiento.',
      highlights: [
        'Comunicación asertiva y feedback de alto impacto',
        'Gestión del tiempo y priorización operativa',
        'Resolución práctica de conflictos laborales',
        'Técnicas de delegación y motivación efectiva'
      ]
    }
  },
  {
    id: 3,
    title: 'Atención al Cliente y Marketing Digital',
    category: 'Marketing & Clientes',
    price: '$99 + IVA',
    instructor: 'MBA. Jorge Macías Robles',
    image: '/courses/curso_3.png',
    colorAccent: '#0d9488',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Diseño de experiencias memorables del cliente (CX) y marketing digital omnicanal: dominio del embudo de conversión (AIDA), métricas clave (NPS, CAC, LTV), recuperación de clientes insatisfechos y posicionamiento orgánico.',
      highlights: [
        'Customer Journey Map y estándares de calidad',
        'Protocolos de atención en WhatsApp Business',
        'Manejo de reclamos y resolución de quejas',
        'Indicadores de satisfacción CSAT y NPS'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Taller práctico de atención y conversión comercial omnicanal: configuración y protocolos en WhatsApp Business, manejo eficaz de quejas y objeciones de clientes, y tácticas digitales para la fidelización y retención de usuarios.',
      highlights: [
        'Protocolos de atención rápida en WhatsApp Business',
        'Técnicas para el manejo de quejas y objeciones',
        'Estrategias de fidelización y experiencia de cliente',
        'Métricas esenciales de satisfacción del cliente'
      ]
    }
  },
  {
    id: 4,
    title: 'Gestión de Proveedores y Negociación en Compras',
    category: 'Gestión & Compras',
    price: '$99 + IVA',
    instructor: 'MBA. Jorge Macías Robles',
    image: '/courses/curso_4.png',
    colorAccent: '#d97706',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Optimización de compras estratégicas y abastecimiento: análisis del impacto en el EBITDA, segmentación con Matriz de Kraljic, homologación y auditoría de proveedores (OTIF), Costo Total de Propiedad (TCO) y negociación B2B.',
      highlights: [
        'Matriz de Kraljic y categorización de compras',
        'Homologación y evaluación de proveedores',
        'Técnicas de negociación y control de costos',
        'Estructuración de contratos y acuerdos SLA'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Taller ejecutivo en negociación estratégica y selección de proveedores: técnicas de negociación ganar-ganar, criterios de homologación y evaluación de cumplimiento (OTIF), y control ágil de costos en compras corporativas.',
      highlights: [
        'Tácticas de negociación y control de presupuestos',
        'Criterios de homologación de proveedores',
        'Evaluación de tiempos y calidad de entrega (OTIF)',
        'Gestión básica de acuerdos de servicio (SLA)'
      ]
    }
  },
  {
    id: 5,
    title: 'Derecho Laboral y Gestión de Conflictos',
    category: 'Talento Humano & Legal',
    price: '$99 + IVA',
    instructor: 'Dr. Héctor Cevallos Fernandez',
    image: '/courses/curso_5.png',
    colorAccent: '#1e40af',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Herramientas para la defensa legal y gestión procesal laboral en Ecuador: causales de terminación (Art. 169 CT), diferenciación de desahucio y despido, trámite de Visto Bueno en SUT, mediación extrajudicial y litigación COGEP.',
      highlights: [
        'Auditoría y blindaje contractual laboral',
        'Procedimiento de Visto Bueno paso a paso',
        'Mediación y actas transaccionales',
        'Atención a inspecciones del Ministerio del Trabajo'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Jornada intensiva de blindaje laboral y manejo de terminaciones contractuales: causas legales de desvinculación, procedimiento clave de Visto Bueno en el portal SUT y redacción de actas de mediación transaccional con validez legal.',
      highlights: [
        'Manejo legal de desvinculaciones y despidos',
        'Proceso y causales de Visto Bueno en SUT',
        'Actas de finiquito y acuerdos de mediación',
        'Prevención de sanciones ante inspecciones laborales'
      ]
    }
  },
  {
    id: 6,
    title: 'Gestión Ambiental y Manejo del SUIA',
    category: 'Gestión Ambiental',
    price: '$99 + IVA',
    instructor: 'Dr. Héctor Cevallos Fernandez',
    image: '/courses/curso_6.png',
    colorAccent: '#059669',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Cumplimiento del marco regulatorio ambiental (COA y RCOA): trámites de regularización en el SUIA (Registros y Licencias), implementación del Plan de Manejo Ambiental (PMA), gestión de desechos peligrosos y auditorías ambientales.',
      highlights: [
        'Registro y regularización en plataforma SUIA',
        'Certificados, registros y licencias ambientales',
        'Elaboración del Plan de Manejo Ambiental (PMA)',
        'Gestión de residuos peligrosos e informes IAC'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Taller técnico de regularización y trámites ambientales en Ecuador: navegación y registros en la plataforma SUIA, obtención de certificados y permisos, y lineamientos básicos para el manejo de residuos y desechos especiales.',
      highlights: [
        'Guía de trámites y registros en plataforma SUIA',
        'Obtención de permisos y certificados ambientales',
        'Gestión y clasificación de desechos peligrosos',
        'Cumplimiento normativo básico de auditoría ambiental'
      ]
    }
  },
  {
    id: 7,
    title: 'Administración de la Seguridad y Salud Ocupacional en Procesos Industriales',
    category: 'Seguridad & Salud (SST)',
    price: '$99 + IVA',
    instructor: 'Ing. Juan Jose Piguabe',
    image: '/courses/curso_7.png',
    colorAccent: '#f59e0b',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Identificación de peligros y evaluación de riesgos bajo normativa legal vigente de SST: control operacional en procesos industriales, planes de prevención y mitigación de accidentes de trabajo y enfermedades profesionales.',
      highlights: [
        'Matrices de evaluación de riesgos IPER',
        'Permisos de trabajo crítico (LOTO, confinados)',
        'Planes de emergencia y brigadas industriales',
        'Investigación de accidentes de trabajo'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Taller intensivo en gestión operacional de seguridad ocupacional: elaboración rápida de matriz de riesgos IPER, protocolos para permisos de trabajo de alto riesgo y conformación de planes de respuesta inmediata ante emergencias.',
      highlights: [
        'Elaboración e interpretación de matriz IPER',
        'Permisos de trabajo de alto riesgo y bloqueos',
        'Protocolos básicos de brigadas y primeros auxilios',
        'Reporte e investigación inicial de incidentes'
      ]
    }
  },
  {
    id: 8,
    title: 'Prevención de Riesgos Laborales y Trabajo en Alturas',
    category: 'Seguridad & Salud (SST)',
    price: '$99 + IVA',
    instructor: 'Ing. Juan Jose Piguabe',
    image: '/courses/curso_8.png',
    colorAccent: '#ef4444',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Competencias técnicas en protección contra caídas y trabajo en alturas (>1.80m): análisis normativo OSHA/ANSI, inspección y uso de Equipos de Protección Individual (EPI), protocolos de seguridad y planes de rescate industrial.',
      highlights: [
        'Normativa nacional e internacional (ANSI / OSHA)',
        'Inspección de arneses y líneas de vida',
        'Cálculo de distancia libre y puntos de anclaje',
        'Permisos de trabajo seguro (PTS) y rescate'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Capacitación intensiva y práctica de seguridad en alturas: inspección de arneses y conectores, selección de puntos de anclaje seguros, llenado de Permisos de Trabajo Seguro (PTS) y medidas preventivas antivuelco y caídas.',
      highlights: [
        'Inspección y colocación correcta de arneses y EPI',
        'Identificación de puntos de anclaje certificados',
        'Llenado de Permisos de Trabajo Seguro (PTS)',
        'Medidas básicas de rescate y auxilio en caídas'
      ]
    }
  },
  {
    id: 9,
    title: 'Salud Preventiva Ocupacional y Medicina del Trabajo',
    category: 'Salud Ocupacional',
    price: '$99 + IVA',
    instructor: 'Mgtr. Lorena Cueva Pungacho',
    image: '/courses/curso_9.png',
    colorAccent: '#0284c7',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Programas de salud preventiva y vigilancia epidemiológica ocupacional: diagnóstico de factores de riesgo, profesiogramas, exámenes ocupacionales, estilos de vida saludables y control del ausentismo laboral.',
      highlights: [
        'Profesiogramas y fichas médicas ocupacionales',
        'Protocolos de exámenes médicos ocupacionales',
        'Programas de prevención de alcohol y drogas',
        'Ergonomía laboral y vigilancia epidemiológica'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Taller práctico sobre protocolos de medicina laboral y vigilancia de la salud: diseño de profesiogramas básicos, gestión de exámenes ocupacionales obligatorios y pautas de pausas activas y ergonomía en el puesto de trabajo.',
      highlights: [
        'Estructuración básica de profesiogramas',
        'Gestión de exámenes médicos de ingreso y periódicos',
        'Programas de pausas activas y ergonomía laboral',
        'Control de ausentismo médico en la organización'
      ]
    }
  },
  {
    id: 10,
    title: 'Salud Mental Laboral',
    category: 'Salud Ocupacional',
    price: '$99 + IVA',
    instructor: 'Mgtr. Lorena Cueva Pungacho',
    image: '/courses/curso_10.png',
    colorAccent: '#8b5cf6',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Académicas',
      badge: 'Programa Completo',
      price: '$99 + IVA',
      shortDesc: 'Prevención y gestión del estrés y desgaste psicosocial en las organizaciones: criterios clínicos, neuropsicológicos y liderazgo saludable para prevenir el síndrome de Burnout y fortalecer la sostenibilidad emocional en el trabajo.',
      highlights: [
        'Cuestionario de riesgo psicosocial MDT',
        'Detección y prevención del síndrome de Burnout',
        'Protocolos contra acoso y violencia laboral',
        'Programas de bienestar y salud emocional'
      ]
    },
    data8h: {
      duration: '8 Horas',
      durationLabel: '8 Horas Intensivas',
      badge: 'Taller Práctico',
      price: '$35',
      shortDesc: 'Taller práctico para la gestión del estrés laboral y prevención del Burnout: identificación temprana de síntomas de agotamiento emocional, pautas para el clima laboral positivo y técnicas de primeros auxilios psicológicos.',
      highlights: [
        'Detección temprana del síndrome de Burnout',
        'Técnicas de manejo de estrés y carga mental',
        'Pautas para un ambiente laboral saludable y empático',
        'Estrategias de desconexión digital y equilibrio'
      ]
    }
  }
];

const CATEGORIES = [
  'Todos',
  'Talento Humano & Legal',
  'Seguridad & Salud (SST)',
  'Salud Ocupacional',
  'Liderazgo & Soft Skills',
  'Marketing & Clientes',
  'Gestión & Compras',
  'Gestión Ambiental'
];

export default function Cursos({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalCourse, setSelectedModalCourse] = useState(null);
  const [modalDuration, setModalDuration] = useState('40h'); // '40h' | '8h'

  // Escuchar tecla Escape y bloquear scroll de fondo mientras el modal esté abierto
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedModalCourse(null);
      }
    };

    if (selectedModalCourse) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedModalCourse]);

  // Filtrado reactivo en tiempo real
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.data40h.shortDesc.toLowerCase().includes(query) ||
        course.data8h.shortDesc.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.data40h.highlights.some(h => h.toLowerCase().includes(query)) ||
        course.data8h.highlights.some(h => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentModalData = selectedModalCourse
    ? (modalDuration === '8h' ? selectedModalCourse.data8h : selectedModalCourse.data40h)
    : null;

  const currentWhatsappText = selectedModalCourse
    ? (modalDuration === '8h'
        ? `Hola BALUARTALENT & Co., tengo interés en el curso de 8 horas de "${selectedModalCourse.title}"`
        : `Hola BALUARTALENT & Co., tengo interés en el curso de 40 horas de "${selectedModalCourse.title}"`)
    : '';

  return (
    <div className="subpage-wrapper courses-page-wrapper">
      {/* Header Banner */}
      <header className="subpage-header courses-header">
        <div className="courses-header-dim"></div>
        <div className="bg-blob blob-purple" style={{ top: '-15%', right: '10%', opacity: 0.2 }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-20%', left: '5%', opacity: 0.2 }}></div>

        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Catálogo de Cursos</span>
          </div>

          <h1>CATÁLOGO DE CURSOS</h1>
          <p className="subpage-subtitle">
            Programas de formación especializada en modalidad virtual impartidos por el equipo de facilitadores de BALUARTALENT & Co.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="subpage-content section-padding" style={{ position: 'relative' }}>
        <div className="container">

          {/* Search & Category Filter Controls */}
          <div className="courses-control-bar">
            {/* Search Input */}
            <div className="courses-search-box">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Buscar por tema, módulo, instructor o palabra clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="courses-category-filters">
              <span className="filter-label">Áreas:</span>
              <div className="category-pills-list">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className={`category-pill-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-filters Status */}
            <div className="courses-sub-filters">
              <div className="results-count">
                Mostrando <strong>{filteredCourses.length}</strong> de <strong>{COURSES_DATA.length}</strong> cursos disponibles
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid-four">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="course-card-compact course-card-interactive"
                  onClick={() => {
                    setSelectedModalCourse(course);
                    setModalDuration('40h');
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalles del curso ${course.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedModalCourse(course);
                      setModalDuration('40h');
                    }
                  }}
                >
                  
                  {/* Course Image Banner */}
                  <div className="course-card-image-wrap">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="course-card-img" 
                      loading="lazy"
                    />
                    <div className="course-card-image-overlay"></div>
                    <div className="course-card-view-hint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>Ver ficha</span>
                    </div>
                  </div>

                  {/* Card Category Tag */}
                  <div className="course-card-compact-header">
                    <span className="compact-category-tag" style={{ color: course.colorAccent, borderColor: `${course.colorAccent}33`, background: `${course.colorAccent}10` }}>
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="course-card-compact-title-area">
                    <h3 className="compact-course-title">{course.title}</h3>
                  </div>

                  {/* Meta Tags */}
                  <div className="compact-meta-row">
                    <span className="compact-meta-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      40 Horas y 8 Horas
                    </span>
                    <span className="compact-meta-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      Virtual 24/7
                    </span>
                    <span className="compact-meta-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      Certificado
                    </span>
                  </div>

                  {/* Short Description (40h baseline) */}
                  <p className="compact-course-desc">{course.data40h.shortDesc}</p>

                  {/* Highlights / Contenidos clave */}
                  <div className="compact-highlights-box">
                    <span className="compact-highlights-title">Contenidos clave:</span>
                    <ul className="compact-highlights-list">
                      {course.data40h.highlights.map((item, idx) => (
                        <li key={idx}>
                          <span className="compact-bullet" style={{ color: course.colorAccent }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructor */}
                  <div className="compact-instructor-area">
                    <span className="compact-instructor-label">Instructor:</span>
                    <span className="compact-instructor-name">{course.instructor}</span>
                  </div>

                  {/* Dual Inversión & WhatsApp Actions (40 Horas y 8 Horas) */}
                  <div className="compact-card-footer dual-pricing-footer">
                    {/* Fila 40 Horas */}
                    <div className="compact-pricing-row">
                      <div className="compact-price-wrap">
                        <span className="compact-price-label">
                          <span className="price-dur-pill pill-40h">40 H</span>
                          Inversión:
                        </span>
                        <span className="compact-price-val">{course.data40h.price}</span>
                      </div>
                      <a
                        href={`https://api.whatsapp.com/send?phone=593964196795&text=${encodeURIComponent(`Hola BALUARTALENT & Co., tengo interés en el curso de 40 horas de "${course.title}"`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="compact-whatsapp-btn btn-wa-40h"
                        aria-label={`Inscribirme al curso ${course.title} de 40 horas por WhatsApp`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    {/* Fila 8 Horas (Promocional) */}
                    <div className="compact-pricing-row row-promo-8h">
                      <div className="compact-price-wrap">
                        <span className="compact-price-label">
                          <span className="price-dur-pill pill-8h">8 H</span>
                          Promo:
                        </span>
                        <div className="compact-price-val-wrap">
                          <span className="compact-price-val text-promo">{course.data8h.price}</span>
                          <span className="compact-promo-tag">Oferta</span>
                        </div>
                      </div>
                      <a
                        href={`https://api.whatsapp.com/send?phone=593964196795&text=${encodeURIComponent(`Hola BALUARTALENT & Co., tengo interés en el curso de 8 horas de "${course.title}"`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="compact-whatsapp-btn btn-wa-8h"
                        aria-label={`Inscribirme al curso ${course.title} de 8 horas por WhatsApp`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="courses-empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No se encontraron cursos</h3>
              <p>Prueba ajustando los términos de búsqueda o seleccionando otra área.</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
              >
                Ver todos los cursos
              </button>
            </div>
          )}

          {/* Floating Course Details Modal */}
          {selectedModalCourse && currentModalData && (
            <div 
              className="course-modal-overlay active"
              onClick={() => setSelectedModalCourse(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="course-modal-title"
            >
              <div 
                className="course-modal-dialog"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Close Button */}
                <button 
                  className="course-modal-close-btn"
                  onClick={() => setSelectedModalCourse(null)}
                  aria-label="Cerrar ventana de detalles"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="18" x2="6" y2="6"></line>
                  </svg>
                </button>

                {/* Hero / Header of Modal */}
                <div className="course-modal-hero">
                  <img 
                    src={selectedModalCourse.image} 
                    alt={selectedModalCourse.title} 
                    className="course-modal-hero-img"
                  />
                  <div className="course-modal-hero-overlay"></div>
                  
                  <div className="course-modal-hero-content">
                    <div className="course-modal-badges-top">
                      <span 
                        className="course-modal-category-badge"
                        style={{
                          background: `${selectedModalCourse.colorAccent}20`,
                          color: '#ffffff',
                          borderColor: `${selectedModalCourse.colorAccent}66`
                        }}
                      >
                        {selectedModalCourse.category}
                      </span>
                    </div>

                    <h2 id="course-modal-title" className="course-modal-title">
                      {selectedModalCourse.title}
                    </h2>
                  </div>
                </div>

                {/* Duration Mode Switcher Tabs (40 Horas vs 8 Horas) */}
                <div className="course-modal-tabs-container">
                  <div className="course-modal-tabs-nav" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={modalDuration === '40h'}
                      className={`course-modal-tab-btn ${modalDuration === '40h' ? 'active' : ''}`}
                      onClick={() => setModalDuration('40h')}
                    >
                      <span className="tab-clock-icon">⏱</span>
                      <span className="tab-duration-title">40 Horas</span>
                      <span className="tab-badge-pill">Completo</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={modalDuration === '8h'}
                      className={`course-modal-tab-btn ${modalDuration === '8h' ? 'active' : ''}`}
                      onClick={() => setModalDuration('8h')}
                    >
                      <span className="tab-clock-icon">⚡</span>
                      <span className="tab-duration-title">8 Horas</span>
                      <span className="tab-badge-pill">Intensivo</span>
                    </button>
                  </div>
                </div>

                {/* Modal Main Body (Easy Reading Layout) */}
                <div className="course-modal-body">
                  
                  {/* Quick Feature Stats Grid */}
                  <div className="course-modal-stats-grid">
                    <div className="course-modal-stat-card">
                      <div className="stat-icon-wrap" style={{ color: selectedModalCourse.colorAccent, background: `${selectedModalCourse.colorAccent}15` }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div className="stat-texts">
                        <span className="stat-label">Carga Horaria</span>
                        <span className="stat-val">{currentModalData.durationLabel}</span>
                      </div>
                    </div>

                    <div className="course-modal-stat-card">
                      <div className="stat-icon-wrap" style={{ color: '#0d9488', background: 'rgba(13, 148, 136, 0.15)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <div className="stat-texts">
                        <span className="stat-label">Modalidad</span>
                        <span className="stat-val">100% Virtual (Campus 24/7)</span>
                      </div>
                    </div>

                    <div className="course-modal-stat-card">
                      <div className="stat-icon-wrap" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div className="stat-texts">
                        <span className="stat-label">Certificación</span>
                        <span className="stat-val">Certificado con Código</span>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Description Section */}
                  <div className="course-modal-section">
                    <h3 className="course-modal-section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      {modalDuration === '8h' ? 'Enfoque del Taller Intensivo (8 Horas)' : 'Descripción y Alcance del Programa (40 Horas)'}
                    </h3>
                    <div className="course-modal-desc-box">
                      <p className="course-modal-desc-text">
                        {currentModalData.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Highlights / Key Curriculum Section */}
                  <div className="course-modal-section">
                    <h3 className="course-modal-section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      {modalDuration === '8h' ? 'Temas Prácticos Clave (8 Horas)' : 'Ejes Temáticos y Contenidos Clave (40 Horas)'}
                    </h3>
                    <div className="course-modal-highlights-grid">
                      {currentModalData.highlights.map((item, idx) => (
                        <div key={idx} className="course-modal-highlight-item">
                          <div 
                            className="highlight-check-icon"
                            style={{ 
                              color: selectedModalCourse.colorAccent,
                              background: `${selectedModalCourse.colorAccent}18`
                            }}
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="highlight-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructor Profile Card */}
                  <div className="course-modal-section">
                    <h3 className="course-modal-section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Facilitador / Instructor Especialista
                    </h3>
                    <div className="course-modal-instructor-card">
                      <div className="instructor-avatar-badge" style={{ background: `linear-gradient(135deg, ${selectedModalCourse.colorAccent}, #0f172a)` }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="instructor-info">
                        <span className="instructor-role-label">Docente Experto</span>
                        <h4 className="instructor-full-name">{selectedModalCourse.instructor}</h4>
                        <p className="instructor-note">Especialista con amplia trayectoria corporativa y consultiva en BALUARTALENT & Co.</p>
                      </div>
                    </div>
                  </div>

                  {/* Methodology / Value Pillars */}
                  <div className="course-modal-methodology-pills">
                    <div className="method-pill">
                      <span className="method-dot"></span>
                      <span>Acceso 24/7 al Aula Virtual</span>
                    </div>
                    <div className="method-pill">
                      <span className="method-dot"></span>
                      <span>{modalDuration === '8h' ? 'Casos y Aplicación Inmediata' : 'Talleres y Casos Prácticos Reales'}</span>
                    </div>
                    <div className="method-pill">
                      <span className="method-dot"></span>
                      <span>Certificado Oficial de Aprobación</span>
                    </div>
                  </div>

                </div>

                {/* Modal Footer / Actions */}
                <div className="course-modal-footer">
                  <div className="course-modal-price-box">
                    <span className="price-tag-label">Inversión ({modalDuration === '8h' ? 'Taller 8 Horas' : 'Programa 40 Horas'}):</span>
                    <div className="price-tag-amount">
                      <strong>{currentModalData.price}</strong>
                      <span className="price-subnote">Incluye certificación</span>
                    </div>
                  </div>

                  <div className="course-modal-cta-group">
                    <button 
                      className="btn-modal-secondary"
                      onClick={() => setSelectedModalCourse(null)}
                    >
                      Cerrar
                    </button>

                    {onOpenContact && (
                      <button 
                        className="btn-modal-contact"
                        onClick={() => {
                          setSelectedModalCourse(null);
                          onOpenContact();
                        }}
                      >
                        Solicitar Asesoría
                      </button>
                    )}

                    <a
                      href={`https://api.whatsapp.com/send?phone=593964196795&text=${encodeURIComponent(currentWhatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-modal-whatsapp"
                      aria-label={`Inscribirme al curso ${selectedModalCourse.title} en modalidad de ${modalDuration === '8h' ? '8 horas' : '40 horas'} por WhatsApp`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Inscribirme por WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Virtual Classroom Methodology */}
          <div className="courses-methodology-section">
            <div className="section-intro" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-subtitle">METODOLOGÍA DE FORMACIÓN</span>
              <h2>Metodología y Acreditación del Aula Virtual</h2>
              <p style={{ maxWidth: '750px', margin: '1rem auto 0 auto', color: 'var(--text-muted)' }}>
                Estructura de aprendizaje diseñada por BALUARTALENT & Co. para profesionales y organizaciones en modalidad virtual.
              </p>
            </div>

            <div className="methodology-grid">
              {/* Card 1: Modalidad 100% Virtual */}
              <div className="methodology-card methodology-card-primary">
                <div className="methodology-accent-bar bar-primary"></div>
                <div className="methodology-number">01</div>
                <div className="methodology-icon-wrap icon-wrap-primary">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h4>Modalidad 100% Virtual</h4>
                <p>Campus accesible las 24 horas con materiales de estudio, lecturas normativas actualizadas y actividades prácticas guiadas.</p>
              </div>

              {/* Card 2: 40 Horas Académicas */}
              <div className="methodology-card methodology-card-secondary">
                <div className="methodology-accent-bar bar-secondary"></div>
                <div className="methodology-number">02</div>
                <div className="methodology-icon-wrap icon-wrap-secondary">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h4>40 Horas Académicas</h4>
                <p>Carga horaria estructurada y flexible para profundizar en la aplicación técnica, operativa y regulatoria de cada disciplina.</p>
              </div>

              {/* Card 3: Talleres y Casos Prácticos */}
              <div className="methodology-card methodology-card-accent">
                <div className="methodology-accent-bar bar-accent"></div>
                <div className="methodology-number">03</div>
                <div className="methodology-icon-wrap icon-wrap-accent">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4>Talleres y Casos Prácticos</h4>
                <p>Análisis de casos reales de organizaciones en Ecuador, resolución de problemas y entrega de plantillas y herramientas aplicables.</p>
              </div>

              {/* Card 4: Certificado de Aprobación */}
              <div className="methodology-card methodology-card-indigo">
                <div className="methodology-accent-bar bar-indigo"></div>
                <div className="methodology-number">04</div>
                <div className="methodology-icon-wrap icon-wrap-indigo">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h4>Certificado de Aprobación</h4>
                <p>Certificación emitida por BALUARTALENT & Co. con código de registro, verificación curricular y respaldo profesional.</p>
              </div>
            </div>
          </div>

          {/* Return to Home Action */}
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
