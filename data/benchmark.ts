// ─────────────────────────────────────────────────────────────────────────────
// BENCHMARK NACIONAL · Universidades chilenas en Derecho e IA
// Fuente: investigación interna comparada (ver /data/sources.ts).
// Editar aquí actualiza el ranking y el desglose PUCV en toda la app.
// ─────────────────────────────────────────────────────────────────────────────

export interface University {
  id: string;
  name: string;
  short: string;
  score: number;
  /** true para destacar a la PUCV en el gráfico */
  highlight?: boolean;
}

/** Puntaje máximo teórico del índice (5 dimensiones × 2,4 aprox.) usado para escalar barras. */
export const BENCHMARK_MAX = 12;

/** Ranking ordenado de mayor a menor. */
export const universities: University[] = [
  { id: "puc", name: "Pontificia Universidad Católica de Chile", short: "PUC", score: 12 },
  { id: "uch", name: "Universidad de Chile", short: "U. de Chile", score: 10 },
  { id: "unab", name: "Universidad Andrés Bello", short: "UNAB", score: 8.75 },
  { id: "ucen", name: "Universidad Central", short: "U. Central", score: 8.5 },
  { id: "udp", name: "Universidad Diego Portales", short: "UDP", score: 7.75 },
  { id: "uai", name: "Universidad Adolfo Ibáñez", short: "UAI", score: 6.25 },
  { id: "uautonoma", name: "Universidad Autónoma de Chile", short: "U. Autónoma", score: 5.5 },
  { id: "udd", name: "Universidad del Desarrollo", short: "UDD", score: 4.25 },
  { id: "pucv", name: "Pontificia Universidad Católica de Valparaíso", short: "PUCV", score: 2.5, highlight: true },
];

export interface BenchmarkDimension {
  id: string;
  label: string;
  /** Puntaje PUCV en la dimensión */
  score: number;
  /** Puntaje máximo por dimensión (referencial) */
  max: number;
  note: string;
}

/** Desglose del puntaje PUCV por dimensión. Total = 2,5. */
export const pucvBreakdown: BenchmarkDimension[] = [
  { id: "pregrado", label: "Pregrado", score: 0, max: 2.4, note: "Sin línea formativa estable de IA jurídica en la malla." },
  { id: "formacion", label: "Formación continua", score: 0.5, max: 2.4, note: "Talleres y actividades puntuales, sin trayectoria certificada." },
  { id: "investigacion", label: "Investigación", score: 0, max: 2.4, note: "Sin producción consolidada reportada en Derecho + IA." },
  { id: "vinculacion", label: "Vinculación con el medio", score: 1.75, max: 2.4, note: "Activo visible: DIAT, Innova Day, LMP, alianzas con la industria." },
  { id: "uso_interno", label: "Uso interno institucional de IA", score: 0, max: 2.4, note: "Sin protocolo ni uso estable en gestión y docencia." },
];

export const PUCV_TOTAL = 2.5;

/** Lectura estratégica que acompaña al gráfico. */
export const benchmarkReading = {
  headline: "La brecha no es de interés. Es de institucionalización.",
  body:
    "La PUCV aparece con actividad relevante en vinculación, pero sin desarrollo reportado en tres dimensiones críticas: pregrado, investigación y uso interno institucional de IA. No es un diagnóstico de fracaso: es la fotografía de activos reales que aún no se han conectado en una arquitectura formativa.",
};
