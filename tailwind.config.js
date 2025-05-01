/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-dark': '#1e1e1e',
        'app-dark-secondary': '#2d2d2d',
        'app-blue': '#0d6efd',
        'app-gray': '#888888',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

