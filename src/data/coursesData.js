/**
 * CATÁLOGO DE CURSOS - BALUARTALENT & CO.
 * Estructura académica formal: 10 cursos en modalidad virtual de 40 horas académicas y 8 horas intensivas.
 */

export const COURSES_DATA = [
  {
    id: 'igualdad-salarial',
    isStarCourse: true,
    isCorporateB2B: true,
    landingUrl: '/capacitacion-igualdad-salarial',
    title: 'Ley Orgánica de Igualdad Salarial y Acuerdo Ministerial MDT-2025-006',
    category: 'Capacitación Obligatoria & Legal',
    price: 'Cotización B2B',
    instructor: 'Equipo Consultor Legal & Laboral BALUARTALENT',
    image: '/courses/igualdad_salarial.jpg',
    colorAccent: '#dc2626',
    data40h: {
      duration: '40 Horas',
      durationLabel: '40 Horas Reglamentarias',
      badge: 'Obligatorio MDT 2025',
      price: 'Cotización In-Company',
      deadlineNotice: 'Plazo Legal: Antes del 30 de Noviembre',
      shortDesc: 'Asegura el cumplimiento de tu empresa con la capacitación obligatoria anual de igualdad salarial. Exigida por la Ley Orgánica de Igualdad Salarial y Acuerdo Ministerial MDT-2025-006 para todo el personal antes del 30 de noviembre. Certificado con respaldo normativo ante el Ministerio del Trabajo.',
      highlights: [
        'Obligatorio para todo el personal de la empresa',
        'Carga reglamentaria obligatoria de 40 horas académicas',
        'Fecha límite legal: Antes del 30 de noviembre',
        'Certificación y documentación para inspecciones MDT'
      ]
    },
    data8h: {
      duration: '40 Horas',
      durationLabel: 'Programa Completo B2B',
      badge: 'Normativa Oficial',
      price: 'Cotización B2B',
      shortDesc: 'Programa formativo integral de 40 horas reglamentarias para todo el personal de la organización, diseñado bajo el marco del Acuerdo Ministerial MDT-2025-006 y la Ley de Igualdad Salarial.',
      highlights: [
        'Diagnóstico de brecha salarial corporativa',
        'Metodología de valoración de puestos sin sesgo',
        'Planes de igualdad salarial y políticas internas',
        'Registro formal para inspecciones de trabajo'
      ]
    }
  },
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

export const CATEGORIES = [
  'Todos',
  'Capacitación Obligatoria & Legal',
  'Talento Humano & Legal',
  'Seguridad & Salud (SST)',
  'Salud Ocupacional',
  'Liderazgo & Soft Skills',
  'Marketing & Clientes',
  'Gestión & Compras',
  'Gestión Ambiental'
];
