const media = require('./media.config')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    container: {
      center: true
    },
    fontFamily: {},
    extend: {
      boxShadow: {},
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        }
      },
      animation: {
        scaleUp: 'scaleUp .3s ease-out'
      },
      colors: {
        primary: {},
        secondary: {},
        neutral: {},
        danger: '#F74360',
        warning: '#F19F00',
        system: {
          DEFAULT: '#3C70F8'
        },
        surface: {
          light: '#FAFAFA'
        },
        success: {
          DEFAULT: '#00C45A',
          soft: '#D9F6EE'
        },
        information: {
          DEFAULT: '#3C70F8',
          soft: '#EEF3FF'
        }
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px'
      },
      screens: {
        sm: `${media.sm}px`,
        md: `${media.md}px`,
        lg: `${media.lg}px`,
        xl: `${media.xl}px`,
        xxl: `${media.xxl}px`
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
