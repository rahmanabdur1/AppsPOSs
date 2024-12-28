import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.tsx",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#D1E8FF', // Replace this with your desired light color
        'primary-dark': '#0056B3',  // Optional: for hover effects
      },
      screens: {
        'custom-600px': '600px', // Add a custom breakpoint for 200px
      },
    },
  },
  plugins: [],
} satisfies Config;
