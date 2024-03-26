/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screen:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#979C8A',
      'secondary': '#E6E2D9',
      'info': '#696564',
      'related-1': '#616F5F',
      'related-2': '#c7d9cf',
      'shade-1': '#6e7362',
      'shade-2': '#5b5f4f',
      'shade-3': '#3c4031',
      'shade-4': '#1b2011',
      'shade-5': '#16221b',
      'tint-1': '#b6bba9',
      'tint-2': '#dadfcc',
      'tint-3': '#e9eeda',
      'tint-4': '#f1f6e2',
      'tint-5': '#f6fce8',
      'warning': '#cfa97b',
      'error': '#7f170d',
      'success': '#979c8a',
      'black': '#20201e',
      'd-grey': '#41413e',
      'grey': '#747371',
      'l-grey': '#9d9c9a',
      'grey-blue': '#bcbbb9',
      'sliver': '#e0dfdc',
      'white': '#eeedea',
    },
    fontFamily: {
      'notosanstc': ['Noto Sans TC', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'gutter': '1.5rem',
      },
      width: {
        'inner-width': '84rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

