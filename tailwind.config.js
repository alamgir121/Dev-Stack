/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f1115",
        surface: "#ffffff",
        muted: "#6b7280",
      },
      backgroundImage: {
        // Single source of truth for the brand gradient (orange -> pink -> violet).
        // Every gradient element in the UI references this one utility class:
        // `bg-brand-gradient`. Re-theme the whole app by editing this one line.
        "brand-gradient": "linear-gradient(90deg, #FF7A18 0%, #E1306C 50%, #7B2FF7 100%)",
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        devstack: {
          primary: "#7B2FF7",
          secondary: "#E1306C",
          accent: "#FF7A18",
          neutral: "#0f1115",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
