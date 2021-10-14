module.exports = {
  prefix: 'aa--',
  important: true,
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: false, // false or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#04c8c8',
        secondary: '#e8f6f6',
        link: '#069c9c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
