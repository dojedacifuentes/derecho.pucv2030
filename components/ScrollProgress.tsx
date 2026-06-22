"use client";

import { useEffect, useState } from "react";

/** Barra de escaneo superior que refleja el progreso de lectura. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setPct(Math.min(Math.max(p, 0), 1) * 100);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scan" style={{ width: `${pct}%` }} aria-hidden="true" />;
}
