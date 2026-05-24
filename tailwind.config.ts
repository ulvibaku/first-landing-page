import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b1220',
        panel: 'rgba(255,255,255,0.08)',
        border: 'rgba(255,255,255,0.12)',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(35, 155, 255, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(94, 205, 255, 0.18), transparent 36%), radial-gradient(circle at bottom right, rgba(190, 129, 255, 0.16), transparent 28%)',
      },
    },
  },
  plugins: [],
}

export default config
