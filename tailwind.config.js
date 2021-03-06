module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        "primary-dark": "#AA151B",
      },
      backgroundImage: {
        "hero-md": "url('/images/hero-md.svg')",
      },
      spacing: {
        125: "31.25rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover", "focus"],
      borderWidth: ["hover", "last", "focus"],
    },
  },
  plugins: [],
};
