module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: `var(--color-primary)`,
        secondary: `var(--color-secondary)`,
      },
      gridTemplateColumns: {
        leftMargin: "auto 1fr",
      },
    },
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
    dropShadow: ["hover", "focus"],
  },
  plugins: [],
};
