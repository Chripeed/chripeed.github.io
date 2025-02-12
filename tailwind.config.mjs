/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "deep-black": "#000000",
      "pure-white": "#FFFFFF",
      "luxurious-gold": "#D4AF37",
      "elegant-gray": "#787878",
      "soft-white": "#F5F5F5",
      "medium-white": "#dcdcdc",
      "champagne-gold": "#FAD6A5",
      "charcoal-gray": "#303030",
      "metallic-silver": "#C0C0C0",
      "onyx-black": "#101010",
      "light-gold": "#EEDC82",
      "steel-gray": "#B0B0B0",
      "graphite-black": "#202020",
      success: "#4BB543",
      error: "#ED0014",
      blue: "#1877F2",
      pink: "#E1306C",
      /*
			'white': '#F8F3EB',
			'khaki': '#E0D7C7',
			'yellow': '#F1E2AD',
			'puce': '#56453E',
			'black': '#211C1D',
			'gold': '#D4AF37'
			*/
    },
    fontFamily: {
      Harietta: ['"harietta"', "sans-serif"],
      Florentino: ['"florentino"', "sans-serif"],
      SortsMillGoudy: ['"sortsMillGoudy"', "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
