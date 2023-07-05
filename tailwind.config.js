/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "#1f1f38",
        "bg-variant": "#2c2c6c",
        primary: "#4db4ff",
        "primary-variant": "rgba(77, 181, 255, 0.4)",
        light: "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
