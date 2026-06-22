"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { adoptionTimeline, accelerationQuote } from "@/data/timeline";

// ── geometría del gráfico (data-driven) ──
const W = 760;
const H = 320;
const PADX = 60;
const PADTOP = 40;
const PADBOT = 40;
const plotW = W - PADX - 40;
const plotH = H - PADTOP - PADBOT;

function x(i: number, n: number) {
  return PADX + (plotW * i) / (n - 1);
}
function y(v: number) {
  return PADTOP + plotH * (1 - v / 100);
}

export default function AccelerationTimeline() {
  const reduce = useReducedMotion();
  const n = adoptionTimeline.length;
  const pts = adoptionTimeline.map((d, i) => ({ ...d, cx: x(i, n), cy: y(d.value ?? 0) }));

  const lastRealIdx = pts.reduce((acc, p, i) => (p.kind === "real" ? i : acc), 0);
  const realPts = pts.slice(0, lastRealIdx + 1);
  const projPts = pts.slice(lastRealIdx);

  const toLine = (arr: typeof pts) => arr.map((p) => `${p.cx},${p.cy}`).join(" ");
  const areaPath = `M${realPts[0].cx},${realPts[0].cy} ${realPts
    .slice(1)
    .map((p) => `L${p.cx},${p.cy}`)
    .join(" ")} L${realPts[realPts.length - 1].cx},${PADTOP + plotH} L${realPts[0].cx},${PADTOP + plotH} Z`;

  return (
    <section className="band" id="aceleracion">
      <div className="wrap">
        <SectionHeader
          index="01"
          eyebrow="La aceleración externa"
          title="2023–2026: la aceleración del trabajo jurídico aumentado"
          lead="El cambio ya comenzó. La adopción de IA en la profesión se triplicó en un año y hoy se asocia directamente al crecimiento de los estudios. Las herramientas evolucionan cada trimestre; las universidades reaccionan mucho más lento. Todavía estamos a tiempo."
        />

        <Reveal className="tl-chart">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Adopción de IA en la profesión jurídica, 2023 a 2030" style={{ width: "100%", height: "auto", display: "block" }}>
            <defs>
              <linearGradient id="accgrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#5681ff" stopOpacity=".18" />
                <stop offset="1" stopColor="#5681ff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* gridlines + y labels */}
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line x1={PADX} y1={y(v)} x2={W - 40} y2={y(v)} stroke="var(--line-soft)" strokeWidth="1" />
                <text x={PADX - 10} y={y(v) + 4} fill="var(--mute)" fontSize="10" textAnchor="end" fontFamily="var(--font-plex-mono), monospace">
                  {v}
                </text>
              </g>
            ))}

            {/* area under real curve */}
            <path d={areaPath} fill="url(#accgrad)" />

            {/* real line */}
            <motion.polyline
              points={toLine(realPts)}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.4"
              strokeLinejoin="round"
              initial={reduce ? undefined : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            {/* projection line (dashed) */}
            <motion.polyline
              points={toLine(projPts)}
              fill="none"
              stroke="var(--mute)"
              strokeWidth="1.6"
              strokeDasharray="5 5"
              strokeLinejoin="round"
              initial={reduce ? undefined : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
            />

            {/* dots + value labels */}
            {pts.map((p) => (
              <g key={p.year}>
                <circle cx={p.cx} cy={p.cy} r={p.kind === "real" ? 4 : 3.4} fill={p.kind === "real" ? "var(--accent)" : "var(--mute)"} />
                <text x={p.cx} y={p.cy - 12} fill={p.kind === "real" ? "var(--ink)" : "var(--mute)"} fontSize="11" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace">
                  {p.value}%
                </text>
                <text x={p.cx} y={H - 14} fill="var(--mute)" fontSize="10" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace">
                  {p.year}
                </text>
              </g>
            ))}
          </svg>
          <div className="tl-legend">
            <span>
              <i className="sw real" />
              Adopción observada · ABA / Clio
            </span>
            <span>
              <i className="sw proj" />
              Proyección sectorial 2027–2030
            </span>
          </div>
        </Reveal>

        <Reveal className="tl-steps" delay={0.05}>
          {adoptionTimeline.map((d) => (
            <div className="tl-step" key={d.year}>
              <div className="yr">
                {d.year}
                <span className="kind">{d.kind === "real" ? "observado" : "proyección"}</span>
              </div>
              <h4>{d.title}</h4>
              <p>{d.body}</p>
              <div className="src">{d.source}</div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <blockquote className="quote wide" style={{ marginTop: 54 }}>
            {accelerationQuote}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
