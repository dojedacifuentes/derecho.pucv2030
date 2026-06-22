"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "aceleracion", label: "Aceleración" },
  { id: "estudiante", label: "Estudiante" },
  { id: "benchmark", label: "Benchmark" },
  { id: "diagnostico", label: "Activos y brechas" },
  { id: "puente", label: "Modelo puente" },
  { id: "plataforma", label: "Plataforma" },
  { id: "tensiones", label: "Tensiones" },
  { id: "ruta", label: "Ruta DIAT" },
  { id: "optativo", label: "Optativo" },
  { id: "protocolo", label: "Protocolo" },
  { id: "integracion", label: "Integración" },
  { id: "roadmap", label: "Plan 2030" },
  { id: "proyeccion", label: "Proyección" },
  { id: "resumen", label: "Resumen" },
  { id: "fuentes", label: "Fuentes" },
];

export default function SideNav() {
  const [active, setActive] = useState<string>(LINKS[0].id);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="idx" aria-label="Índice de secciones">
      {LINKS.map((l) => (
        <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : undefined}>
          <span className="lbl">{l.label}</span>
          <span className="nub" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
