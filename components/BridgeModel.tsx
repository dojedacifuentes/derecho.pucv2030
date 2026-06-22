import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { bridgeModel } from "@/data/proposals";

export default function BridgeModel() {
  return (
    <section className="band" id="puente">
      <div className="wrap">
        <SectionHeader
          index="06"
          eyebrow="El límite del modelo puente"
          title="Puente operativo o plataforma institucional"
          lead="Innova Day y el Legal Management Program son activos valiosos. No son el problema: son la base. La pregunta es si DIAT se queda como puente hacia esos espacios, o si se convierte en plataforma con capacidad formativa, investigación propia y profesionalización estudiantil."
        />

        <Reveal>
          <p style={{ color: "var(--ink2)", fontSize: 15.5, maxWidth: "82ch", lineHeight: 1.7, marginBottom: 36 }}>
            {bridgeModel.intro}
          </p>
        </Reveal>

        <Reveal className="duo">
          <div className="pane">
            <span className="k" style={{ color: "var(--mute)" }}>
              {bridgeModel.bridge.label}
            </span>
            <ul>
              {bridgeModel.bridge.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="pane plat">
            <span className="k">{bridgeModel.platform.label}</span>
            <ul>
              {bridgeModel.platform.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="quote" style={{ marginTop: 44 }}>
            DIAT puede pasar de puente operativo a plataforma institucional.
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
