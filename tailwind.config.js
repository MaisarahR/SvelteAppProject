/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    [require("daisyui")],
    require("daisyui")],

  daisyui: {
    themes: ["lofi", "business"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "business", // name of one of the included themes for dark mode
  },
};

