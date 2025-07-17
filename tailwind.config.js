/** @type {import('tailwindcss').Config} */
export default { // Use export default for Vite
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this path covers all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}