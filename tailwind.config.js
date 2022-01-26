module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'corona': "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(/src/images/corona.jpg)",       
      },
      height: {
        'hl':'400px'
      },
      backgroundSize: {
        'fill': '100% 100%',
      },
      fontFamily: {
        'head': 'Noto Serif'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
