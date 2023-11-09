/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF1168",
        secondary: "#341931",
        additional: "#111625",
        gradient: {
          start: "#EE0979",
          end: "#FF6A00",
        },
        darkBlue: "#115793",
        blue: "#00A1CB",
        turquoise: "#0ABEBE",
        darkGreen: "#3A7634",
        green: "#5EB11C",
        yellow: "#F2BC06",
        orange: "#F18D05",
        red: "#E54028",
      },
    },
  },
  plugins: [],
};
