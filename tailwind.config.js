module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Green: '#3CB371',
        LightGreen: '#5BDEA2',
        Blue: '#036994',
        DarkBlue: '#10537D',
        Grey: '#515151',
        LightGrey: '#9C9C9C',
      },
      spacing: {
        22: '5.5rem',
        34: '8.5rem',
      },
    },
  },
  plugins: [],
}
