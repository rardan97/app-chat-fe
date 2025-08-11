module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}", // tambahkan "css" di sini
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        sidebar: "#1e293b",
        bubbleMe: "#2563eb",
        bubbleThem: "#334155",
        accent: "#3b82f6",
        textPrimary: "#f1f5f9",
      },
    },
  },
  plugins: [],
};