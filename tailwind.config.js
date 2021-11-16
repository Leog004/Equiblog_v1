module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {

        sm: '10rem',
  
        md: '20rem',
  
        lg: '30rem',
  
        xl: '36rem',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
