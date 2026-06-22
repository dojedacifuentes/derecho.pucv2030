import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { roadmap } from "@/data/roadmap";

export default function Roadmap2030() {
  return (
    <section className="band" id="roadmap">
      <div className="wrap">
        <SectionHeader
          index="13"
          eyebrow="Plan 2026 – 2030"
          title="Una hoja de ruta, no una promesa"
          lead="Cinco años, hitos verificables. La secuencia importa: primero los cimientos, luego la investigación, finalmente el liderazgo."
        />

        <Reveal className="road">
          {roadmap.map((yr) => (
            <div className={`ryr${yr.lead ? " lead" : ""}`} key={yr.year}>
              <div className="y">
                {yr.year} <span>{yr.phase}</span>
              </div>
              <div className="items">
                {yr.items.map((it) => (
                  <div className="it" key={it.k}>
                    <div className="k">{it.k}</div>
                    <div className="v">{it.v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
