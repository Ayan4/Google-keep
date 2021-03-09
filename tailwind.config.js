module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        cus: "7px 7px 14px #d5d5d5, -7px -7px 14px #ebebeb"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
