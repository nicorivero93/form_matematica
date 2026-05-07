import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 240ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  // Safelist para clases generadas dinámicamente desde data/anios.ts y data/areas.ts
  safelist: [
    { pattern: /^bg-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^bg-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600)\/(5|10|15|20|25|30|40|50|60|70)$/ },
    { pattern: /^border-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(300|400|500|600|700)$/ },
    { pattern: /^border-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600)\/(20|30|40|50)$/ },
    // Border lateral con color (border-l-rose-500 etc.) — usado en TemaCard
    { pattern: /^border-l-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600)$/ },
    { pattern: /^text-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^ring-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(300|400|500|600)$/ },
    { pattern: /^ring-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500)\/(20|30|40|50)$/ },
    { pattern: /^from-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600|700)$/ },
    { pattern: /^from-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600)\/(0|5|10|15|20|30|40|50)$/ },
    { pattern: /^to-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600|700)$/ },
    { pattern: /^to-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600)\/(0|5|10|15|20|30|40|50)$/ },
    { pattern: /^via-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500|600)\/(0|5|10|15|20|30|40|50)$/ },
    { pattern: /^shadow-(sky|rose|orange|purple|indigo|yellow|cyan|teal|pink|emerald|violet|amber|slate|lime|fuchsia|red|green|blue)-(400|500)\/(20|30|40|50)$/ },
  ],
  plugins: [],
};

export default config;
