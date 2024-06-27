const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#6D5D6E", // Add your custom color here
      },
    },
  },
  plugins: [],
});
