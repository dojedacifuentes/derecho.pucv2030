/* ============================================================================
 * Derecho PUCV 2030 — Diagnóstico y Propuesta
 * Genera un PDF premium, 2 páginas, tamaño carta horizontal, listo para imprimir.
 *
 * Tecnología: PDFKit (Node, vectorial, fuentes estándar embebidas Helvetica/Courier).
 * Sin internet, sin fuentes externas, sin estética oscura que gaste tinta.
 *
 * Uso:  npm run pdf      (o)   node scripts/generate-pdf.js
 * Salida: output/derecho-pucv-2030-diagnostico-propuesta.pdf
 * ========================================================================== */

const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ── Paleta (clara, para impresión; acentos cian eléctrico) ──
const INK = "#14161b";
const GRAY = "#5a6170";
const MUTE = "#9aa0ac";
const LINE = "#d3d7de";
const CYAN = "#0a9ec7";
const CYAND = "#0b7ea0";
const CYANPALE = "#e9f6fb";
const PALE = "#f5f7f9";
const WHITE = "#ffffff";

// ── Geometría (carta horizontal = 792 × 612 pt) ──
const PW = 792;
const PH = 612;
const M = 46; // margen lateral
const CW = PW - 2 * M; // ancho de contenido = 700

// ── Salida ──
const outDir = path.join(__dirname, "..", "output");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "derecho-pucv-2030-diagnostico-propuesta.pdf");

const doc = new PDFDocument({
  size: "LETTER",
  layout: "landscape",
  margins: { top: 0, left: 0, right: 0, bottom: 0 },
  info: {
    Title: "Derecho PUCV 2030 — Diagnóstico y Propuesta",
    Author: "Diego Ojeda",
    Subject: "Capacidades estratégicas para la formación jurídica en la era de la inteligencia artificial",
    Keywords: "Derecho, IA, PUCV, formación jurídica, legaltech",
  },
});
const stream = fs.createWriteStream(outFile);
doc.pipe(stream);

// ── Helpers ──
function rule(x, y, w, color = LINE, weight = 1) {
  doc.save().lineWidth(weight).strokeColor(color).moveTo(x, y).lineTo(x + w, y).stroke().restore();
}

function eyebrow(text, x, y, color = CYAND, size = 8) {
  doc.font("Courier-Bold").fontSize(size).fillColor(color);
  doc.text(text.toUpperCase(), x, y, { characterSpacing: 1.4, lineBreak: false });
}

function tick(x, y, color = CYAN, s = 7) {
  doc.save().fillColor(color).rect(x, y, s, s).fill().restore();
}

// símbolo "≠" dibujado vectorialmente (no existe en la fuente estándar)
function neq(cx, cy, size, color = CYAN) {
  const w = size * 0.62;
  doc.save().lineWidth(Math.max(1.1, size * 0.11)).strokeColor(color).lineCap("round");
  doc.moveTo(cx - w / 2, cy - size * 0.17).lineTo(cx + w / 2, cy - size * 0.17).stroke();
  doc.moveTo(cx - w / 2, cy + size * 0.17).lineTo(cx + w / 2, cy + size * 0.17).stroke();
  doc.moveTo(cx - w * 0.44, cy + size * 0.46).lineTo(cx + w * 0.44, cy - size * 0.46).stroke();
  doc.restore();
}

function arrowHead(x, y, dir, color, s = 4) {
  // dir: 'r' (derecha) o 'u' (arriba)
  doc.save().fillColor(color);
  if (dir === "r") doc.moveTo(x, y - s).lineTo(x + s * 1.4, y).lineTo(x, y + s).fill();
  else doc.moveTo(x - s, y).lineTo(x, y - s * 1.4).lineTo(x + s, y).fill();
  doc.restore();
}

function header(pageNo, sectionTitle) {
  eyebrow("Informe estratégico · Escuela de Derecho PUCV", M, M, CYAND, 8);
  doc.font("Courier").fontSize(8).fillColor(MUTE);
  doc.text(`0${pageNo} / 02`, PW - M - 60, M, { width: 60, align: "right", characterSpacing: 1.2 });

  doc.font("Helvetica-Bold").fontSize(29).fillColor(INK);
  doc.text("DERECHO PUCV ", M, M + 13, { continued: true, characterSpacing: 0.4 });
  doc.fillColor(CYAN).text("2030", { continued: false });

  doc.font("Helvetica").fontSize(10).fillColor(GRAY);
  doc.text(
    "Capacidades estratégicas para la formación jurídica en la era de la inteligencia artificial",
    M,
    M + 50,
    { width: CW - 70, lineBreak: false },
  );

  rule(M, M + 70, CW, LINE, 1);
  rule(M, M + 70, 150, CYAN, 2); // acento cian

  // título de sección
  tick(M, M + 86, CYAN, 8);
  doc.font("Helvetica-Bold").fontSize(15).fillColor(INK);
  doc.text(sectionTitle, M + 16, M + 82, { lineBreak: false });
}

function footer() {
  rule(M, PH - 34, CW, LINE, 0.8);
  doc.font("Courier").fontSize(7.5).fillColor(GRAY);
  doc.text("DIEGO OJEDA  |  DERECHO PUCV  |  IA, EDUCACIÓN JURÍDICA E INNOVACIÓN", M, PH - 27, {
    characterSpacing: 0.8,
    lineBreak: false,
  });
  doc.fillColor(CYAND);
  doc.text("derechopucv2030.vercel.app", PW - M - 200, PH - 27, {
    width: 200,
    align: "right",
    characterSpacing: 0.6,
  });
}

// radar de 5 ejes con dos perfiles
function radar(cx, cy, R, axes, profiles) {
  const n = axes.length;
  const ang = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];

  // anillos
  doc.save();
  [0.34, 0.67, 1].forEach((f) => {
    doc.lineWidth(0.8).strokeColor(LINE);
    for (let i = 0; i < n; i++) {
      const [x, y] = pt(i, f);
      if (i === 0) doc.moveTo(x, y);
      else doc.lineTo(x, y);
    }
    doc.closePath().stroke();
  });
  // ejes
  for (let i = 0; i < n; i++) {
    const [x, y] = pt(i, 1);
    doc.lineWidth(0.8).strokeColor(LINE).moveTo(cx, cy).lineTo(x, y).stroke();
  }
  doc.restore();

  // polígonos de perfil
  profiles.forEach((p) => {
    doc.save().lineWidth(p.weight || 1.6).strokeColor(p.stroke);
    if (p.fill) doc.fillColor(p.fill).fillOpacity(p.opacity || 0.18);
    for (let i = 0; i < n; i++) {
      const [x, y] = pt(i, p.values[i]);
      if (i === 0) doc.moveTo(x, y);
      else doc.lineTo(x, y);
    }
    doc.closePath();
    if (p.fill) doc.fillAndStroke(p.fill, p.stroke);
    else doc.stroke();
    doc.restore();
    // nodos
    doc.save().fillColor(p.stroke).fillOpacity(1);
    for (let i = 0; i < n; i++) {
      const [x, y] = pt(i, p.values[i]);
      doc.circle(x, y, 1.8).fill();
    }
    doc.restore();
  });

  // etiquetas de eje
  doc.font("Helvetica").fontSize(7).fillColor(INK);
  for (let i = 0; i < n; i++) {
    const [x, y] = pt(i, 1.15);
    const a = ang(i);
    const cosv = Math.cos(a);
    let align = "center";
    let tx = x - 40;
    if (cosv > 0.3) {
      align = "left";
      tx = x;
    } else if (cosv < -0.3) {
      align = "right";
      tx = x - 80;
    } else {
      tx = x - 40;
    }
    doc.text(axes[i], tx, y - 8, { width: 80, align });
  }
}

/* ===========================================================================
 * PÁGINA 1 — Diagnóstico estratégico
 * ========================================================================= */
header(1, "Diagnóstico estratégico");

// — Frase destacada —
const qy = M + 110;
const qh = 56;
doc.save().fillColor(CYANPALE).rect(M, qy, CW, qh).fill().restore();
doc.save().fillColor(CYAN).rect(M, qy, 4, qh).fill().restore();
doc.font("Helvetica-Oblique").fontSize(11.5).fillColor(INK);
doc.text(
  "“El acceso a información dejó de ser el principal desafío. La nueva frontera de la formación jurídica está en comprender, evaluar, utilizar y supervisar conocimiento en entornos mediados por inteligencia artificial.”",
  M + 22,
  qy + 11,
  { width: CW - 44, lineGap: 2 },
);

// — Cinco vectores estratégicos (nodos conectados) —
const vy = qy + qh + 26;
eyebrow("Cinco vectores estratégicos", M, vy, CYAND, 8);
const vectors = [
  "Inteligencia artificial aplicada",
  "Comprensión lectora jurídica",
  "Innovación docente",
  "Investigación aplicada",
  "Vinculación profesional",
];
const nodeY = vy + 36;
const r = 17;
const seg = CW / vectors.length;
const cxOf = (i) => M + seg * (i + 0.5);
// líneas de conexión (detrás)
for (let i = 0; i < vectors.length - 1; i++) {
  const x1 = cxOf(i) + r;
  const x2 = cxOf(i + 1) - r;
  doc.save().lineWidth(1.3).strokeColor(CYAN);
  doc.moveTo(x1, nodeY).lineTo(x2, nodeY).stroke().restore();
  doc.save().fillColor(CYAN).circle((x1 + x2) / 2, nodeY, 1.8).fill().restore();
}
// círculos + etiquetas
vectors.forEach((v, i) => {
  const cx = cxOf(i);
  doc.save().lineWidth(1.7).strokeColor(CYAN).fillColor(WHITE).circle(cx, nodeY, r).fillAndStroke(WHITE, CYAN).restore();
  doc.font("Helvetica-Bold").fontSize(13).fillColor(CYAND);
  doc.text(String(i + 1), cx - r, nodeY - 7, { width: 2 * r, align: "center" });
  doc.font("Helvetica").fontSize(8.3).fillColor(INK);
  doc.text(v, cx - seg / 2 + 10, nodeY + r + 8, { width: seg - 20, align: "center", lineGap: 1 });
});

// — Columnas inferiores: Tensiones críticas (izq) · Radar (der) —
const lowY = nodeY + r + 44;
const colGap = 34;
const leftW = 352;
const rightX = M + leftW + colGap;
const rightW = CW - leftW - colGap;

// Tensiones críticas
eyebrow("Tensiones críticas", M, lowY, CYAND, 8);
const tensions = [
  ["Más información", "más comprensión"],
  ["Más IA", "mejor formación"],
  ["Más tecnología", "más innovación"],
  ["Más contenido", "más aprendizaje"],
];
const cardW = (leftW - 14) / 2;
const cardH = 92;
const gridTop = lowY + 18;
tensions.forEach((t, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = M + col * (cardW + 14);
  const y = gridTop + row * (cardH + 14);
  doc.save().lineWidth(1).strokeColor(LINE).fillColor(WHITE).roundedRect(x, y, cardW, cardH, 5).fillAndStroke(WHITE, LINE).restore();
  doc.save().fillColor(CYAN).rect(x, y, 3, cardH).fill().restore();
  neq(x + 30, y + cardH / 2, 22, CYAN);
  doc.font("Helvetica-Bold").fontSize(11.5).fillColor(INK);
  doc.text(t[0], x + 56, y + cardH / 2 - 16, { width: cardW - 68, lineBreak: false });
  doc.font("Helvetica").fontSize(11.5).fillColor(GRAY);
  doc.text(t[1], x + 56, y + cardH / 2 + 2, { width: cardW - 68, lineBreak: false });
});

// Radar de capacidades
eyebrow("Capacidades: tradicionales › emergentes", rightX, lowY, CYAND, 8);
const radAxes = [
  "Supervisión de IA",
  "Lectura crítica asistida",
  "Automatización jurídica",
  "Evaluación metacognitiva",
  "Prototipado legaltech",
];
const radCx = rightX + rightW / 2 - 6;
const radCy = lowY + 108;
radar(radCx, radCy, 66, radAxes, [
  { values: [0.28, 0.32, 0.22, 0.2, 0.16], stroke: GRAY, fill: GRAY, opacity: 0.1, weight: 1.2 },
  { values: [0.9, 0.86, 0.82, 0.84, 0.8], stroke: CYAN, fill: CYAN, opacity: 0.16, weight: 1.8 },
]);
// leyenda
const legY = lowY + 196;
doc.save().fillColor(GRAY).rect(rightX, legY, 14, 4).fill().restore();
doc.font("Helvetica").fontSize(8).fillColor(GRAY).text("Perfil tradicional", rightX + 20, legY - 3, { lineBreak: false });
doc.save().fillColor(CYAN).rect(rightX + 120, legY, 14, 4).fill().restore();
doc.font("Helvetica").fontSize(8).fillColor(CYAND).text("Perfil 2030", rightX + 140, legY - 3, { lineBreak: false });
doc.font("Helvetica").fontSize(7.3).fillColor(MUTE);
doc.text(
  "Capacidades tradicionales: memorización normativa · lectura doctrinal · argumentación clásica · evaluación escrita.",
  rightX,
  legY + 14,
  { width: rightW, lineGap: 1.5 },
);

footer();

/* ===========================================================================
 * PÁGINA 2 — Oportunidades institucionales
 * ========================================================================= */
doc.addPage();
header(2, "Oportunidades institucionales");

const topY = M + 112;
const colGap2 = 34;
const matrixW = 348;
const tableX = M + matrixW + colGap2;
const tableW = CW - matrixW - colGap2;

// — Matriz 2×2 de priorización —
eyebrow("Matriz de priorización", M, topY, CYAND, 8);
const plotX = M + 30;
const plotY = topY + 24;
const plotW = matrixW - 30;
const plotH = 300;
// marco
doc.save().lineWidth(1).strokeColor(LINE).rect(plotX, plotY, plotW, plotH).stroke().restore();
// líneas medias (cuadrantes)
doc.save().lineWidth(0.8).strokeColor(LINE).dash(3, { space: 3 });
doc.moveTo(plotX + plotW / 2, plotY).lineTo(plotX + plotW / 2, plotY + plotH).stroke();
doc.moveTo(plotX, plotY + plotH / 2).lineTo(plotX + plotW, plotY + plotH / 2).stroke();
doc.undash().restore();
// ejes (flechas)
doc.save().lineWidth(1.2).strokeColor(INK);
doc.moveTo(plotX, plotY + plotH).lineTo(plotX + plotW, plotY + plotH).stroke(); // X
doc.moveTo(plotX, plotY + plotH).lineTo(plotX, plotY).stroke(); // Y
doc.restore();
arrowHead(plotX + plotW, plotY + plotH, "r", INK, 4);
arrowHead(plotX, plotY, "u", INK, 4);
// etiquetas de eje
doc.font("Courier-Bold").fontSize(7.5).fillColor(GRAY);
doc.text("IMPACTO INSTITUCIONAL", plotX, plotY + plotH + 9, { width: plotW, align: "center", characterSpacing: 1 });
doc.save();
doc.rotate(-90, { origin: [plotX - 14, plotY + plotH / 2] });
doc.text("FACILIDAD DE IMPLEMENTACIÓN", plotX - 14 - 75, plotY + plotH / 2 - 4, {
  width: 150,
  align: "center",
  characterSpacing: 1,
});
doc.restore();
// micro-rótulos de cuadrante
doc.font("Courier").fontSize(6.3).fillColor(MUTE);
doc.text("GANANCIAS RÁPIDAS", plotX + 6, plotY + 6, { lineBreak: false });
doc.text("PRIORIDAD ALTA", plotX + plotW / 2 + 6, plotY + 6, { lineBreak: false });
doc.text("APUESTAS ESTRATÉGICAS", plotX + plotW / 2 + 6, plotY + plotH - 14, { lineBreak: false });

// iniciativas {label, x(impacto), y(facilidad), dx, dy, align}
const inits = [
  { l: "Talleres de IA aplicada", x: 0.7, y: 0.85, dx: 0, dy: -15, a: "center" },
  { l: "Charlas Thomson Reuters / CoCounsel", x: 0.46, y: 0.9, dx: -7, dy: -4, a: "right" },
  { l: "Innovación docente", x: 0.6, y: 0.62, dx: 8, dy: 4, a: "left" },
  { l: "Plataforma de comprensión lectora", x: 0.82, y: 0.46, dx: -7, dy: 5, a: "right" },
  { l: "Vinculación con industria legal", x: 0.88, y: 0.64, dx: -7, dy: -28, a: "right" },
  { l: "Investigación en lenguaje claro", x: 0.5, y: 0.4, dx: -7, dy: 3, a: "right" },
  { l: "Laboratorio de prototipos jurídicos", x: 0.87, y: 0.26, dx: -7, dy: 7, a: "right" },
];
inits.forEach((it) => {
  const px = plotX + it.x * plotW;
  const py = plotY + plotH - it.y * plotH;
  doc.save().fillColor(CYAN).circle(px, py, 4).fill();
  doc.fillColor(WHITE).circle(px, py, 1.6).fill().restore();
  doc.font("Helvetica-Bold").fontSize(7.3).fillColor(INK);
  if (it.a === "left") doc.text(it.l, px + 8, py + it.dy, { width: 95, align: "left", lineGap: 0.5 });
  else if (it.a === "right") doc.text(it.l, px - 7 - 95, py + it.dy, { width: 95, align: "right", lineGap: 0.5 });
  else doc.text(it.l, px - 55, py + it.dy, { width: 110, align: "center", lineGap: 0.5 });
});

// — Tabla: capacidades en desarrollo —
eyebrow("Capacidades actualmente en desarrollo", tableX, topY, CYAND, 8);
const rows = [
  ["IA aplicada al Derecho", "Capacitación profesional y formación estudiantil"],
  ["Prompt engineering", "Automatización de tareas jurídicas"],
  ["Desarrollo de prototipos", "Innovación docente y legaltech"],
  ["Lenguaje claro", "Evaluación, comprensión y comunicación jurídica"],
  ["Investigación aplicada", "Publicaciones, proyectos y evidencia empírica"],
  ["Vinculación profesional", "Puentes con estudios, empresas y tecnología legal"],
];
const tY = topY + 22;
const c1 = 132;
const rowH = 32;
const headH = 22;
// encabezado
doc.save().fillColor(CYANPALE).rect(tableX, tY, tableW, headH).fill().restore();
doc.font("Helvetica-Bold").fontSize(8).fillColor(CYAND);
doc.text("CAPACIDAD", tableX + 8, tY + 7, { width: c1 - 12, characterSpacing: 0.6, lineBreak: false });
doc.text("APLICACIÓN INSTITUCIONAL", tableX + c1 + 8, tY + 7, { characterSpacing: 0.6, lineBreak: false });
// filas
rows.forEach((rw, i) => {
  const y = tY + headH + i * rowH;
  if (i % 2 === 1) doc.save().fillColor(PALE).rect(tableX, y, tableW, rowH).fill().restore();
  doc.save().lineWidth(0.6).strokeColor(LINE).moveTo(tableX, y).lineTo(tableX + tableW, y).stroke().restore();
  doc.font("Helvetica-Bold").fontSize(8.6).fillColor(INK);
  doc.text(rw[0], tableX + 8, y + rowH / 2 - 9, { width: c1 - 12, lineGap: 0.5 });
  doc.font("Helvetica").fontSize(8.6).fillColor(GRAY);
  doc.text(rw[1], tableX + c1 + 8, y + rowH / 2 - 9, { width: tableW - c1 - 16, lineGap: 0.5 });
});
const tableBottom = tY + headH + rows.length * rowH;
doc.save().lineWidth(0.8).strokeColor(LINE).rect(tableX, tY, tableW, headH + rows.length * rowH).stroke().restore();
doc.save().lineWidth(0.8).strokeColor(LINE).moveTo(tableX + c1, tY).lineTo(tableX + c1, tableBottom).stroke().restore();

// — Pregunta estratégica de cierre —
const cqY = tableBottom + 26;
const cqH = 86;
doc.save().fillColor(CYANPALE).rect(tableX, cqY, tableW, cqH).fill().restore();
doc.save().fillColor(CYAN).rect(tableX, cqY, 4, cqH).fill().restore();
eyebrow("Pregunta estratégica", tableX + 18, cqY + 12, CYAND, 7.5);
doc.font("Helvetica-BoldOblique").fontSize(13.5).fillColor(INK);
doc.text(
  "¿Qué capacidades debería desarrollar hoy una Escuela de Derecho para seguir siendo referente en 2030?",
  tableX + 18,
  cqY + 27,
  { width: tableW - 36, lineGap: 2 },
);

footer();

doc.end();

// Copia para descarga web (Next la sirve desde /public en la raíz del sitio).
stream.on("finish", () => {
  const publicDir = path.join(__dirname, "..", "public");
  fs.mkdirSync(publicDir, { recursive: true });
  const publicFile = path.join(publicDir, path.basename(outFile));
  fs.copyFileSync(outFile, publicFile);
  console.log("✓ PDF generado en:", path.relative(process.cwd(), outFile));
  console.log("✓ Copia descargable en:", path.relative(process.cwd(), publicFile));
});
