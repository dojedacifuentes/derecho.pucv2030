"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { projection, projectionMilestones, projectionLevers } from "@/data/roadmap";
import { scenarios, scenarioBarLabels } from "@/data/proposals";

const fmt = (n: number) => n.toString().replace(".", ",");

// ── geometría del gráfico de proyección ──
const W = 740;
const H = 300;
const PADX = 60;
const PADTOP = 30;
const PADBOT = 40;
const MAXV = 12;
const plotW = W - PADX - 40;
const plotH = H - PADTOP - PADBOT;
const px = (i: number) => PADX + (plotW * i) / (projection.length - 1);
const py = (v: number) => PADTOP + plotH * (1 - v / MAXV);

export default function ProjectionPanel() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(1);
  const sc = scenarios[active];

  const roadLine = projection.map((p, i) => `${px(i)},${py(p.roadmap)}`).join(" ");
  const inerLine = projection.map((p, i) => `${px(i)},${py(p.inertia)}`).join(" ");
  const roadArea = `M${px(0)},${py(projection[0].roadmap)} ${projection
    .map((p, i) => `L${px(i)},${py(p.roadmap)}`)
    .join(" ")} L${px(projection.length - 1)},${PADTOP + plotH} L${px(0)},${PADTOP + plotH} Z`;

  return (
    <section className="band" id="proyeccion">
      <div className="wrap">
        <SectionHeader
          index="14"
          eyebrow="Panel de proyección"
          title="Dónde estamos, hacia dónde podemos ir"
          lead="El posicionamiento de la Escuela no depende del entorno, sino de cuánto se decida actuar. Este panel proyecta dos trayectorias — inercia y hoja de ruta — y deja simular las decisiones."
        />

        {/* ── curva de proyección ── */}
        <Reveal className="panel">
          <div className="panel-head">
            <span>Índice de posicionamiento · escala benchmark (máx. 12)</span>
            <span className="dim">2026 → 2030</span>
          </div>
          <div className="panel-card">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Proyección de posicionamiento 2026 a 2030" style={{ width: "100%", height: "auto", display: "block" }}>
              <defs>
                <linearGradient id="projgrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#5681ff" stopOpacity=".16" />
                  <stop offset="1" stopColor="#5681ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 3, 6, 9, 12].map((v) => (
                <g key={v}>
                  <line x1={PADX} y1={py(v)} x2={W - 40} y2={py(v)} stroke="var(--line-soft)" strokeWidth="1" />
                  <text x={PADX - 10} y={py(v) + 4} fill="var(--mute)" fontSize="10" textAnchor="end" fontFamily="var(--font-plex-mono), monospace">
                    {v}
                  </text>
                </g>
              ))}
              <path d={roadArea} fill="url(#projgrad)" />
              <polyline points={inerLine} fill="none" stroke="var(--mute)" strokeWidth="1.5" strokeDasharray="4 4" />
              <motion.polyline
                points={roadLine}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinejoin="round"
                initial={reduce ? undefined : { pathLength: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              {projection.map((p, i) => (
                <g key={p.label}>
                  <circle cx={px(i)} cy={py(p.roadmap)} r="4" fill="var(--accent)" />
                  <circle cx={px(i)} cy={py(p.inertia)} r="3" fill="var(--mute)" />
                  <text x={px(i)} y={py(p.roadmap) - 12} fill="var(--ink)" fontSize="11" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace">
                    {fmt(p.roadmap)}
                  </text>
                  <text x={px(i)} y={H - 14} fill="var(--mute)" fontSize="10" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace">
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>
            <div className="tl-legend">
              <span>
                <i className="sw real" />
                Con la hoja de ruta
              </span>
              <span>
                <i className="sw proj" />
                Inercia · sin actuar
              </span>
            </div>
          </div>
          <div className="readouts">
            {projectionMilestones.map((m) => (
              <div className="readout" key={m.k}>
                <span className="k">{m.k}</span>
                <span className={`v${m.accent ? " accent" : ""}`}>{m.v}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="principle" style={{ marginTop: 16 }}>
            <div className="h" style={{ marginBottom: 14 }}>
              Palancas que mueven el índice
            </div>
            <div className="chips">
              {projectionLevers.map((l) => (
                <span className="chip-soft" key={l}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── simulador de escenarios ── */}
        <Reveal>
          <h3 className="eyebrow accent" style={{ display: "block", margin: "50px 0 18px" }}>
            Modo escenarios · cada decisión mueve los indicadores
          </h3>
        </Reveal>

        <Reveal className="panel">
          <div className="scn" role="tablist" aria-label="Escenarios">
            {scenarios.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                className={active === s.id ? "on" : undefined}
                onClick={() => setActive(s.id)}
              >
                <span className="t">{s.name}</span>
                <span className="d">{s.desc}</span>
              </button>
            ))}
          </div>
          <div className="panel-body">
            <div className="panel-card">
              <div className="bars">
                {Object.entries(sc.bars).map(([k, v]) => (
                  <div className="bar-row" key={k}>
                    <div className="bl">
                      <span className="bn">{scenarioBarLabels[k] ?? k}</span>
                      <span className="bv">{v}</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${v}%`, transition: reduce ? "none" : "width 1s var(--ease)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel-card">
              <div className="sc-meta">
                <div className="sc-stat">
                  <span className="k">Índice proyectado · 2030</span>
                  <span className="v big">{fmt(sc.projected)}</span>
                </div>
                <div className="sc-stat">
                  <span className="k">Benchmark nacional</span>
                  <span className="v">{sc.benchmark}</span>
                </div>
                <div className="sc-list risk">
                  <span className="k">Riesgos</span>
                  <ul>
                    {sc.risks.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="sc-list opp">
                  <span className="k">Oportunidades</span>
                  <ul>
                    {sc.opportunities.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="readouts">
            <div className="readout">
              <span className="k">Posición actual</span>
              <span className="v">Adoptante tardío · 2,5</span>
            </div>
            <div className="readout">
              <span className="k">Meta 2030</span>
              <span className="v">Referente regional · 11+</span>
            </div>
            <div className="readout">
              <span className="k">Brecha</span>
              <span className="v">Cerrable en 48 meses</span>
            </div>
            <div className="readout">
              <span className="k">Ventana</span>
              <span className="v accent">Abierta · 2026</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
