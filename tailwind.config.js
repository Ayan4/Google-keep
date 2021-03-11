module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        cus: "7px 7px 8px #d5d5d5, -7px -7px 8px #ebebeb"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
