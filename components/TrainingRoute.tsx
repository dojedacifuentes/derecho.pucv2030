import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { trainingRoute, trainingPrinciple } from "@/data/trainingRoute";

export default function TrainingRoute() {
  return (
    <section className="band" id="ruta">
      <div className="wrap">
        <SectionHeader
          index="09"
          eyebrow="Ruta de profesionalización DIAT"
          title="Siete niveles, de la alfabetización al producto"
          lead="Una trayectoria que convierte la ayudantía en formación con evidencia. Cada nivel tiene objetivo, evidencia de logro, entregable y posible mentoría. Despliega cada uno."
        />

        <Reveal className="route">
          {trainingRoute.map((lvl) => (
            <details className="lvl" key={lvl.level} open={lvl.level === 1}>
              <summary>
                <span className="num">N{lvl.level}</span>
                <span className="nm">{lvl.title}</span>
                <span className="arrow" aria-hidden="true">
                  ›
                </span>
              </summary>
              <div className="detail">
                <div className="field full">
                  <div className="k">Objetivo</div>
                  <div className="v">{lvl.objective}</div>
                </div>
                <div className="field">
                  <div className="k">Evidencia de logro</div>
                  <div className="v">{lvl.evidence}</div>
                </div>
                <div className="field">
                  <div className="k">Entregable</div>
                  <div className="v">{lvl.deliverable}</div>
                </div>
                <div className="field">
                  <div className="k">Posible mentoría</div>
                  <div className="v">{lvl.mentorship}</div>
                </div>
              </div>
            </details>
          ))}
        </Reveal>

        <Reveal className="principle">
          <div className="h">{trainingPrinciple.headline}</div>
          <div className="chips">
            {trainingPrinciple.values.map((v) => (
              <span className="chip-soft" key={v}>
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
