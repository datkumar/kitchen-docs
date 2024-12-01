/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans Devanagari", "ui-sans-serif", "system-ui"],
      serif: ["Laila", "ui-serif"],
      title: ["Akaya Kanadaka"],
      mono: ["monospace"],
    },
    extend: {},
  },
  plugins: [],
};
