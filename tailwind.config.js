/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    extend: {
      colors: {
        violet: '#41314a',
        darkViolet: '#240d30',
        grey: '#f5f5f5',
        darkGrey: '#273444',
        lightGrey: '#d3dce6',
      },
    },
    fontFamily: {
      sans: ['Supply', 'sans-serif'],
      // sans: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
};
