/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Poiret One', 'cursive'],
      },
      screens: {
        tablet: '500px',
        laptop: '1024px',
        desktop: '1280px',
      },
      colors: {
        customBlue: '#09AAB4',
      },
    },
  },
  plugins: [],
};
