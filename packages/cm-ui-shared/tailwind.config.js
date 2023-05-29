import preset from 'cm-theme-shared';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,tsx}'],
  presets: [preset],
  theme: {
    extend: {
      animation: {
        spin: 'spin .75s linear infinite',
      },
    },
  },
};
