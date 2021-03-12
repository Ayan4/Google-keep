module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        cus: "0px 3px 15px rgba(0,0,0,0.2)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
