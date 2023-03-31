/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(356, 100%, 66%)',
        'very-light-red': 'hsl(355, 100%, 74%)',
        'very-dark-blue': 'hsl(208, 49%, 24%)',
        'grayish-blue': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'very-dark-black-blue': 'hsl(240, 10%, 16%)',
        'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
        'bg-secondary': 'hsl(0, 26%, 96%)'
      },
      fontFamily: {
        overpass: ['Overpass, sans-serif'],
        ubuntu: ['Ubuntu, sans-serif']
      },
      backgroundImage: {
        'mobile-pattern': "url('src/assets/bg-pattern-intro-mobile.svg')"
      }
    }
  },
  plugins: []
}
