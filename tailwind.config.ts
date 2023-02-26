import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
      },
      typography: {},
      variants: {},
      plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
      ],
    },
  },
};
