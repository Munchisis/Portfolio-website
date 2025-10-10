/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Force-generation for some classes that may be generated dynamically or
  // have naming variations (prevents missing utilities in some toolchains).
  safelist: [
    'bg-light-dark',
    'hover:bg-light-dark'
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff", // soft lavender accent
        darkHover: "#2a004a", // deep purple accent
        darkTheme: "#11001f", // very dark purple background
         // color token used in components (About.jsx) for hover background
         lightDark: "#11001f",
        // kebab-case alias so generated utility is `.bg-light-dark` (matches Tailwind's preferred naming)
        "light-dark": "#11001f",
      
      },
      fontFamily: {
        // Primary font family keys. Add both camel-case and lower-case aliases
        // because components use `font-Ovo`, `font-ovo`, `font-Outfit`, and `font-outfit`.
        Outfit: ["Outfit", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black': "4px 4px 0 #000",
        'white': "4px 4px 0 #fff",
      },
     
      
    },
  },
  plugins: [],
};

export default config;
