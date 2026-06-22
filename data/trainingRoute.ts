// ─────────────────────────────────────────────────────────────────────────────
// RUTA DE PROFESIONALIZACIÓN DIAT · 7 niveles
// De la alfabetización en IA jurídica al producto institucional.
// ─────────────────────────────────────────────────────────────────────────────

export interface TrainingLevel {
  level: number;
  title: string;
  objective: string;
  evidence: string;
  deliverable: string;
  mentorship: string;
}

export const trainingRoute: TrainingLevel[] = [
  {
    level: 1,
    title: "Alfabetización en IA jurídica",
    objective: "Comprender qué es y qué no es la IA generativa aplicada al Derecho, y por qué cambia el trabajo profesional.",
    evidence: "Diagnóstico inicial y mapa de usos posibles en una tarea jurídica real.",
    deliverable: "Bitácora de alfabetización.",
    mentorship: "Inducción grupal.",
  },
  {
    level: 2,
    title: "Prompting jurídico verificable",
    objective: "Formular instrucciones precisas y, sobre todo, verificar toda salida contra la fuente primaria.",
    evidence: "Caso resuelto con trazabilidad de fuentes y detección de alucinaciones.",
    deliverable: "Plantilla de verificación jurídica.",
    mentorship: "Revisión por pares.",
  },
  {
    level: 3,
    title: "Uso profesional de Claude, ChatGPT, Gemini y NotebookLM",
    objective: "Elegir la herramienta adecuada para cada tarea y combinar fuentes con criterio jurídico.",
    evidence: "Comparativa de herramientas sobre un mismo problema, con justificación.",
    deliverable: "Workflow documentado multi-herramienta.",
    mentorship: "Mentoría de ayudante avanzado.",
  },
  {
    level: 4,
    title: "Codex, vibe coding y creación de prototipos",
    objective: "Construir prototipos y pequeñas apps jurídicas sin ser programador, supervisando el código generado.",
    evidence: "Prototipo funcional resolviendo una necesidad jurídica concreta.",
    deliverable: "App o prototipo desplegable.",
    mentorship: "Mentoría técnica.",
  },
  {
    level: 5,
    title: "Workflows, agentes, Skills y MCP",
    objective: "Diseñar sistemas: orquestar pasos, herramientas y agentes con supervisión humana.",
    evidence: "Workflow agentivo que automatiza un proceso jurídico con puntos de control.",
    deliverable: "Sistema documentado y reproducible.",
    mentorship: "Mentoría de diseño de sistemas.",
  },
  {
    level: 6,
    title: "Proyecto aplicado",
    objective: "Llevar lo aprendido a un contexto real: estudio jurídico, clínica, curso o profesor.",
    evidence: "Proyecto implementado y evaluado por un actor real.",
    deliverable: "Informe de proyecto + producto entregado.",
    mentorship: "Mentoría académica o profesional.",
  },
  {
    level: 7,
    title: "Tesis, paper, app institucional o producto de vinculación",
    objective: "Producir conocimiento o herramientas de valor institucional duradero.",
    evidence: "Obra publicada, defendida o adoptada por la Escuela.",
    deliverable: "Tesis, paper, app institucional o producto de vinculación.",
    mentorship: "Dirección académica.",
  },
];

/** Principio que rige la ayudantía formativa. */
export const trainingPrinciple = {
  headline: "Si la ayudantía no es remunerada, debe generar valor verificable.",
  values: [
    "Formación",
    "Retroalimentación",
    "Certificación",
    "Portafolio",
    "Participación en proyectos reales",
    "Oportunidades profesionales",
  ],
};
