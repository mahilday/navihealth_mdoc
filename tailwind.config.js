module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-free": "#ff3f00",
        "green-free": "#02b176",
        "gray-free": "#5d5d5f",
        "gray-free-2": "#696666",
        "twitter":"#03a9f4",
        "facebook": "#1976d2"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
