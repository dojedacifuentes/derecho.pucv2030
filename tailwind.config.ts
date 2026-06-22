import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg1: "var(--bg1)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        ink: "var(--ink)",
        ink2: "var(--ink2)",
        mute: "var(--mute)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        ok: "var(--ok)",
        warn: "var(--warn)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
