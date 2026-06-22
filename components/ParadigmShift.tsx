import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { paradigmShift, paradigmTimeline } from "@/data/timeline";

export default function ParadigmShift() {
  const { before, after, capabilities } = paradigmShift;

  return (
    <section className="band" id="paradigma">
      <div className="wrap">
        <SectionHeader
          index="02"
          eyebrow="Cambio de paradigma"
          title="De las herramientas a las capacidades"
          lead="La conversación útil ya no es Claude, ChatGPT o Gemini. Es qué capacidades forma la Escuela: verificar, diseñar workflows, construir sistemas y supervisar IA. Las herramientas cambian cada trimestre; las capacidades permanecen."
        />

        <Reveal className="shift">
          <div className="col">
            <span className="k">Antes</span>
            <div className="chain">
              {before.sequence.map((node, i) => (
                <span key={node} style={{ display: "contents" }}>
                  <span className="pill">{node}</span>
                  {i < before.sequence.length - 1 && <span className="ar">→</span>}
                </span>
              ))}
            </div>
            <p>{before.note}</p>
          </div>
          <div className="col now">
            <span className="k">Ahora</span>
            <div className="chain">
              {after.sequence.map((node, i) => (
                <span key={node} style={{ display: "contents" }}>
                  <span className="pill">{node}</span>
                  {i < after.sequence.length - 1 && <span className="ar">→</span>}
                </span>
              ))}
            </div>
            <p>{after.note}</p>
          </div>
        </Reveal>

        <Reveal className="caps">
          {capabilities.map((c, i) => (
            <div className="cap" key={c}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              {c}
            </div>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="eyebrow accent" style={{ display: "block", margin: "56px 0 20px" }}>
            Evolución de la IA jurídica · 2023 → 2030
          </h3>
          <div className="evo">
            {paradigmTimeline.map((s) => (
              <div className="evo-row" key={s.year}>
                <span className="y">{s.year}</span>
                <span className="l">{s.label}</span>
                <span className="d">{s.detail}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
