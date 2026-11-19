---
name: vtalent-landing-seo
description: >-
  Crea o actualiza landing pages corporativas B2B, secciones de cursos y SEO
  técnico en Vtalent (baluartalent.com) respetando la arquitectura SPA, tokens
  de diseño, copy consultivo y sitemap. Usar cuando el usuario pida crear una
  nueva página indexada, banner de curso, ajustes de diseño o mejoras de SEO.
---

# Creación y Actualización de Landings y SEO Técnico (`Vtalent`)

## Cuándo usar esta skill
- Crear una nueva página indexada para un servicio o capacitación corporativa B2B (ej. `/capacitacion-igualdad-salarial`).
- Actualizar contenido, CTAs, banners o estructura de cursos en `Vtalent`.
- Agregar o ajustar metadatos SEO (`title`, `description`, `canonical`, Open Graph, JSON-LD) y `sitemap.xml`.

## Procedimiento paso a paso

1. **Diseñar o actualizar el componente React** en `Vtalent/src/components/<Nombre>.jsx`:
   - Respetar los tokens de diseño definidos en `Vtalent/AGENTS.md` (`#1E40AF`, `#0D9488`, `#F59E0B`, `#0A2647`).
   - En fondos oscuros, garantizar texto blanco (`#ffffff`).
   - Alinear los párrafos descriptivos `.section-desc` a la izquierda (`text-align: left`).
   - **No incluir contenido exclusivo de Moodle** (podcasts formativos, enlaces de YouTube internos ni accesos de aula) salvo pedido expreso.
   - **CTAs B2B oficiales:** `mailto:info@baluartalent.com` (con `subject` prellenado) y WhatsApp `https://wa.me/593964196795?text=...`.
   - Si el curso tiene banner destacado en `Cursos.jsx` y landing propia, **no duplicarlo** en `src/data/coursesData.js`.

2. **Registrar ruta limpia y fallback hash** en `Vtalent/src/App.jsx`:
   - Agregar la ruta en el bloque de detección (`path === '/ruta'` y `hash === '#/ruta'`).
   - Renderizar el componente en el `switch (currentView)`.
   - Si aplica navegación desde barra o pie de página, enlazar en `src/components/Navbar.jsx` o `src/components/Footer.jsx`.

3. **Configurar SEO técnico** en `Vtalent/src/utils/seo.js` y `Vtalent/public/sitemap.xml`:
   - Agregar entrada en `SEO_CONFIG` con `title`, `description`, `keywords`, `canonical: `${BASE_URL}/ruta`` y `jsonLd` (Schema.org `Course` / `Service` / `FAQPage`).
   - Agregar la URL correspondiente en `Vtalent/public/sitemap.xml` con `<loc>`, `<lastmod>`, `<changefreq>` y `<priority>`.

4. **Validación obligatoria:**
   ```powershell
   npm --prefix "d:\Projects 1\Vtalent" run build
   ```
   - Confirmar compilación limpia con Vite sin errores ni advertencias de sintaxis.
   - Si el usuario pidió publicar, continuar con la skill `vtalent-release`.
