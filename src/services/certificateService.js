/**
 * Servicio de Consulta en Tiempo Real de Certificados
 * Endpoint seguro de Google Apps Script
 */

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxycTYLhv4eDP9BNfvKWKgivQcJvaWcl0Gfz1Ub8T8Mp3Oh1tCbT0cluuJ0yDnbsvYb/exec';

const parseSignatory = (fullSignatory) => {
  const raw = (fullSignatory || 'MBA. Jorge Macías (Coordinador de Capacitación Continua)').trim();
  if (raw.includes('(') && raw.includes(')')) {
    const idx = raw.indexOf('(');
    return {
      signatory: raw.slice(0, idx).trim(),
      signatoryRole: raw.slice(idx + 1).replace(')', '').trim(),
      fullSignatory: raw
    };
  }
  return {
    signatory: raw,
    signatoryRole: '',
    fullSignatory: raw
  };
};

/**
 * Consulta un certificado por código en el endpoint de Google Apps Script.
 * @param {string} codigo Código único del certificado
 * @returns {Promise<{valido: boolean, certificate?: object, mensaje?: string}>}
 */
export async function verifyCertificateByCode(codigo) {
  const cleanCode = (codigo || '').trim();
  if (!cleanCode) {
    return { valido: false, mensaje: 'Ingrese un código de certificado válido.' };
  }

  const url = `${APPS_SCRIPT_URL}?codigo=${encodeURIComponent(cleanCode)}`;

  const response = await fetch(url, {
    method: 'GET'
  });

  if (!response.ok) {
    throw new Error(`Error del servidor (${response.status})`);
  }

  const data = await response.json();

  if (!data || data.valido !== true) {
    return {
      valido: false,
      mensaje: data?.mensaje || 'Certificado no encontrado'
    };
  }

  const { signatory, signatoryRole, fullSignatory } = parseSignatory(data.firmante);
  const rawPdfUrl = typeof data.url_pdf === 'string' ? data.url_pdf.trim() : '';
  const pdfUrl = rawPdfUrl.startsWith('http') ? rawPdfUrl : '';

  return {
    valido: true,
    certificate: {
      code: data.codigo || cleanCode,
      participantName: data.participante || '',
      idNumber: data.cedula || '',
      courseName: data.curso || '',
      durationHours: data.horas || '0',
      durationText: data.horas_texto || (data.horas ? `${data.horas} Horas Académicas` : ''),
      executionDates: data.fechas || '',
      issueDate: data.fecha_emision || '',
      institution: data.emisor || 'Baluartalent & Co. Consultoría Integral',
      signatory,
      signatoryRole,
      fullSignatory,
      status: 'VÁLIDO',
      urlPdfRaw: rawPdfUrl,
      pdfUrl
    }
  };
}
