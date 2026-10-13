/**
 * SEO Manager para BALUARTALENT & Co.
 * Gestiona dinámicamente:
 * - document.title
 * - meta description y meta keywords
 * - canonical link tag
 * - Open Graph y Twitter Cards
 * - Inyección y limpieza de datos estructurados JSON-LD (Schema.org)
 */

import { COURSES_DATA } from '../data/coursesData';

const BASE_URL = 'https://baluartalent.com';

export const generateCoursesJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo de Cursos de Capacitación Continua - BALUARTALENT & Co.",
    "description": "Programas y talleres especializados en Recursos Humanos, Legislación Laboral, Seguridad Ocupacional y Liderazgo en Quito, Ecuador.",
    "url": `${BASE_URL}/cursos`,
    "itemListElement": COURSES_DATA.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.data40h.shortDesc,
        "provider": {
          "@type": "Organization",
          "name": "BALUARTALENT & Co. Consultoría Integral",
          "sameAs": BASE_URL
        },
        "offers": [
          {
            "@type": "Offer",
            "category": "40 Horas Académicas",
            "price": "99.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${BASE_URL}/cursos`
          },
          {
            "@type": "Offer",
            "category": "8 Horas Intensivas",
            "price": "35.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${BASE_URL}/cursos`
          }
        ],
        "hasCourseInstance": [
          {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT40H",
            "instructor": {
              "@type": "Person",
              "name": course.instructor
            }
          },
          {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT8H",
            "instructor": {
              "@type": "Person",
              "name": course.instructor
            }
          }
        ]
      }
    }))
  };
};

export const generateIgualdadSalarialJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Capacitación Obligatoria: Ley Orgánica de Igualdad Salarial y Acuerdo Ministerial MDT-2025-006",
    "description": "Capacitación anual obligatoria de 40 horas académicas en equidad salarial y no discriminación para todo el personal de la empresa, conforme a la Ley Orgánica de Igualdad Salarial y el Acuerdo Ministerial MDT-2025-006 en Ecuador.",
    "url": `${BASE_URL}/capacitacion-igualdad-salarial`,
    "provider": {
      "@type": "Organization",
      "name": "BALUARTALENT & Co. Consultoría Integral",
      "sameAs": BASE_URL
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Blended",
      "courseWorkload": "PT40H",
      "description": "Modalidad virtual asincrónica 24/7 y talleres in-company presenciales para todo el personal de la empresa."
    },
    "offers": {
      "@type": "Offer",
      "category": "Capacitación Corporativa B2B",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Cotización corporativa B2B para todo el personal de la empresa con fecha límite antes del 30 de noviembre."
    }
  };
};

const SEO_ROUTES = {
  home: {
    title: 'BALUARTALENT & Co. Consultoría Integral | Recursos Humanos y Selección en Quito',
    description: 'BALUARTALENT & Co. Consultoría Integral es la consultora de Recursos Humanos líder en Quito, Ecuador. Especialistas en reclutamiento, selección de personal, nómina y clima laboral.',
    canonical: `${BASE_URL}/`,
    keywords: 'recursos humanos quito, consultora de rrhh quito, reclutamiento y seleccion ecuador, outsourcing de nomina quito, gestion de talento humano ecuador, baluartalent, consultoria laboral quito',
    structuredData: null
  },
  cursos: {
    title: 'Cursos y Capacitación Continua en Quito | BALUARTALENT & Co.',
    description: 'Catálogo oficial de cursos y talleres de capacitación continua en Quito, Ecuador. Programas de 40 y 8 horas académicas en Gestión del Talento Humano, Legislación Laboral, SST y Liderazgo.',
    canonical: `${BASE_URL}/cursos`,
    keywords: 'cursos recursos humanos quito, capacitacion continua ecuador, cursos de talento humano, taller legislacion laboral ecuador, cursos seguridad ocupacional sst, cursos online quito, baluartalent cursos',
    structuredData: generateCoursesJsonLd
  },
  'capacitacion-igualdad-salarial': {
    title: 'Capacitación Obligatoria Ley de Igualdad Salarial MDT-2025-006 | BALUARTALENT & Co.',
    description: 'Asegura el cumplimiento de tu empresa con la capacitación obligatoria de igualdad salarial (Acuerdo Ministerial MDT-2025-006). 40 horas, todo el personal, plazo antes del 30 de noviembre en Ecuador.',
    canonical: `${BASE_URL}/capacitacion-igualdad-salarial`,
    keywords: 'ley organica de igualdad salarial ecuador, acuerdo ministerial mdt-2025-006, capacitacion obligatoria igualdad salarial, capacitacion 30 de noviembre mdt, capacitacion igualdad salarial empresas quito, valoracion objetiva de puestos sin sesgo, brecha salarial ecuador',
    structuredData: generateIgualdadSalarialJsonLd
  },
  'verificar-certificado': {
    title: 'Verificación Oficial de Certificados | BALUARTALENT & Co.',
    description: 'Sistema oficial de consulta y validación digital en tiempo real de certificados académicos emitidos por BALUARTALENT & Co. Consultoría Integral en Ecuador.',
    canonical: `${BASE_URL}/verificar-certificado`,
    keywords: 'verificar certificado baluartalent, validacion certificados quito, consulta de certificados de capacitacion ecuador, certificados autenticos baluartalent',
    structuredData: null
  },
  'nuestros-lideres': {
    title: 'Nuestros Líderes y Dirección Estratégica | BALUARTALENT & Co.',
    description: 'Conozca al equipo directivo y consultor de BALUARTALENT & Co.: especialistas en Dirección Estratégica de Recursos Humanos, Capacitación Continua y Legislación Laboral.',
    canonical: `${BASE_URL}/nuestros-lideres`,
    keywords: 'equipo directivo baluartalent, consultores rrhh quito, especialistas en talento humano ecuador, abogados laborales quito',
    structuredData: null
  },
  'mision-vision': {
    title: 'Misión y Visión | BALUARTALENT & Co. Consultoría Integral',
    description: 'Misión, visión y propósito estratégico de BALUARTALENT & Co. en la transformación del talento humano en Ecuador.',
    canonical: `${BASE_URL}/mision-vision`,
    keywords: 'mision baluartalent, vision consultora talento humano ecuador',
    structuredData: null
  },
  'valores-corporativos': {
    title: 'Valores Corporativos | BALUARTALENT & Co. Consultoría Integral',
    description: 'Principios éticos y valores que guían nuestra consultoría estratégica de recursos humanos en Quito, Ecuador.',
    canonical: `${BASE_URL}/valores-corporativos`,
    keywords: 'valores corporativos baluartalent, etica en recursos humanos',
    structuredData: null
  },
  'plan-de-accion': {
    title: 'Plan de Acción y Metodología | BALUARTALENT & Co.',
    description: 'Conozca nuestro plan de acción y metodología estructurada para diagnosticar, optimizar y potenciar el capital humano de su empresa.',
    canonical: `${BASE_URL}/plan-de-accion`,
    keywords: 'plan de accion recursos humanos, metodologia consultoria rrhh ecuador',
    structuredData: null
  },
  'modelo-de-desarrollo': {
    title: 'Modelo de Desarrollo Organizacional | BALUARTALENT & Co.',
    description: 'Modelo integral de desarrollo del talento humano para empresas en Ecuador: alineación estratégica, productividad y bienestar.',
    canonical: `${BASE_URL}/modelo-de-desarrollo`,
    keywords: 'modelo de desarrollo talento humano, desarrollo organizacional quito',
    structuredData: null
  },
  'gestion-de-nomina': {
    title: 'Gestión y Outsourcing de Nómina en Quito | BALUARTALENT & Co.',
    description: 'Servicio profesional de outsourcing de nómina y administración de salarios en Ecuador: cálculo exacto, plataforma SUT, IESS y confidencialidad.',
    canonical: `${BASE_URL}/gestion-de-nomina`,
    keywords: 'outsourcing de nomina quito, gestion de sueldos ecuador, calculo de nomina iess sut, administracion de personal quito',
    structuredData: null
  },
  'asesoria-juridica-legal': {
    title: 'Asesoría Jurídica y Legal Laboral | BALUARTALENT & Co.',
    description: 'Blindaje legal laboral y defensa corporativa en Ecuador: contratos de trabajo, vistos buenos, mediación extrajudicial y cumplimiento del Código del Trabajo.',
    canonical: `${BASE_URL}/asesoria-juridica-legal`,
    keywords: 'asesoria legal laboral quito, abogados laborales ecuador, visto bueno sut quito, defensa empleador codigo del trabajo',
    structuredData: null
  },
  'capacitacion-corporativa': {
    title: 'Capacitación Corporativa In-Company | BALUARTALENT & Co.',
    description: 'Programas de capacitación continua diseñados a la medida para empresas en Ecuador: liderazgo, trabajo en equipo, servicio al cliente y cumplimiento SST.',
    canonical: `${BASE_URL}/capacitacion-corporativa`,
    keywords: 'capacitacion empresarial quito, cursos in company ecuador, entrenamiento de personal corporativo, capacitacion continua rrhh',
    structuredData: null
  },
  'politica-de-privacidad': {
    title: 'Política de Privacidad y Tratamiento de Datos | BALUARTALENT & Co.',
    description: 'Política de privacidad, confidencialidad y tratamiento de datos personales de BALUARTALENT & Co. conforme a la Ley Orgánica de Protección de Datos Personales de Ecuador.',
    canonical: `${BASE_URL}/politica-de-privacidad`,
    keywords: 'politica de privacidad baluartalent, proteccion de datos personales ecuador',
    structuredData: null
  }
};

const setMetaTag = (attrName, attrValue, content) => {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setCanonicalTag = (url) => {
  if (typeof document === 'undefined') return;
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
};

const setStructuredData = (data) => {
  if (typeof document === 'undefined') return;
  const scriptId = 'seo-dynamic-jsonld';
  let script = document.getElementById(scriptId);

  if (!data) {
    if (script) script.remove();
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const jsonContent = typeof data === 'function' ? data() : data;
  script.textContent = JSON.stringify(jsonContent, null, 2);
};

export function updateSEO(viewKey) {
  if (typeof document === 'undefined') return;
  const config = SEO_ROUTES[viewKey] || SEO_ROUTES.home;

  // 1. Title
  document.title = config.title;

  // 2. Meta Description & Keywords
  setMetaTag('name', 'description', config.description);
  if (config.keywords) {
    setMetaTag('name', 'keywords', config.keywords);
  }

  // 3. Canonical Link
  setCanonicalTag(config.canonical);

  // 4. Open Graph
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);
  setMetaTag('property', 'og:url', config.canonical);

  // 5. Twitter Card
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);

  // 6. Structured Data
  setStructuredData(config.structuredData);
}
