import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { tensions } from "@/data/proposals";

export default function Tensions() {
  return (
    <section className="band" id="tensiones">
      <div className="wrap">
        <SectionHeader
          index="08"
          eyebrow="Tensiones institucionales"
          title="Cuatro tensiones, no cuatro culpables"
          lead="No hay villanos en este diagnóstico. Hay tensiones estructurales naturales en una institución viva. Nombrarlas con precisión es el primer paso para resolverlas."
        />

        <Reveal className="tensions">
          {tensions.map((t) => (
            <div className="tension" key={t.n}>
              <span className="n">{t.n}</span>
              <h4>{t.title}</h4>
              <div className="bal">
                <span>
                  <b>{t.a}</b>
                </span>
                <span>{t.b}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
