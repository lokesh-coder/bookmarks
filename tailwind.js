module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#EB5757",
        whitish: "#FBFCFF",
        "dark-800": "#34395e",
        "dark-900": "#2c3157"
      }
    },
    fontFamily: {
      body: ["'M PLUS 1p'"],
      title: ["'Circular Std Book'"]
    }
  },
  variants: {
    textColor: ["responsive", "hover", "group-hover"]
  },
  plugins: [require("tailwindcss-bg-alpha")()]
};
