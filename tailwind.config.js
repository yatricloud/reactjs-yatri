/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-delay': 'fade-in-delay 1.5s ease-out forwards',
        'fade-in-delay-2': 'fade-in-delay-2 2s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'slow-spin': 'slow-spin 20s linear infinite',
        'slow-spin-reverse': 'slow-spin-reverse 25s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}