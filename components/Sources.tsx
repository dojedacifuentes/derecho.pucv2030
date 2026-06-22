import { ExternalLink } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { sources, sourceCategories, type Source } from "@/data/sources";

const order: Source["category"][] = ["adopcion", "academico", "tecnologia", "regulacion", "interno"];

export default function Sources() {
  const grouped = order
    .map((cat) => ({ cat, items: sources.filter((s) => s.category === cat) }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="band" id="fuentes">
      <div className="wrap">
        <SectionHeader
          index="16"
          eyebrow="Fuentes y enlaces"
          title="Trazabilidad de los datos"
          lead="Los enlaces marcados como “verificar” son aproximados o placeholders: confirmar la URL antes de presentar. Se editan en /data/sources.ts."
        />

        {grouped.map((g) => (
          <Reveal className="src-group" key={g.cat}>
            <div className="gh">{sourceCategories[g.cat]}</div>
            <div className="src-list">
              {g.items.map((s) => (
                <a
                  key={s.id}
                  className="src-item"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="st">{s.title}</div>
                  <div className="si">
                    {s.institution}
                    {s.year && s.year !== "—" ? ` · ${s.year}` : ""}
                  </div>
                  <div className="su">
                    <ExternalLink size={11} aria-hidden="true" />
                    {s.url}
                  </div>
                  {s.placeholder ? <span className="badge">Verificar URL</span> : null}
                </a>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
