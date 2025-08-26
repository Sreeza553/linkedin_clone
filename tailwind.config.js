module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F4F8", // deep-blue-50
          100: "#D9E2EC", // deep-blue-100
          200: "#BCCCDC", // deep-blue-200
          300: "#9FB3C8", // deep-blue-300
          400: "#829AB1", // deep-blue-400
          500: "#627D98", // deep-blue-500
          600: "#486581", // deep-blue-600
          700: "#334E68", // deep-blue-700
          800: "#243B53", // deep-blue-800
          900: "#1B365D", // deep-blue-900
          DEFAULT: "#1B365D", // deep-blue-900
        },
        secondary: {
          50: "#F0F9FF", // teal-50
          100: "#E0F2FE", // teal-100
          200: "#BAE6FD", // teal-200
          300: "#7DD3FC", // teal-300
          400: "#38BDF8", // teal-400
          500: "#0EA5E9", // teal-500
          600: "#4A90A4", // teal-600
          700: "#0369A1", // teal-700
          800: "#075985", // teal-800
          900: "#0C4A6E", // teal-900
          DEFAULT: "#4A90A4", // teal-600
        },
        accent: {
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#E67E22", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
          DEFAULT: "#E67E22", // orange-600
        },
        background: "#FAFBFC", // gray-50
        surface: "#FFFFFF", // white
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#7F8C8D", // gray-500
        },
        success: {
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          200: "#BBF7D0", // green-200
          300: "#86EFAC", // green-300
          400: "#4ADE80", // green-400
          500: "#22C55E", // green-500
          600: "#27AE60", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          900: "#14532D", // green-900
          DEFAULT: "#27AE60", // green-600
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F39C12", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
          DEFAULT: "#F39C12", // amber-500
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#E74C3C", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
          DEFAULT: "#E74C3C", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'modal': '0 4px 6px rgba(0,0,0,0.1)',
        'floating': '0 4px 12px rgba(0,0,0,0.1)',
        'hover': '0 6px 16px rgba(0,0,0,0.15)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'slide-in': 'slideIn 300ms ease-out',
        'loading': 'loading 1.5s infinite',
        'fade-in': 'fadeIn 200ms ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}