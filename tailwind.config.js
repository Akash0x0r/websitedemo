/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A0A6E',
          'navy-deep': '#050540',
           'navy-mid': '#0F127A',
            'navy-light': '#1E2A8A',
            'navy-card': '#07074D',
             'navy-border': '#161972',
              blue: '#2F6FED',
               'blue-light': '#6FC3FF',
               'blue-glow': '#4FA8FF40',
                'blue-deep': '#258EFF',
                  white: '#FFFFFF',
                  'off-white': '#F5F6F8',
                    'white-muted': '#D3E2F8',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Archivo', 'Inter', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(79, 168, 255, 0.25)',
        'glow-md': '0 0 25px rgba(79, 168, 255, 0.35)',
        'glow-lg': '0 0 45px rgba(79, 168, 255, 0.45)',
        'glow-subtle': '0 4px 20px rgba(10, 10, 110, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(79, 168, 255, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
