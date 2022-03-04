module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: `var(--color-primary)`,
        secondary: `var(--color-secondary)`,
      },
    },
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
