/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Poppins"']
    },
    colors: {
      'white': '#EAE7DC',
      'brown': '#D8C3A5',
      'gray': '#8E8D8A',
      'pink': '#E98074',
      'red': '#E85A4F',
      // 'blue': '#5680E9',
      // 'baby-blue': '#84CEEB',
      // 'sky-blue': '#5AB9EA',
      // 'violet': '#C1C8E4',
      // 'purple': '#8860D0',
    },
    extend: {},
  },
  plugins: [],
};
