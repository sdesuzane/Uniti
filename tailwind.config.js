/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['"Merriweather"', 'sans'],
      },
      colors: {
        "primary-100": "#DCECDC",
        "primary-300": "#20a153",
        "primary-500": "#228B22",

        "gray-100": "#EEEEEE",
        "gray-300": "#322F35",

        //progress-bar
        warn: '#dc2955',
        warnTrack: 'rgba(220, 41, 85, 0.25)',
        accent: '#fabe18',
        accentTrack: 'rgba(250, 190, 24, 0.25)',
        primary: '#3fa98b',
        primaryTrack: 'rgba(63, 169, 139, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
