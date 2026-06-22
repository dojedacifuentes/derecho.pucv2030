// ─────────────────────────────────────────────────────────────────────────────
// PLAN 2026–2030 · Hoja de ruta institucional
// La secuencia importa: cimientos → integración → investigación → expansión → liderazgo.
// ─────────────────────────────────────────────────────────────────────────────

export interface RoadmapItem {
  k: string;
  v: string;
}

export interface RoadmapYear {
  year: string;
  phase: string;
  lead?: boolean;
  items: RoadmapItem[];
}

export const roadmap: RoadmapYear[] = [
  {
    year: "2026",
    phase: "Cimientos",
    lead: true,
    items: [
      { k: "Protocolo", v: "Protocolo mínimo de uso de IA para la Escuela." },
      { k: "Formación", v: "Optativo piloto y primera cohorte de ayudantes formados." },
      { k: "Medición", v: "Panel de benchmark nacional como línea base." },
      { k: "Repositorio", v: "Repositorio inicial de prompts, workflows y casos." },
    ],
  },
  {
    year: "2027",
    phase: "Integración",
    items: [
      { k: "Laboratorio", v: "Laboratorio de apps jurídicas y prototipos." },
      { k: "Currículo", v: "Integración de IA en 3 ramos de la malla." },
      { k: "Alianza", v: "Convenio con estudios jurídicos." },
      { k: "Portafolio", v: "Portafolio de ayudantes y seminario anual." },
    ],
  },
  {
    year: "2028",
    phase: "Investigación",
    items: [
      { k: "Observatorio", v: "Observatorio PUCV de Derecho, IA y Profesión Jurídica." },
      { k: "Tesis", v: "Primeras tesis dirigidas y papers." },
      { k: "Prototipos", v: "Prototipos internos en uso." },
      { k: "Docencia", v: "Uso docente de IA con protocolo consolidado." },
    ],
  },
  {
    year: "2029",
    phase: "Expansión",
    items: [
      { k: "Programa", v: "Diplomado o minor en Derecho e IA." },
      { k: "Red", v: "Red nacional de escuelas y gremios." },
      { k: "Publicación", v: "Publicación anual de investigación." },
      { k: "Clínica", v: "Clínica jurídica aumentada en operación." },
    ],
  },
  {
    year: "2030",
    phase: "Liderazgo",
    items: [
      { k: "Posición", v: "PUCV como referente nacional en Derecho, IA y Tecnología." },
      { k: "Agenda", v: "Define la agenda académica del campo." },
      { k: "Cuerpo", v: "Cuerpo de investigación citable y reconocido." },
      { k: "Talento", v: "Atracción de talento, inversión y convenios renovados." },
    ],
  },
];

// ── Panel de proyección · índice de posicionamiento (escala benchmark, máx ≈ 12) ──

export interface ProjectionPoint {
  label: string;
  inertia: number;
  roadmap: number;
}

export const projection: ProjectionPoint[] = [
  { label: "2026", inertia: 2.5, roadmap: 2.5 },
  { label: "2027", inertia: 2.7, roadmap: 6.5 },
  { label: "2028", inertia: 2.9, roadmap: 9 },
  { label: "2030", inertia: 3.2, roadmap: 11 },
];

export const projectionMilestones = [
  { k: "PUCV actual", v: "2,5", accent: false },
  { k: "Meta 2027", v: "6,5", accent: false },
  { k: "Meta 2028", v: "9,0", accent: false },
  { k: "Meta 2030", v: "11+", accent: true },
];

export const projectionLevers = [
  "Optativo",
  "Protocolo",
  "Formación de ayudantes",
  "Investigación",
  "Apps jurídicas",
  "Uso interno de IA",
  "Alianzas",
];
