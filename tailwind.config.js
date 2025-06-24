/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 🔥 aktifin dark mode via class (bukan media query)
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      // Optional: tambahin warna custom kalau mau
      colors: {
        darkbg: '#0f172a',
        darktext: '#e2e8f0',
      },
    },
  },
  plugins: [],
}