/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xxs':'260px',
      'xs':'360px',
      'sm':'640px',
      'md':'1024px',
      'lg':'1280px',
      'xl':'1920px'
    },
    extend: {},
  },
  plugins: [],
}