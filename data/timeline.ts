// ─────────────────────────────────────────────────────────────────────────────
// LÍNEA TEMPORAL · 2023–2030 · La aceleración del trabajo jurídico aumentado
// Tres conjuntos de datos:
//   1. adoptionTimeline → curva de adopción de IA en la profesión (ABA / Clio).
//   2. paradigmTimeline → evolución del paradigma de IA jurídica (2023→2030).
//   3. paradigmShift   → el cambio Persona → Sistema → IA → Herramientas.
// ─────────────────────────────────────────────────────────────────────────────

export interface AdoptionPoint {
  year: string;
  /** Punto de adopción principal (0–100). null si el año es cualitativo. */
  value: number | null;
  title: string;
  body: string;
  source: string;
  /** "real" = dato observado · "proj" = proyección */
  kind: "real" | "proj";
}

export const adoptionTimeline: AdoptionPoint[] = [
  {
    year: "2023",
    value: 11,
    title: "La IA generativa entra en la práctica",
    body: "11% de abogados o firmas reportan uso de herramientas de IA. La tecnología deja de ser experimental.",
    source: "ABA · Artificial Intelligence TechReport",
    kind: "real",
  },
  {
    year: "2024",
    value: 30,
    title: "La adopción casi se triplica",
    body: "30% de adopción general; 46% en firmas de 100+ abogados. En un solo año, el uso pasa de marginal a esperable.",
    source: "ABA · 2024 TechReport",
    kind: "real",
  },
  {
    year: "2025",
    value: 55,
    title: "La IA se vuelve mainstream",
    body: "Las firmas con adopción amplia son casi 3× más propensas a reportar crecimiento de ingresos; el 77% lo atribuye a mejoras operativas: generación documental, automatización de workflows, comunicación con clientes.",
    source: "Clio · 2025 Legal Trends Report",
    kind: "real",
  },
  {
    year: "2026",
    value: 72,
    title: "De usar IA a diseñar sistemas",
    body: "La discusión ya no es “usar IA”, sino diseñar sistemas jurídicos aumentados: Claude, Codex, agentes, Skills, MCP, workflows, revisión contractual y matrices de riesgo.",
    source: "Síntesis de mercado · 2026",
    kind: "real",
  },
  {
    year: "2027",
    value: 82,
    title: "Competencia profesional básica",
    body: "La IA jurídica deja de ser ventaja y pasa a ser piso. Estudios medianos y boutiques la adoptan para competir con equipos más grandes.",
    source: "Proyección sectorial",
    kind: "proj",
  },
  {
    year: "2028",
    value: 88,
    title: "Saber verificar, auditar, diseñar",
    body: "Los abogados jóvenes deben operar flujos asistidos, no solo redactar. La diferencia competitiva es saber verificar, auditar y diseñar procesos.",
    source: "Proyección sectorial",
    kind: "proj",
  },
  {
    year: "2029",
    value: 93,
    title: "Perfiles híbridos",
    body: "Los estudios exigen perfiles híbridos: abogado, investigador, operador de IA, diseñador de workflows, gestor de datos y constructor de prototipos.",
    source: "Proyección sectorial",
    kind: "proj",
  },
  {
    year: "2030",
    value: 97,
    title: "Ventana estratégica cerrada para quien no actuó",
    body: "Las escuelas que no integraron IA en pregrado, investigación y uso interno habrán perdido la ventana. Quienes actuaron con método definen el campo.",
    source: "Proyección sectorial",
    kind: "proj",
  },
];

export interface ParadigmStage {
  year: string;
  label: string;
  detail: string;
}

/** Evolución del paradigma de IA jurídica — más poderosa que listar herramientas. */
export const paradigmTimeline: ParadigmStage[] = [
  { year: "2023", label: "Chatbots", detail: "Conversación de propósito general. Persona pregunta, IA responde." },
  { year: "2024", label: "Asistentes especializados", detail: "Herramientas verticales y dominios acotados." },
  { year: "2025", label: "Skills y proyectos persistentes", detail: "Memoria, contexto y conocimiento que se acumula entre sesiones." },
  { year: "2026", label: "Agentes y workflows", detail: "La IA ejecuta secuencias, usa herramientas y opera procesos completos." },
  { year: "2027", label: "Equipos jurídicos aumentados", detail: "Personas y sistemas trabajan en conjunto, con supervisión humana." },
  { year: "2030", label: "Infraestructura jurídica inteligente", detail: "La IA como capa de base del trabajo legal, no como herramienta externa." },
];

export interface ShiftNode {
  label: string;
  role: string;
}

/** El cambio conceptual de fondo. */
export const paradigmShift = {
  before: { sequence: ["Persona", "IA"], note: "El modelo antiguo: una persona conversa con una herramienta." },
  after: {
    sequence: ["Persona", "Sistema", "IA", "Herramientas", "Resultado"] as string[],
    note: "El modelo nuevo: la persona diseña y supervisa un sistema que orquesta IA y herramientas hacia un resultado verificable.",
  },
  capabilities: [
    "Capacidad de verificación.",
    "Capacidad de diseñar workflows.",
    "Capacidad de construir sistemas.",
    "Capacidad de supervisar IA.",
    "Capacidad de integrar tecnología al razonamiento jurídico.",
  ],
};

export const accelerationQuote =
  "El abogado joven ya no compite solo por saber derecho. Compite por saber convertir criterio jurídico en sistemas de trabajo aumentados.";
