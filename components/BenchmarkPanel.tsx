"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { universities, pucvBreakdown, BENCHMARK_MAX, benchmarkReading } from "@/data/benchmark";

const fmt = (n: number) => n.toString().replace(".", ",");

export default function BenchmarkPanel() {
  const reduce = useReducedMotion();

  return (
    <section className="band" id="benchmark">
      <div className="wrap">
        <SectionHeader
          index="04"
          eyebrow="Benchmark nacional"
          title={benchmarkReading.headline}
          lead="Índice comparado de universidades chilenas en Derecho e IA, sobre cinco dimensiones: pregrado, formación continua, investigación, vinculación y uso interno institucional."
        />

        <Reveal className="bench">
          {universities.map((u) => {
            const pct = (u.score / BENCHMARK_MAX) * 100;
            return (
              <div className={`bench-row${u.highlight ? " hl" : ""}`} key={u.id}>
                <div className="nm" title={u.name}>
                  {u.short}
                </div>
                <div className="bench-track">
                  <motion.div
                    className="bench-fill"
                    initial={reduce ? { width: `${pct}%` } : { width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
                  />
                </div>
                <div className="vv">{fmt(u.score)}</div>
              </div>
            );
          })}
        </Reveal>

        <Reveal>
          <h3 className="eyebrow accent" style={{ display: "block", margin: "50px 0 4px" }}>
            Desglose PUCV · total 2,5
          </h3>
        </Reveal>
        <Reveal className="breakdown">
          {pucvBreakdown.map((d) => (
            <div className="bd" key={d.id}>
              <div className="k">{d.label}</div>
              <div className={`v ${d.score === 0 ? "zero" : "pos"}`}>{fmt(d.score)}</div>
              <div className="n">{d.note}</div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <p style={{ marginTop: 30, color: "var(--ink2)", fontSize: 16, maxWidth: "76ch", lineHeight: 1.65 }}>
            {benchmarkReading.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
