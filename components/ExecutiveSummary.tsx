"use client";

import { useState } from "react";
import { Copy, Check, Printer, FileDown } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { executiveSummary } from "@/data/proposals";
import { copyText } from "@/lib/download";

function buildSummaryText(): string {
  const lines: string[] = [];
  lines.push("DECISIÓN ESTRATÉGICA SUGERIDA · ESCUELA DE DERECHO PUCV 2030");
  lines.push("");
  executiveSummary.points.forEach((p, i) => lines.push(`${i + 1}. ${p}`));
  lines.push("");
  lines.push(executiveSummary.closingIdea);
  lines.push("");
  lines.push("— Preparado por Diego Ojeda Cifuentes · Derecho, IA y Tecnología (DIAT)");
  return lines.join("\n");
}

export default function ExecutiveSummary() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const ok = await copyText(buildSummaryText());
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="band" id="resumen">
      <div className="wrap">
        <SectionHeader index="15" eyebrow="Resumen ejecutivo" title={executiveSummary.title} />

        <Reveal className="exec">
          <ol>
            {executiveSummary.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
          <p className="idea">{executiveSummary.closingIdea}</p>

          <div className="toolbar">
            <button className="btn primary" onClick={onCopy} aria-live="polite">
              {copied ? <Check /> : <Copy />}
              {copied ? "Resumen copiado" : "Copiar resumen ejecutivo"}
            </button>
            <a className="btn primary" href="/derecho-pucv-2030-diagnostico-propuesta.pdf" download>
              <FileDown />
              Descargar PDF estratégico
            </a>
            <button className="btn" onClick={() => window.print()}>
              <Printer />
              Imprimir / Guardar PDF
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
