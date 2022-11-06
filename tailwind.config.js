/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'dark-gray': 'var(--dark-gray)',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      width: {
        500: '500px',
        300: '300px',
      },
      screens: {
        small: { min: '360px', max: '650px' },
        medium: { min: '651px', max: '1023px' },
        large: { min: '1024px', max: '1279px' },
      },
    },
  },
  plugins: [],
};
