/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#877EFF",
        "secondary": "#FFB620",
        "blue": "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark": "#191923",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "muted": "#576076",
        "light": "#f0f2f5",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        "plain-muted": "#3f51b524",
        "glassmorphism": "rgba(16, 16, 18, 0.60)",
      },
      fontFamily: {
        'sans': ['Bricolage Grotesque', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
