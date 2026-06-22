// ─────────────────────────────────────────────────────────────────────────────
// CONTENIDO ESTRATÉGICO · diagnóstico, modelos, optativo, protocolo,
// integración, tensiones, escenarios, modo director y resumen ejecutivo.
// Todo el discurso vive aquí: editar este archivo cambia el cuerpo del informe.
// ─────────────────────────────────────────────────────────────────────────────

// ── Tesis y frases clave ─────────────────────────────────────────────────────

export const keyPhrases = [
  "La PUCV no parte desde cero. Parte desde una base fragmentada.",
  "La brecha no es de interés. Es de institucionalización.",
  "El riesgo no es la ausencia de iniciativas. El riesgo es que permanezcan desconectadas.",
  "DIAT puede pasar de puente operativo a plataforma institucional.",
  "El abogado joven ya no compite solo por saber derecho. Compite por saber convertir criterio jurídico en sistemas de trabajo aumentados.",
  "La pregunta ya no es si la Escuela debe enseñar IA. La pregunta es si formará abogados capaces de dirigir sistemas jurídicos aumentados.",
  "La ventana estratégica todavía está abierta, pero no permanecerá abierta indefinidamente.",
  "Una Escuela de Derecho no necesita adoptar IA con prisa. Necesita adoptarla con método.",
];

export const thesis =
  "La PUCV no parte desde cero. Parte desde una base fragmentada. Hoy existen DIAT, Innova Day, Legal Management Program, talleres y vínculos relevantes. El desafío no es crear nuevas iniciativas aisladas, sino articular una arquitectura institucional capaz de transformar interés disperso en capacidades permanentes. La decisión estratégica no es iniciar una agenda de IA, sino darle forma institucional, continuidad formativa, profundidad académica y capacidad de investigación.";

// ── Estudiante tradicional vs. aumentado ─────────────────────────────────────

export const studentComparison = {
  traditional: { label: "Estudiante tradicional", skills: ["Lee.", "Resume.", "Escribe."] },
  augmented: {
    label: "Estudiante aumentado",
    skills: [
      "Verifica.",
      "Diseña workflows.",
      "Construye prototipos.",
      "Supervisa IA.",
      "Integra fuentes.",
    ],
  },
};

// ── PUCV: activos y brechas ──────────────────────────────────────────────────

export const diagnosis = {
  assets: [
    "DIAT · Derecho, IA y Tecnología.",
    "Innova Day.",
    "Legal Management Program.",
    "Taller de Prompting Jurídico.",
    "Relación con Thomson Reuters.",
    "Experiencia en innovación legal.",
    "Capacidad de convocatoria.",
    "Prestigio institucional.",
  ],
  gaps: [
    "Sin optativo estable de IA jurídica.",
    "Sin línea formativa de pregrado.",
    "Sin investigación consolidada.",
    "Sin protocolo institucional de IA.",
    "Sin uso interno estable.",
    "Sin trayectoria clara para ayudantes.",
    "Participación estudiantil demasiado operativa.",
    "Poca profesionalización en apps, workflows y agentes.",
  ],
};

// ── El límite del modelo puente ──────────────────────────────────────────────

export const bridgeModel = {
  intro:
    "Innova Day y Legal Management Program son activos relevantes para vinculación, compliance, innovación legal y relación con la industria. Pero no sustituyen una estrategia integral de Escuela. Si DIAT queda reducido a puente operativo de esos espacios, la Escuela obtiene visibilidad, pero no necesariamente capacidad formativa, investigación propia ni profesionalización estudiantil.",
  bridge: {
    label: "Modelo puente",
    items: ["Eventos", "Apoyo operativo", "Vinculación", "Compliance", "Formación continua", "Visibilidad"],
  },
  platform: {
    label: "Modelo plataforma",
    items: [
      "Pregrado",
      "Optativo",
      "Ayudantes",
      "Apps",
      "Tesis",
      "Investigación",
      "Protocolos",
      "Uso interno",
      "Alianzas",
      "Portafolio estudiantil",
    ],
  },
};

// ── De programa-evento a plataforma institucional ────────────────────────────

export const platformTransition = {
  current: {
    label: "DIAT actual",
    sub: "Programa-evento",
    items: [
      "Talleres.",
      "Apoyo a eventos.",
      "Actividades puntuales.",
      "Dependencia de personas.",
      "Baja continuidad formativa.",
    ],
  },
  future: {
    label: "DIAT 2030",
    sub: "Plataforma institucional",
    items: [
      "Plataforma permanente.",
      "Formación de ayudantes.",
      "Laboratorio de prototipos.",
      "Optativo estable.",
      "Investigación aplicada.",
      "Repositorio de apps jurídicas.",
      "Protocolo IA Escuela.",
      "Integración curricular.",
      "Red con estudios jurídicos.",
    ],
  },
};

// ── Tensiones institucionales ────────────────────────────────────────────────

export interface Tension {
  n: string;
  title: string;
  a: string;
  b: string;
}

export const tensions: Tension[] = [
  { n: "01", title: "Vinculación vs. formación", a: "Muchos eventos.", b: "Poca trayectoria." },
  { n: "02", title: "Innovación vs. institucionalización", a: "Muchas iniciativas.", b: "Poca integración curricular." },
  { n: "03", title: "Interés estudiantil vs. oportunidades", a: "Alta demanda.", b: "Pocas rutas formales." },
  { n: "04", title: "Capacidad individual vs. capacidad institucional", a: "Muchos esfuerzos personales.", b: "Poca estructura permanente." },
];

// ── Optativo propuesto ───────────────────────────────────────────────────────

export const optativeCourse = {
  name: "Derecho, Inteligencia Artificial y Práctica Jurídica Aumentada",
  description:
    "Curso optativo de pregrado orientado a formar estudiantes capaces de comprender, usar, verificar y diseñar herramientas de IA aplicadas al trabajo jurídico contemporáneo.",
  units: [
    "IA y transformación de la profesión jurídica.",
    "Prompting jurídico y verificación.",
    "Claude, ChatGPT, Gemini y NotebookLM.",
    "Codex, vibe coding y creación de apps jurídicas.",
    "Agentes jurídicos, Skills y workflows.",
    "Protección de datos, confidencialidad y ética.",
    "Diseño de prototipo final.",
  ],
  assessments: [
    "Bitácora de uso.",
    "Análisis crítico.",
    "Diseño de workflow.",
    "Prototipo final.",
    "Presentación pública.",
  ],
};

// ── Protocolo mínimo de IA ───────────────────────────────────────────────────

export const aiProtocol = {
  intro:
    "Un protocolo prudente, breve y de carácter institucional. No prohíbe: ordena. Compatible con la exigencia de rigor, fuentes y responsabilidad propia de una dirección constitucionalista.",
  principles: [
    { t: "Transparencia", d: "Declarar cuándo y cómo se usó IA en un trabajo." },
    { t: "Trazabilidad", d: "Toda salida relevante se puede reconstruir y auditar." },
    { t: "Supervisión humana", d: "La IA asiste; la persona decide y responde." },
    { t: "Datos sensibles", d: "Prohibición de ingresar datos personales o confidenciales sin resguardo." },
    { t: "Cita y declaración de uso", d: "El uso de IA se cita o declara según el contexto académico." },
    { t: "Apoyo, no sustitución", d: "Distinción clara entre apoyo y sustitución del razonamiento jurídico." },
    { t: "Reglas para evaluaciones", d: "Marco explícito sobre qué se permite en cada evaluación." },
    { t: "Reglas para docentes", d: "Lineamientos de uso responsable en docencia." },
    { t: "Reglas para investigación", d: "Estándares de integridad en producción académica." },
    { t: "Reglas para ayudantes", d: "Buenas prácticas y supervisión en la ayudantía." },
    { t: "Revisión anual", d: "El protocolo se actualiza cada año conforme evoluciona la tecnología." },
  ],
};

// ── Integración transversal ──────────────────────────────────────────────────

export interface IntegrationCourse {
  course: string;
  example: string;
}

export const transversalIntegration: IntegrationCourse[] = [
  { course: "Introducción al Derecho", example: "Verificación de alucinaciones sobre conceptos y fuentes." },
  { course: "Derecho Constitucional", example: "Matriz de argumentos a favor y en contra de una tesis." },
  { course: "Derecho Civil", example: "Análisis de sentencia con contraste de fuentes primarias." },
  { course: "Derecho Procesal", example: "Redacción supervisada de escritos con control de criterio." },
  { course: "Metodología de la investigación jurídica", example: "Comparación de fuentes y construcción de estado del arte." },
  { course: "Clínicas jurídicas", example: "Revisión documental asistida y matriz de riesgo." },
  { course: "Ética profesional", example: "Discusión sobre límites, responsabilidad y uso debido de IA." },
  { course: "Talleres de escritura jurídica", example: "Lenguaje claro y reescritura supervisada." },
  { course: "Derecho Administrativo", example: "Análisis comparado de actos y procedimientos." },
  { course: "Protección de datos", example: "Casos sobre la Ley 21.719 y tratamiento responsable." },
];

export const integrationNote =
  "Incorporar IA sin reforma radical de la malla: como complemento en cursos existentes — ejercicios, materiales y evaluación asistida — no como un apéndice aislado.";

// ── Modo Escenarios (panel de proyección) ────────────────────────────────────

export interface Scenario {
  id: number;
  name: string;
  desc: string;
  /** índice proyectado al 2030 (escala benchmark, máx ≈ 12) */
  projected: number;
  benchmark: string;
  bars: { Pregrado: number; Investigacion: number; UsoInterno: number; Vinculacion: number; Empleabilidad: number };
  risks: string[];
  opportunities: string[];
}

export const scenarios: Scenario[] = [
  {
    id: 0,
    name: "Mantener estado actual",
    desc: "Sostener el taller y los eventos. Observar sin comprometer estructura permanente.",
    projected: 3.2,
    benchmark: "Se mantiene en el último lugar del benchmark nacional.",
    bars: { Pregrado: 5, Investigacion: 5, UsoInterno: 5, Vinculacion: 65, Empleabilidad: 30 },
    risks: [
      "La brecha con PUC, U. de Chile y privadas se amplía.",
      "El talento estudiantil se forma fuera de la Escuela o se desgasta.",
      "Otra universidad captura el rol de referente regional.",
    ],
    opportunities: ["Cero costo inmediato.", "Sin fricción institucional en el corto plazo."],
  },
  {
    id: 1,
    name: "Transformación gradual",
    desc: "Protocolo, optativo, formación de ayudantes e integración en ramos clave.",
    projected: 9,
    benchmark: "Avanza al grupo medio-alto del benchmark, sobre varias privadas.",
    bars: { Pregrado: 65, Investigacion: 55, UsoInterno: 60, Vinculacion: 80, Empleabilidad: 78 },
    risks: ["Requiere consenso de claustro para tocar la malla.", "Demanda continuidad y coordinación sostenida."],
    opportunities: [
      "Perfil de egreso contemporáneo y empleabilidad diferenciada.",
      "Activos existentes conectados en una arquitectura formativa.",
      "Bajo costo relativo, alta señal institucional.",
    ],
  },
  {
    id: 2,
    name: "Liderazgo regional",
    desc: "Centro, observatorio, investigación propia y apps institucionales en paralelo.",
    projected: 11.5,
    benchmark: "Disputa el liderazgo nacional y proyecta presencia regional.",
    bars: { Pregrado: 90, Investigacion: 92, UsoInterno: 88, Vinculacion: 92, Empleabilidad: 90 },
    risks: ["Mayor exigencia de financiamiento y coordinación.", "Necesita masa crítica académica y gobernanza."],
    opportunities: [
      "PUCV define la agenda académica del campo.",
      "Voz citable en política pública y regulación.",
      "Atracción de talento, inversión y convenios.",
    ],
  },
];

export const scenarioBarLabels: Record<string, string> = {
  Pregrado: "Pregrado",
  Investigacion: "Investigación",
  UsoInterno: "Uso interno de IA",
  Vinculacion: "Vinculación",
  Empleabilidad: "Empleabilidad de egresados",
};

// ── Modo Director · ¿Qué pasa si no hacemos nada? ────────────────────────────

export const directorRisks = [
  { t: "Riesgo competitivo", d: "Las escuelas que integran IA en pregrado e investigación abren una distancia difícil de recuperar." },
  { t: "Riesgo reputacional", d: "Ausencia en el debate que define el futuro de la profesión y la regulación." },
  { t: "Riesgo de matrícula", d: "El perfil de egreso pierde atractivo frente a ofertas que sí forman en IA jurídica." },
  { t: "Riesgo de empleabilidad", d: "Egresados sin competencias que el ejercicio profesional ya da por supuestas." },
];

// ── Resumen ejecutivo · decisión estratégica sugerida ────────────────────────

export const executiveSummary = {
  title: "Decisión estratégica sugerida",
  points: [
    "No abandonar lo existente.",
    "No reducir DIAT a soporte operativo.",
    "Convertir DIAT en plataforma institucional.",
    "Crear un optativo de IA jurídica.",
    "Profesionalizar a los ayudantes.",
    "Adoptar un protocolo mínimo.",
    "Integrar IA en los ramos.",
    "Desarrollar apps y prototipos.",
    "Crear una línea de investigación.",
    "Medir el avance con un benchmark anual.",
  ],
  closingIdea:
    "La Escuela ya posee varios de los componentes necesarios. El desafío no es crear nuevas iniciativas aisladas, sino articular una arquitectura institucional capaz de transformar interés disperso en capacidades permanentes.",
};
