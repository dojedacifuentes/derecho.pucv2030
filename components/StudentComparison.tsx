import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { studentComparison } from "@/data/proposals";

export default function StudentComparison() {
  const { traditional, augmented } = studentComparison;

  return (
    <section className="band" id="estudiante">
      <div className="wrap">
        <SectionHeader
          index="03"
          eyebrow="Qué aprenden hoy los estudiantes"
          title="Dos perfiles de egreso"
          lead="La diferencia ya no está en cuánto se lee, sino en qué se sabe hacer con la IA. Mientras un perfil sigue leyendo, resumiendo y escribiendo, otro verifica, diseña y construye. El mercado ya distingue entre ambos."
        />

        <Reveal className="students">
          <div className="scol">
            <div className="h">{traditional.label}</div>
            <ul>
              {traditional.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="scol aug">
            <div className="h">{augmented.label}</div>
            <ul>
              {augmented.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
