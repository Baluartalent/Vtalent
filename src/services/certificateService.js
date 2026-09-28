/**
 * Servicio de Consulta en Tiempo Real de Certificados desde Google Sheets
 * ID de la Hoja de Google: 1iHrgLHUyC7FQhLxbEBej-DdFaoB7eH_uojD88TsSv0Q
 */

const SHEET_ID = '1iHrgLHUyC7FQhLxbEBej-DdFaoB7eH_uojD88TsSv0Q';
const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

let cachedCertificates = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 30000; // 30 segundos de caché en memoria para máxima velocidad

const getCellValue = (cell) => {
  if (!cell) return '';
  if (cell.f !== undefined && cell.f !== null) return String(cell.f).trim();
  if (cell.v !== undefined && cell.v !== null) return String(cell.v).trim();
  return '';
};

export async function fetchLiveCertificates(forceRefresh = false) {
  const now = Date.now();
  if (!forceRefresh && cachedCertificates && (now - lastFetchTime < CACHE_TTL_MS)) {
    return cachedCertificates;
  }

  try {
    const response = await fetch(`${GOOGLE_SHEET_URL}&_ts=${now}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const text = await response.text();
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error('Respuesta inválida de Google Sheets');
    }

    const jsonStr = text.substring(jsonStart, jsonEnd + 1);
    const parsed = JSON.parse(jsonStr);

    const rows = parsed?.table?.rows || [];
    const list = rows.map((row) => {
      const cells = row.c || [];
      const code = getCellValue(cells[0]);
      const participantName = getCellValue(cells[1]);
      const idNumber = getCellValue(cells[2]);
      const courseName = getCellValue(cells[3]);
      const durationHours = getCellValue(cells[4]) || '0';
      const durationText = getCellValue(cells[5]) || `${durationHours} Horas Académicas`;
      const executionDates = getCellValue(cells[6]);
      const issueDate = getCellValue(cells[7]);
      const institution = getCellValue(cells[8]) || 'Baluartalent & Co. Consultoría Integral';
      const fullSignatory = getCellValue(cells[9]) || 'MBA. Jorge Macías (Coordinador de Capacitación Continua)';
      
      // Parse Signatory and Role if in "Name (Role)" format
      let signatory = fullSignatory;
      let signatoryRole = 'COORDINADOR DE CAPACITACIÓN CONTINUA';
      if (fullSignatory.includes('(') && fullSignatory.includes(')')) {
        const parts = fullSignatory.split('(');
        signatory = parts[0].trim();
        signatoryRole = parts[1].replace(')', '').trim();
      }

      let rawPdfUrl = getCellValue(cells[10]);
      let pdfUrl = '';
      // Only set pdfUrl if it's a real external file link (Google Drive, OneDrive, direct PDF)
      if (
        rawPdfUrl && 
        rawPdfUrl !== '-' && 
        !rawPdfUrl.includes('#/verificar-certificado') &&
        (rawPdfUrl.startsWith('http://') || rawPdfUrl.startsWith('https://'))
      ) {
        pdfUrl = rawPdfUrl;
      }

      return {
        code,
        participantName,
        idNumber,
        courseName,
        durationHours,
        durationText,
        executionDates,
        issueDate,
        institution,
        department: 'CAPACITACIÓN CONTINUA',
        signatory,
        signatoryRole,
        status: 'VÁLIDO',
        pdfUrl
      };
    }).filter(item => item.code && item.code !== '-');

    cachedCertificates = list;
    lastFetchTime = now;
    return list;
  } catch (error) {
    console.warn('No se pudo sincronizar en vivo con Google Sheets, usando caché local si existe:', error);
    if (cachedCertificates) return cachedCertificates;
    return [];
  }
}
