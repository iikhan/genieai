/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7d9ff',
          300: '#a4bdff',
          400: '#8196ff',
          500: '#6271fc',
          600: '#514af2',
          700: '#433ad4',
          800: '#3832ae',
          900: '#332f8a',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#f5f2ff',
          100: '#ede8ff',
          200: '#ded5ff',
          300: '#c8b4ff',
          400: '#af8dff',
          500: '#9761ff',
          600: '#8b43f7',
          700: '#7a33e2',
          800: '#662bbd',
          900: '#552899',
          950: '#32175a',
        },
        neutral: {
          50: '#f6f6f7',
          100: '#e1e2e5',
          200: '#c3c4ca',
          300: '#9ea0ab',
          400: '#7c7e8c',
          500: '#636673',
          600: '#4f515e',
          700: '#41424d',
          800: '#27282f',
          900: '#18191d',
          950: '#0e0e10',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(138, 75, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom right, rgba(96, 113, 252, 0.05), rgba(151, 97, 255, 0.05))',
      },
    },
  },
  plugins: [],
};