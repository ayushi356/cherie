/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cherie: {
          blush: '#F8E9E9',
          rose: '#E7BFC8',
          ivory: '#FFF9F3',
          mauve: '#A96F7C',
          wine: '#563B43',        // Main headings, nav (#563B43)
          body: '#654B52',        // Body text (#654B52)
          secondary: '#896D75',   // Secondary text (#896D75)
          accent: '#A96F7C',      // Decorative accents (#A96F7C)
          cream: '#FCF8F5',
          gold: '#D4AF37',
          champagne: '#F3E5D8',
          border: 'rgba(137, 109, 117, 0.22)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Allura"', 'cursive'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(86, 59, 67, 0.08)',
        'rose': '0 8px 30px -4px rgba(231, 191, 200, 0.35)',
        'elevated': '0 12px 40px -6px rgba(86, 59, 67, 0.12)',
        'inner-delicate': 'inset 0 1px 3px rgba(86, 59, 67, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
