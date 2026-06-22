import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { optativeCourse } from "@/data/proposals";

export default function OptativeCourse() {
  return (
    <section className="band" id="optativo">
      <div className="wrap">
        <SectionHeader
          index="10"
          eyebrow="Optativo propuesto"
          title="Un ramo, no un taller suelto"
          lead="Continuidad formativa con créditos y reconocimiento institucional para lo que hoy ocurre fuera de la malla."
        />

        <Reveal className="course">
          <div className="course-head">
            <div className="nm">{optativeCourse.name}</div>
            <p>{optativeCourse.description}</p>
          </div>
          <div className="course-body">
            <div className="course-col">
              <span className="k">Unidades</span>
              <ol className="units">
                {optativeCourse.units.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ol>
            </div>
            <div className="course-col">
              <span className="k">Evaluaciones</span>
              <ul className="evals">
                {optativeCourse.assessments.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
