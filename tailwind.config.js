/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],

  daisyui: {
    themes: ["lofi", "business", "retro"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
};

