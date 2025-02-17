/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A2A2A',
          light: '#404040',
        },
        secondary: '#6B7280',
        accent: '#F4F4F4',
        background: {
          DEFAULT: '#ffffff',
          darker: '#FAFAFA',
        },
        text: {
          DEFAULT: '#2A2A2A',
          light: '#6B7280',
        }
      },
      fontSize: {
        'xs': '0.8125rem',
        'sm': '0.875rem',
        'base': '0.9375rem',
        'lg': '1.0625rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.DEFAULT'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.light'),
              },
            },
            h1: {
              color: theme('colors.primary.DEFAULT'),
            },
            h2: {
              color: theme('colors.primary.DEFAULT'),
            },
            h3: {
              color: theme('colors.primary.DEFAULT'),
            },
            strong: {
              color: theme('colors.primary.DEFAULT'),
            },
            code: {
              color: theme('colors.primary.DEFAULT'),
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.gray.300'),
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.white'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
