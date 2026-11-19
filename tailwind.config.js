/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F9FD',
        surface: '#FFFFFF',
        inset: '#F1F3F7',
        brand: {
          DEFAULT: '#4D7BF3',
          hover: '#3A68E2',
          light: '#EBF1FE',
          dark: '#2A52BE',
        },
        coral: {
          DEFAULT: '#F76B45',
          hover: '#E55933',
          light: '#FFF0EC',
        },
        navy: {
          DEFAULT: '#1E202B',
          secondary: '#6E7487',
          muted: '#9FA5B5',
        },
        subtle: {
          border: '#E8ECF4',
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
        card: '0 4px 20px -2px rgba(30, 32, 43, 0.04)',
        cardHover: '0 10px 28px -4px rgba(30, 32, 43, 0.08)',
        floatPill: '0 12px 30px -4px rgba(30, 32, 43, 0.14), 0 4px 10px rgba(0, 0, 0, 0.04)',
        blueBanner: '0 16px 36px -8px rgba(77, 123, 243, 0.35)',
        glow: '0 4px 14px rgba(77, 123, 243, 0.3)',
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '26px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
