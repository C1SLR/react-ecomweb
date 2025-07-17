// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- ADD THIS IMPORT

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- ADD THIS PLUGIN CALL
  ],
  // Optional: If you continue to have issues with content detection even after this,
  // you can explicitly pass the config here, but typically tailwind.config.js is enough
  // and better for separating concerns.
  // Example:
  // tailwindcss({
  //   config: {
  //     content: [
  //       "./index.html",
  //       "./src/**/*.{js,ts,jsx,tsx}",
  //     ],
  //   },
  // }),
})