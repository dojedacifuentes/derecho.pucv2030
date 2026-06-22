import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { transversalIntegration, integrationNote } from "@/data/proposals";

export default function TransversalIntegration() {
  return (
    <section className="band" id="integracion">
      <div className="wrap">
        <SectionHeader
          index="12"
          eyebrow="Integración transversal"
          title="IA en los ramos, sin reforma radical"
          lead={integrationNote}
        />

        <Reveal className="integration">
          {transversalIntegration.map((row) => (
            <div className="intg" key={row.course}>
              <span className="c">{row.course}</span>
              <span className="e">{row.example}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
