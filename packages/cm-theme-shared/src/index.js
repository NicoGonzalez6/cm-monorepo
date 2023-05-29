const theme = require('./presets/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'cm-',
  theme,
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
