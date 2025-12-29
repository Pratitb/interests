/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayLt: '#e5e7eb',
        grayMd: '#9ca3af',
        grayDrk: '#111827'
      }
    },
  },
  plugins: [],
};
