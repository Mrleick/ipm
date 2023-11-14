/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primarycolor': '#FF1168',
        'secondary-color': '#341931',
        'additional-color': '#111625',
        'gradient-color1': '##EE0979',
        'gradient-color2': '#FF6A00',
        'dark-blue': '#115793',
        'blue': '#00A1CB',
        'turquoise': '#0ABEBE',
        'dark-green': '#3A7634',
        'green': '#5EB11C',
        'yellow': '#F2BC06',
        'orange': '#F18D05',
        'red': '#E54028'
      },
    },
  },
  plugins: [],
};
