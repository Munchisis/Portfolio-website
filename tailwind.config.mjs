/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // deep blue (great for headings/buttons)
        secondary: "#FACC15", // warm gold accent
        accent: "#10B981", // emerald green for highlights
        dark: "#0F172A", // dark background
        light: "#F8FAFC", // light text/background
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.1)",
        glow: "0 0 12px rgba(16, 185, 129, 0.5)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
