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
        // Flexoki Base Colors
        'fx-black': '#100F0F',
        'fx-paper': '#FFFCF0',
        'fx-base': {
          950: '#1C1B1A',
          900: '#282726',
          850: '#343331',
          800: '#403E3C',
          700: '#575653',
          600: '#6F6E69',
          500: '#878580',
          400: '#9F9D96',
          300: '#B7B5AC',
          200: '#CECDC3',
          150: '#DAD8CE',
          100: '#E6E4D9',
          50: '#F2F0E5',
        },
        // Flexoki Accent Colors
        'fx-red': {
          50: '#FFE1D5', 100: '#FFCABB', 200: '#F89A8A', 300: '#E8705F',
          400: '#D14D41', 500: '#C03E35', 600: '#AF3029', 700: '#942822',
        },
        'fx-orange': {
          50: '#FFE7CE', 100: '#FED3AF', 200: '#F9AE77', 300: '#EC8B49',
          400: '#DA702C', 500: '#CB6120', 600: '#BC5215', 700: '#9D4310',
        },
        'fx-yellow': {
          50: '#FAEEC6', 100: '#F6E2A0', 200: '#ECCB60', 300: '#DFB431',
          400: '#D0A215', 500: '#BE9207', 600: '#AD8301', 700: '#8E6B01',
        },
        'fx-green': {
          50: '#EDEECF', 100: '#DDE2B2', 200: '#BEC97E', 300: '#A0AF54',
          400: '#879A39', 500: '#768D21', 600: '#66800B', 700: '#536907',
        },
        'fx-cyan': {
          50: '#DDF1E4', 100: '#BFE8D9', 200: '#87D3C3', 300: '#5ABDAC',
          400: '#3AA99F', 500: '#2F968D', 600: '#24837B', 700: '#1C6C66',
        },
        'fx-blue': {
          50: '#E1ECEB', 100: '#C6DDE8', 200: '#92BFDB', 300: '#66A0C8',
          400: '#4385BE', 500: '#3171B2', 600: '#205EA6', 700: '#1A4F8C',
        },
        'fx-purple': {
          50: '#F0EAEC', 100: '#E2D9E9', 200: '#C4B9E0', 300: '#A699D0',
          400: '#8B7EC8', 500: '#735EB5', 600: '#5E409D', 700: '#4F3685',
        },
        'fx-magenta': {
          50: '#FEE4E5', 100: '#FCCFDA', 200: '#F4A4C2', 300: '#E47DA8',
          400: '#CE5D97', 500: '#B74583', 600: '#A02F6F', 700: '#87285E',
        },
        // Legacy colors (for compatibility)
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
