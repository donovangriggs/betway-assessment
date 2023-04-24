/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      'hero': "url('assets/the-hunch-mobile.webp')",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

