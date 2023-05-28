const theme = require('./presets/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'wh-',
  theme,
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
