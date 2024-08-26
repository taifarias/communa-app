/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'container': '700px'
      },
      width: {
        'container': '30%',
        'inputxl': '70%',
        '85': '349px',
        'banner': '410px'
      }
    },
  },
  plugins: [],
}

