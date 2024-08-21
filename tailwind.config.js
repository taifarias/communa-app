/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'container': '80%'
      },
      width: {
        'container': '30%',
        'inputxl': '70%'
      }
    },
  },
  plugins: [],
}

