# Reglas del Proyecto — Vtalent (`https://baluartalent.com`)

Estas reglas aplican a toda modificación dentro de `Vtalent/`.

## 1. Stack y Arquitectura
- **Frontend:** React 19 + Vite 8 (`package.json`), deploy SPA en Cloudflare Workers (`wrangler.jsonc` con `not_found_handling: "single-page-application"`).
- **Enrutamiento:** Centralizado en `src/App.jsx` (soporta rutas limpias como `/cursos`, `/capacitacion-igualdad-salarial`, `/verificar-certificado` y fallback por hash `#/...`).
- **SEO Técnico:** Centralizado en `src/utils/seo.js` (título, meta description, canonical, Open Graph, Twitter Cards y JSON-LD Schema.org) + `public/sitemap.xml` y `public/robots.txt`.
- **Estilos:** Hoja global `src/index.css` con tokens de marca:
  - Primary Navy: `#1E40AF`
  - Secondary Teal: `#0D9488`
  - Accent Amber: `#F59E0B`
  - Brand Indigo: `#4451C5` / `#2A327B`
  - Dark sections: `#0A2647` / `#0D3054`
  - Tipografías: `'Poppins', 'Inter', sans-serif` (headings) y `'DM Sans', 'Inter', sans-serif` (body).
- **Favicon oficial:** `public/favicon_final.png` (y copia `public/favicon.png`) referenciado en `index.html`.

## 2. Reglas de Contenido y UX
- **No duplicar programas insignia:** Si un curso corporativo B2B tiene banner destacado en `src/components/Cursos.jsx` y landing propia (ej. `/capacitacion-igualdad-salarial`), no repetirlo como tarjeta dentro de `src/data/coursesData.js`.
- **Separación Web vs. Moodle:** No incluir podcasts, enlaces de YouTube internos ni botones "Ingresar al Aula Virtual" en landings comerciales B2B a menos que el usuario lo solicite explícitamente.
- **CTAs B2B oficiales:** Correo `mailto:info@baluartalent.com` y WhatsApp `https://wa.me/593964196795`.
- **Contraste y alineación:** En fondos oscuros (`#0A2647` / gradientes hero), asegurar texto en `#ffffff`. Los párrafos descriptivos `.section-desc` deben alinearse a la izquierda (`text-align: left`).

## 3. Verificador de Certificados (`/verificar-certificado`)
- **Fuente única de verdad:** Endpoint seguro de Google Apps Script en `src/services/certificateService.js` (el Google Sheet es privado; nunca volver a consultar `docs.google.com/spreadsheets/.../gviz/tq`).
- **Regla CORS crítica:** Usar `fetch(url, { method: 'GET' })` **sin headers personalizados** para que sea una petición simple CORS y siga el redirect `302` de `script.google.com` → `script.googleusercontent.com` sin *preflight* `OPTIONS`.
- **Codificación:** Usar siempre `encodeURIComponent(codigo.trim())`.
- **Privacidad y UI:**
  - Mostrar `cedula` exactamente como viene enmascarada del servidor (`172506****`).
  - **Prohibido** mostrar códigos de ejemplo (ej. `BAL-...`, `REG-BAL-...`) en placeholders, subtítulos o textos de ayuda.
  - Mostrar botón **"Ver / Descargar Certificado PDF"** únicamente cuando `url_pdf.startsWith('http')`. Si es `"Pendiente"` o vacío, mostrar aviso discreto *"Documento PDF en proceso de carga"*.
  - Mantener lectura automática de `?codigo=...` al cargar (QR) + búsqueda manual + estados de carga, no encontrado y error de red.

## 4. Validación y Despliegue (PowerShell 5.1)
- Ejecutar siempre `npm --prefix "d:\Projects 1\Vtalent" run build` antes de hacer commit/push y confirmar salida sin errores.
- No usar `&&` en PowerShell 5.1; usar `;`.
- Hacer commit solo de archivos relacionados con la tarea (nunca commitear secretos ni archivos temporales).
- Repositorio remoto: `origin` → `https://github.com/Baluartalent/Vtalent.git` (rama `main`).

## 5. Skills Disponibles en este Proyecto
- `vtalent-landing-seo`: Crear o actualizar landings B2B/cursos, SEO técnico y sitemap.
- `vtalent-certificados-verifier`: Mantener y verificar el flujo `/verificar-certificado` y su integración con Apps Script.
- `vtalent-release`: Flujo estandarizado de build, revisión de diff, commit y push a `main`.
