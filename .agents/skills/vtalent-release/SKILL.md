---
name: vtalent-release
description: >-
  Ejecuta el flujo seguro de compilación, auditoría de cambios, commit y push a
  GitHub para el repositorio Vtalent en Windows PowerShell 5.1. Usar cada vez
  que el usuario pida hacer commit, push o desplegar cambios de la web.
---

# Release Seguro a GitHub (`Vtalent`)

## Cuándo usar esta skill
- El usuario solicita hacer `commit`, `push` o publicar cambios realizados en `d:\Projects 1\Vtalent`.

## Procedimiento paso a paso (PowerShell 5.1)

> **Importante:** En Windows PowerShell 5.1 nunca usar `&&`. Usar `;` o comandos separados.

1. **Compilar para producción antes de commitear:**
   ```powershell
   npm --prefix "d:\Projects 1\Vtalent" run build
   ```
   Si el build falla, corregir el error antes de continuar.

2. **Revisar estado y cambios exactos:**
   ```powershell
   git -C "d:\Projects 1\Vtalent" status --short
   git -C "d:\Projects 1\Vtalent" diff --stat
   ```
   Confirmar que no haya archivos temporales, `.env` ni cambios fuera de alcance.

3. **Stage, commit con mensaje convencional y push a `origin main`:**
   ```powershell
   git -C "d:\Projects 1\Vtalent" add <archivos_modificados>; git -C "d:\Projects 1\Vtalent" commit -m "<tipo>: <resumen conciso>"; git -C "d:\Projects 1\Vtalent" push origin main
   ```
   Tipos recomendados: `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`.

4. **Confirmación al usuario:**
   Reportar el hash del commit, la rama (`main`), el resultado del build y los archivos incluidos con enlaces clicables.
