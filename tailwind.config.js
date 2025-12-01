/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./*.html",
    "./*.md",
    "./_posts/**/*.md",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#f7f7f7',
        'secondary-bg': '#ffffff',
        'text-primary': '#000000',
        'text-secondary': 'rgba(0, 0, 0, 0.5)',
        'border-light': 'rgba(0, 0, 0, 0.05)',
        'border-medium': 'rgba(0, 0, 0, 0.1)',
        'bg-button-secondary': 'rgba(0, 0, 0, 0.06)',
        'green-dot': 'rgb(4, 237, 2)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
