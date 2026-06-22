import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { aiProtocol } from "@/data/proposals";

export default function AIProtocol() {
  return (
    <section className="band" id="protocolo">
      <div className="wrap">
        <SectionHeader
          index="11"
          eyebrow="Protocolo mínimo de IA"
          title="Adoptarla con método, no con prisa"
          lead={aiProtocol.intro}
        />

        <Reveal className="proto">
          {aiProtocol.principles.map((p, i) => (
            <div className="prule" key={p.t}>
              <span className="pn">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="pt">{p.t}</div>
                <div className="pd">{p.d}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
