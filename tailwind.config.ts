import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "screen/10": "10vh",
        "screen/20": "20vh",
        "screen/30": "30vh",
        "screen/40": "40vh",
        "screen/50": "50vh",
        "screen/60": "60vh",
        "screen/80": "80vh"
      },
      width: {
        "screen/20": "20vw",
        "screen/25": "25vw",
        "screen/30": "30vw",
        "screen/40": "40vh",
        "screen/45": "45vw",
        "screen/50": "50vw",
        "screen/75": "75vw",
        "screen/85": "85vw",
        "screen/90": "90vw"
      },
      colors: {
        "custom": "rgb(242, 236, 225)"
      }
    },
  },
  plugins: [],
};
export default config;
