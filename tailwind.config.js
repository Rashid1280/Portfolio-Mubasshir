
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 9vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        title: ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        lead: ['clamp(1rem, 1.6vw, 1.0625rem)', { lineHeight: '1.6' }],
        spec: ['0.8125rem', { lineHeight: '1.3', letterSpacing: '0.005em' }],
      },
      borderRadius: {
        tile: '4px',
        control: '3px',
      },
      maxWidth: {
        shell: '72rem',
        prose: '68ch',
      },
    },
  },
  plugins: [],
}