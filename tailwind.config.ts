import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          '500': '#10b981', // El verde neón de Pronexus
        },
        zinc: {
          '900': 'rgb(24 24 27 / var(--tw-bg-opacity, 1))',
          '950': 'rgb(9 9 11 / var(--tw-bg-opacity, 1))',
        },
        neutral: {
          '300': '#d4d4d4',
          '800': '#27272a',
        }
      },
      fontFamily: {
         sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
         display: ["Cal Sans", ...defaultTheme.fontFamily.sans],
         mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
