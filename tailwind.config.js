/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F7FC',
        surface: '#FFFFFF',
        inset: '#EEF2F8',
        brand: {
          DEFAULT: '#204EDC',
          hover: '#173DB5',
          light: '#DEE7F9',
        },
        navy: {
          DEFAULT: '#212234',
          secondary: '#5B6882',
          muted: '#A1B0D4',
        },
        subtle: {
          border: '#E4EBF6',
        },
        status: {
          green: '#10B981',
          greenLight: '#E6F8F0',
          amber: '#F59E0B',
          amberLight: '#FEF3C7',
          error: '#EF4444',
          errorLight: '#FEE2E2',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(33, 34, 52, 0.05)',
        cardHover: '0 8px 24px -4px rgba(33, 34, 52, 0.08)',
        glow: '0 4px 14px rgba(32, 78, 220, 0.25)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
