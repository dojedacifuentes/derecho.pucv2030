import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { diagnosis, thesis } from "@/data/proposals";

export default function PucvDiagnosis() {
  return (
    <section className="band" id="diagnostico">
      <div className="wrap">
        <SectionHeader
          index="05"
          eyebrow="PUCV: activos y brechas"
          title="La PUCV no parte desde cero. Parte desde una base fragmentada."
          lead="El riesgo no es la ausencia de iniciativas. El riesgo es que permanezcan desconectadas. Estos son los activos reales que la Escuela ya posee — y las brechas que los mantienen sin articular."
        />

        <Reveal className="duo">
          <div className="pane good">
            <span className="k">Activos</span>
            <ul>
              {diagnosis.assets.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="pane gap">
            <span className="k">Brechas</span>
            <ul>
              {diagnosis.gaps.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <p style={{ marginTop: 30, color: "var(--ink2)", fontSize: 16, maxWidth: "80ch", lineHeight: 1.7 }}>
            {thesis}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
