import type { Config } from "tailwindcss";

// Colours are CSS variables (see globals.css) so dark and light themes share one set of classes.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        raised: token("raised"),
        ink: token("ink"),
        muted: token("muted"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
      },
      borderRadius: { card: "18px" },
      boxShadow: {
        soft: "0 10px 30px -12px rgb(var(--shadow) / 0.35)",
      },
      maxWidth: { page: "72rem", prose: "42rem" },
      letterSpacing: { tightest: "-0.035em" },
    },
  },
  plugins: [],
};

export default config;
