export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent-color)',
        'background-0': 'var(--background-0-color)',
        'background-1': 'var(--background-1-color)',
        title: 'var(--title-color)',
        text: 'var(--text-color)',
        shadow: 'var(--shadow-color)',
        border: 'var(--border-color)',
      },
      fontFamily: {
        serif: ['"Old Standard TT"', 'serif'],
        body: ['"Source Serif Pro"', 'serif'],
      },

      width: {
        content: '80vw',
      },

      minWidth: {
        'content-min': '350px',
      },

      maxWidth: {
        'content-max': '60em',
      },
    },
  },
  plugins: [],
};
