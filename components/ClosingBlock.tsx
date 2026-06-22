"use client";

import { useEffect, useRef, useState } from "react";

const LINES = ["Esto ya comenzó.", "Tenemos una oportunidad.", "Existe una hoja de ruta.", "Podemos liderarla."];

export default function ClosingBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            LINES.forEach((_, i) => setTimeout(() => setShown(i + 1), i * 420));
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="band close">
      <div className="wrap">
        <div className="credo" ref={ref}>
          {LINES.map((l, i) => (
            <div key={l} className={`line${i < shown ? " in" : ""}`}>
              {l}
            </div>
          ))}
        </div>

        <div className="signature">
          <div className="name">Preparado por Diego Ojeda Cifuentes</div>
          <div className="role">Derecho, IA y Tecnología</div>
          <p className="doc">
            Documento de trabajo para conversación estratégica.
            <br />
            Escuela de Derecho · Pontificia Universidad Católica de Valparaíso.
            <br />
            <a href="mailto:dojedacifuentes@gmail.com">dojedacifuentes@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
