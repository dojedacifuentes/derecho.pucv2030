"use client";

import { FileText, Route, ShieldCheck, ClipboardList, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "./ui/Reveal";
import { downloadReport, type ReportDoc } from "@/lib/download";
import { optativeCourse, aiProtocol, executiveSummary, thesis, keyPhrases } from "@/data/proposals";
import { trainingRoute, trainingPrinciple } from "@/data/trainingRoute";
import { universities, pucvBreakdown, benchmarkReading } from "@/data/benchmark";

const fmt = (n: number) => n.toString().replace(".", ",");

// ── builders de documentos ──

const optativeDoc = (): ReportDoc => ({
  filename: "PUCV-2030-Programa-Optativo",
  title: optativeCourse.name,
  subtitle: "Programa optativo de pregrado · propuesta",
  sections: [
    { paragraphs: [optativeCourse.description] },
    { heading: "Unidades", numbered: optativeCourse.units },
    { heading: "Evaluaciones", bullets: optativeCourse.assessments },
  ],
});

const routeDoc = (): ReportDoc => ({
  filename: "PUCV-2030-Ruta-Ayudantes",
  title: "Ruta de Profesionalización DIAT",
  subtitle: "Siete niveles · de la alfabetización al producto institucional",
  sections: [
    {
      heading: "Niveles",
      table: {
        headerRow: true,
        rows: [
          ["Nivel", "Título", "Objetivo", "Entregable"],
          ...trainingRoute.map((l) => [`N${l.level}`, l.title, l.objective, l.deliverable]),
        ],
      },
    },
    { heading: trainingPrinciple.headline, bullets: trainingPrinciple.values },
  ],
});

const protocolDoc = (): ReportDoc => ({
  filename: "PUCV-2030-Protocolo-IA",
  title: "Protocolo mínimo de uso de IA",
  subtitle: "Escuela de Derecho PUCV · borrador para discusión",
  sections: [
    { paragraphs: [aiProtocol.intro] },
    {
      heading: "Principios",
      table: {
        headerRow: true,
        rows: [["Principio", "Descripción"], ...aiProtocol.principles.map((p) => [p.t, p.d])],
      },
    },
  ],
});

const execDoc = (): ReportDoc => ({
  filename: "PUCV-2030-Informe-Ejecutivo",
  title: "Informe ejecutivo · Derecho PUCV 2030",
  subtitle: executiveSummary.title,
  sections: [
    { heading: "Tesis", paragraphs: [thesis] },
    { heading: "Decisión estratégica sugerida", numbered: executiveSummary.points },
    { heading: "Idea de cierre", paragraphs: [executiveSummary.closingIdea] },
    { heading: "Frases clave", bullets: keyPhrases },
  ],
});

const benchmarkDoc = (): ReportDoc => ({
  filename: "PUCV-2030-Benchmark-Nacional",
  title: "Benchmark nacional · Derecho e IA",
  subtitle: benchmarkReading.headline,
  sections: [
    {
      heading: "Ranking de universidades",
      table: {
        headerRow: true,
        rows: [["Universidad", "Puntaje"], ...universities.map((u) => [u.name, fmt(u.score)])],
      },
    },
    {
      heading: "Desglose PUCV · total 2,5",
      table: {
        headerRow: true,
        rows: [["Dimensión", "Puntaje", "Lectura"], ...pucvBreakdown.map((d) => [d.label, fmt(d.score), d.note])],
      },
    },
    { paragraphs: [benchmarkReading.body] },
  ],
});

interface DLButton {
  label: string;
  icon: ReactNode;
  build: () => ReportDoc;
}

const BUTTONS: DLButton[] = [
  { label: "Programa optativo", icon: <FileText size={18} />, build: optativeDoc },
  { label: "Ruta de ayudantes", icon: <Route size={18} />, build: routeDoc },
  { label: "Protocolo IA", icon: <ShieldCheck size={18} />, build: protocolDoc },
  { label: "Informe ejecutivo", icon: <ClipboardList size={18} />, build: execDoc },
  { label: "Benchmark nacional", icon: <BarChart3 size={18} />, build: benchmarkDoc },
];

export default function Downloads() {
  return (
    <section className="band" id="descargas" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <h3 className="eyebrow accent" style={{ display: "block", marginBottom: 6 }}>
            Descargas
          </h3>
          <p style={{ color: "var(--ink2)", fontSize: 14.5, marginBottom: 22, maxWidth: "64ch" }}>
            Documentos de trabajo en formato imprimible. Cada uno se descarga como archivo autocontenido;
            desde el navegador puedes usar &ldquo;Guardar como PDF&rdquo;.
          </p>
        </Reveal>
        <Reveal className="downloads">
          {BUTTONS.map((b) => (
            <button key={b.label} className="dl" onClick={() => downloadReport(b.build())}>
              <span className="ic">{b.icon}</span>
              <span>
                <span className="nm">{b.label}</span>
                <span className="ty">Descargar · HTML / PDF</span>
              </span>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
