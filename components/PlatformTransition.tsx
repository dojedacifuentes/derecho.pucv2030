import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { platformTransition } from "@/data/proposals";

export default function PlatformTransition() {
  const { current, future } = platformTransition;

  return (
    <section className="band" id="plataforma">
      <div className="wrap">
        <SectionHeader
          index="07"
          eyebrow="De programa-evento a plataforma"
          title="La transición que ya es posible"
          lead="No se trata de inventar algo nuevo, sino de dar continuidad y estructura a lo que hoy ocurre de forma puntual y dependiente de personas."
        />

        <Reveal className="transition">
          <div className="tnode">
            <span className="sub">{current.sub}</span>
            <div className="h">{current.label}</div>
            <ul>
              {current.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="tarrow" aria-hidden="true">
            →
          </div>
          <div className="tnode future">
            <span className="sub">{future.sub}</span>
            <div className="h">{future.label}</div>
            <ul>
              {future.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
