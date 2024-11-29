/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans Devanagari", "ui-sans-serif", "system-ui"],
      serif: ["Laila", "ui-serif"],
      title: ["Akaya Kanadaka"],
    },
    extend: {},
  },
  plugins: [],
};
