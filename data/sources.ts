// ─────────────────────────────────────────────────────────────────────────────
// FUENTES Y ENLACES
// Algunos enlaces son aproximados o placeholders (placeholder: true): verificar
// y corregir la URL antes de presentar. Editar este archivo actualiza la sección
// "Fuentes" y los créditos de datos.
// ─────────────────────────────────────────────────────────────────────────────

export interface Source {
  id: string;
  title: string;
  institution: string;
  year: string;
  url: string;
  category: "adopcion" | "academico" | "tecnologia" | "regulacion" | "interno";
  /** true si la URL debe verificarse / corregirse antes de presentar */
  placeholder?: boolean;
}

export const sources: Source[] = [
  // ── Adopción y mercado ──
  {
    id: "aba-2024",
    title: "Artificial Intelligence TechReport",
    institution: "American Bar Association (ABA)",
    year: "2024",
    url: "https://www.americanbar.org/groups/law_practice/resources/tech-report/",
    category: "adopcion",
  },
  {
    id: "clio-2025",
    title: "Legal Trends Report",
    institution: "Clio",
    year: "2025",
    url: "https://www.clio.com/resources/legal-trends/",
    category: "adopcion",
  },
  {
    id: "tr-future",
    title: "Future of Professionals Report",
    institution: "Thomson Reuters",
    year: "2025",
    url: "https://www.thomsonreuters.com/en/reports/future-of-professionals.html",
    category: "adopcion",
  },
  {
    id: "mckinsey",
    title: "IA generativa y la profesión legal",
    institution: "McKinsey & Company",
    year: "2024",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights",
    category: "adopcion",
    placeholder: true,
  },

  // ── Académico · centros de referencia ──
  {
    id: "stanford-codex",
    title: "CodeX · The Stanford Center for Legal Informatics",
    institution: "Stanford University",
    year: "—",
    url: "https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/",
    category: "academico",
  },
  {
    id: "puc-dct",
    title: "Derecho, Ciencia y Tecnología",
    institution: "Pontificia Universidad Católica de Chile",
    year: "—",
    url: "https://derecho.uc.cl/",
    category: "academico",
    placeholder: true,
  },
  {
    id: "uchile-cedts",
    title: "Centro de Estudios en Derecho, Tecnología y Sociedad",
    institution: "Universidad de Chile",
    year: "—",
    url: "https://derecho.uchile.cl/",
    category: "academico",
    placeholder: true,
  },
  {
    id: "uai-goblab",
    title: "GobLab",
    institution: "Universidad Adolfo Ibáñez",
    year: "—",
    url: "https://goblab.uai.cl/",
    category: "academico",
  },
  {
    id: "unab-legaltech",
    title: "Iniciativas de IA legal",
    institution: "Universidad Andrés Bello",
    year: "—",
    url: "https://www.unab.cl/",
    category: "academico",
    placeholder: true,
  },
  {
    id: "ucen-ilex",
    title: "LegalTech / ILex",
    institution: "Universidad Central",
    year: "—",
    url: "https://www.ucentral.cl/",
    category: "academico",
    placeholder: true,
  },

  // ── Tecnología ──
  {
    id: "anthropic",
    title: "Claude · Anthropic",
    institution: "Anthropic",
    year: "—",
    url: "https://www.anthropic.com/claude",
    category: "tecnologia",
  },
  {
    id: "openai-codex",
    title: "Codex",
    institution: "OpenAI",
    year: "—",
    url: "https://openai.com/",
    category: "tecnologia",
    placeholder: true,
  },

  // ── Regulación (Chile) ──
  {
    id: "ley-21719",
    title: "Ley 21.719 sobre protección de datos personales",
    institution: "Biblioteca del Congreso Nacional (BCN)",
    year: "2024",
    url: "https://www.bcn.cl/leychile/",
    category: "regulacion",
    placeholder: true,
  },
  {
    id: "proyecto-ia",
    title: "Proyecto de Ley de Inteligencia Artificial (Boletín 16.821-19)",
    institution: "Senado de Chile",
    year: "2024",
    url: "https://www.senado.cl/",
    category: "regulacion",
    placeholder: true,
  },

  // ── Internos ──
  {
    id: "diat",
    title: "Programa DIAT · Derecho, IA y Tecnología",
    institution: "Escuela de Derecho · PUCV",
    year: "2026",
    url: "#",
    category: "interno",
    placeholder: true,
  },
  {
    id: "informe-escuelas",
    title: "Informe sobre uso de IA en las Escuelas de Derecho",
    institution: "Documento interno",
    year: "2026",
    url: "#",
    category: "interno",
    placeholder: true,
  },
  {
    id: "benchmark-interno",
    title: "Benchmark nacional · Universidades chilenas en Derecho e IA",
    institution: "Investigación interna",
    year: "2026",
    url: "#",
    category: "interno",
    placeholder: true,
  },
];

export const sourceCategories: Record<Source["category"], string> = {
  adopcion: "Adopción y mercado",
  academico: "Centros académicos de referencia",
  tecnologia: "Tecnología",
  regulacion: "Regulación · Chile",
  interno: "Documentos internos",
};
