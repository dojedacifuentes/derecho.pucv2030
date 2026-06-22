// ─────────────────────────────────────────────────────────────────────────────
// Descargas sin backend ni dependencias.
// Cada "documento" se arma como un HTML autocontenido, con estilos de impresión,
// y se descarga como archivo .html (abrible y "Guardar como PDF" desde el navegador).
// copyText() copia texto al portapapeles para el resumen ejecutivo.
// ─────────────────────────────────────────────────────────────────────────────

export interface DocSection {
  heading?: string;
  /** párrafos de texto plano */
  paragraphs?: string[];
  /** lista de viñetas */
  bullets?: string[];
  /** lista numerada */
  numbered?: string[];
  /** tabla: filas, primera fila = encabezado si headerRow */
  table?: { headerRow?: boolean; rows: string[][] };
}

export interface ReportDoc {
  filename: string;
  title: string;
  subtitle?: string;
  sections: DocSection[];
}

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function renderSection(s: DocSection): string {
  const parts: string[] = [];
  if (s.heading) parts.push(`<h2>${esc(s.heading)}</h2>`);
  if (s.paragraphs) parts.push(...s.paragraphs.map((p) => `<p>${esc(p)}</p>`));
  if (s.bullets) parts.push(`<ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`);
  if (s.numbered) parts.push(`<ol>${s.numbered.map((b) => `<li>${esc(b)}</li>`).join("")}</ol>`);
  if (s.table) {
    const rows = s.table.rows
      .map((r, i) => {
        const tag = s.table!.headerRow && i === 0 ? "th" : "td";
        return `<tr>${r.map((c) => `<${tag}>${esc(c)}</${tag}>`).join("")}</tr>`;
      })
      .join("");
    parts.push(`<table>${rows}</table>`);
  }
  return `<section>${parts.join("")}</section>`;
}

function buildHtml(doc: ReportDoc): string {
  const today = new Date().toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
  const body = doc.sections.map(renderSection).join("");
  return `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(doc.title)}</title>
<style>
  @page { margin: 22mm 20mm; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, "Times New Roman", serif; color: #14161b; line-height: 1.55;
         max-width: 760px; margin: 40px auto; padding: 0 24px; background: #fff; font-size: 12.5pt; }
  .doc-head { border-bottom: 2px solid #14161b; padding-bottom: 16px; margin-bottom: 28px; }
  .eyebrow { font-family: "Courier New", monospace; font-size: 9pt; letter-spacing: .18em;
             text-transform: uppercase; color: #5a6170; margin: 0 0 10px; }
  h1 { font-size: 22pt; line-height: 1.12; margin: 0 0 6px; letter-spacing: -.01em; }
  .subtitle { color: #444; font-size: 12pt; margin: 0; font-style: italic; }
  h2 { font-size: 13pt; margin: 26px 0 8px; padding-bottom: 5px; border-bottom: 1px solid #d8dbe2;
       font-family: "Helvetica Neue", Arial, sans-serif; letter-spacing: -.01em; }
  p { margin: 0 0 11px; }
  ul, ol { margin: 0 0 12px; padding-left: 22px; }
  li { margin: 0 0 5px; }
  table { width: 100%; border-collapse: collapse; margin: 6px 0 16px; font-size: 11pt; }
  th, td { border: 1px solid #c9cdd6; padding: 7px 10px; text-align: left; vertical-align: top; }
  th { background: #f0f2f6; font-family: "Helvetica Neue", Arial, sans-serif; font-size: 10pt; }
  footer { margin-top: 40px; padding-top: 14px; border-top: 1px solid #d8dbe2; color: #5a6170;
           font-family: "Helvetica Neue", Arial, sans-serif; font-size: 9.5pt; }
  .print-cta { margin: 22px 0 0; font-family: "Helvetica Neue", Arial, sans-serif; font-size: 10pt; }
  .print-cta button { font: inherit; padding: 8px 16px; border: 1px solid #14161b; background: #14161b;
                      color: #fff; border-radius: 3px; cursor: pointer; }
  @media print { .print-cta { display: none; } body { margin: 0; } }
</style></head>
<body>
  <div class="doc-head">
    <p class="eyebrow">Escuela de Derecho PUCV · Documento estratégico de trabajo</p>
    <h1>${esc(doc.title)}</h1>
    ${doc.subtitle ? `<p class="subtitle">${esc(doc.subtitle)}</p>` : ""}
  </div>
  ${body}
  <div class="print-cta"><button onclick="window.print()">Imprimir / Guardar como PDF</button></div>
  <footer>
    Preparado por Diego Ojeda Cifuentes · Derecho, IA y Tecnología (DIAT)<br>
    Documento de trabajo para conversación estratégica · Generado el ${esc(today)}
  </footer>
</body></html>`;
}

/** Genera y descarga el documento como archivo .html autocontenido. */
export function downloadReport(doc: ReportDoc): void {
  if (typeof window === "undefined") return;
  const html = buildHtml(doc);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = doc.filename.endsWith(".html") ? doc.filename : `${doc.filename}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/** Copia texto al portapapeles. Devuelve true si tuvo éxito. */
export async function copyText(text: string): Promise<boolean> {
  if (typeof navigator === "undefined") return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback para navegadores sin permiso de clipboard
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}
