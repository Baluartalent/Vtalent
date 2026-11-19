---
name: vtalent-certificados-verifier
description: >-
  Mantiene, actualiza y valida el flujo público de verificación de certificados
  (/verificar-certificado) conectado al endpoint seguro de Google Apps Script.
  Usar cuando el usuario pida cambios en la consulta de certificados, QR,
  estado de PDF, privacidad o pruebas CORS del verificador.
---

# Verificador Público de Certificados (`Vtalent`)

## Arquitectura y Contrato del Endpoint
- **Servicio:** `Vtalent/src/services/certificateService.js`
- **Componente UI:** `Vtalent/src/components/VerificarCertificado.jsx`
- **Estilos:** `Vtalent/src/index.css` (clases `.cert-*`)
- **Endpoint (GET):**
  `https://script.google.com/macros/s/AKfycbxycTYLhv4eDP9BNfvKWKgivQcJvaWcl0Gfz1Ub8T8Mp3Oh1tCbT0cluuJ0yDnbsvYb/exec?codigo={CODIGO}`
- **Respuestas JSON esperadas:**
  - Válido: `valido: true` + `codigo`, `participante`, `cedula` (ya enmascarada), `curso`, `horas`, `horas_texto`, `fechas`, `fecha_emision`, `emisor`, `firmante`, `url_pdf`.
  - No encontrado: `valido: false` + `mensaje`.

## Reglas Inquebrantables
1. **CORS sin preflight:** Hacer `fetch(url, { method: 'GET' })` **sin headers personalizados**. Google Apps Script responde `302 Found` → `200 OK` con `Access-Control-Allow-Origin: *`.
2. **Escape de parámetros:** Usar siempre `encodeURIComponent(codigo.trim())`.
3. **Lectura automática desde QR:** Al cargar `/verificar-certificado?codigo=...` (o `#/verificar-certificado?codigo=...`), consultar automáticamente.
4. **Cero códigos de ejemplo en UI:** Nunca mostrar ejemplos de nomenclatura (`BAL-...`, `REG-BAL-...`) en placeholders, subtítulos ni mensajes de ayuda.
5. **Privacidad:** Mostrar `cedula` exactamente como llega del servidor (`172506****`).
6. **Manejo seguro de `url_pdf`:** Mostrar el botón `"Ver / Descargar Certificado PDF"` únicamente si `url_pdf.startsWith('http')`. En caso contrario (`"Pendiente"` o vacío), mostrar el aviso discreto *"Documento PDF en proceso de carga"*.
7. **Estados visuales obligatorios:** Carga (`isLoading`), válido (`selectedResult`), no encontrado (`valido === false`) y error de red (`networkError` con botón de reintento).

## Procedimiento de Verificación
1. **Validar endpoint y cabeceras CORS por CLI:**
   ```powershell
   curl.exe -i -sL "https://script.google.com/macros/s/AKfycbxycTYLhv4eDP9BNfvKWKgivQcJvaWcl0Gfz1Ub8T8Mp3Oh1tCbT0cluuJ0yDnbsvYb/exec?codigo=BAL-LOISAM1-2026-001"
   curl.exe -i -sL "https://script.google.com/macros/s/AKfycbxycTYLhv4eDP9BNfvKWKgivQcJvaWcl0Gfz1Ub8T8Mp3Oh1tCbT0cluuJ0yDnbsvYb/exec?codigo=BAL-NOEXISTE-999"
   ```
   Confirmar `Access-Control-Allow-Origin: *` en `302` y `200`, `"valido":true` en el primero y `"valido":false` en el segundo.
2. **Validar ausencia de códigos de ejemplo en el componente:**
   ```powershell
   Select-String -Path "d:\Projects 1\Vtalent\src\components\VerificarCertificado.jsx" -Pattern "BAL-|REG-BAL|ej\." -CaseSensitive:$false
   ```
   No debe haber coincidencias en textos visibles al usuario.
3. **Validar build de producción:**
   ```powershell
   npm --prefix "d:\Projects 1\Vtalent" run build
   ```
