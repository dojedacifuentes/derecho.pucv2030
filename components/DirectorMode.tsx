"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, ChevronDown } from "lucide-react";
import Reveal from "./ui/Reveal";
import { directorRisks } from "@/data/proposals";

export default function DirectorMode() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section className="band" id="director" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="director">
          <button
            className="director-head"
            style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            <AlertTriangle size={22} color="var(--warn)" aria-hidden="true" />
            <span className="q">¿Qué pasa si no hacemos nada?</span>
            <ChevronDown
              size={20}
              color="var(--warn)"
              style={{ marginLeft: "auto", transform: open ? "rotate(180deg)" : "none", transition: "transform .3s var(--ease)" }}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={reduce ? undefined : { height: 0, opacity: 0 }}
                animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div className="director-grid">
                  {directorRisks.map((r) => (
                    <div className="drisk" key={r.t}>
                      <div className="t">{r.t}</div>
                      <div className="d">{r.d}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
