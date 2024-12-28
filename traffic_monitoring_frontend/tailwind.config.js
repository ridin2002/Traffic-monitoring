// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        sidebar: "#1E293B",
        background: "#0F172A",
        card: "#1E293B",
        hover: "#334155",
      },
    },
  },
  plugins: [], // Add Tailwind plugins here
};
