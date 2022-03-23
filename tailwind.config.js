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
      maxHeight: {
        menuLg: "calc(100vh - 5rem)",
        menu: "calc(100vh - 3.75rem)",
      },
      height: {
        home: "min(18rem, calc(100vh - 4rem))",
      },
    },
  },
  variants: {
    extend: {
      scale: ["focus-visible"],
      outline: ["focus-visible"],
      fontWeight: ["hover"],
    },
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
    dropShadow: ["hover", "focus"],
  },
  plugins: [],
};
