/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          100: '#a9a9c5',
          200: '#d0d2e1',
          300: '#ebecf1',
          400: '#908db8',
        },
        secondary: {
          100: '#1d242c',
          200: '#0176c3',
          300: '#c7eeff',
          400: '#fafafa',
        },
        main: {
          1: '#7a7d68',
          2: '#f4f4f4',
          3: '#d6d9d0',
          4: '#b8beb2'
        }
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
