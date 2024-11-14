/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "background-light": "#FFFFFF",
        "background-dark": "#1A1A1B",
        "background-alt-light": "#F6F7F8",
        "background-alt-dark": "#272729",
        "text-primary-light": "#1C1C1C",
        "text-primary-dark": "#D7DADC",
        "text-secondary-light": "#787C7E",
        "text-secondary-dark": "#818384",
        "accent-yellow": "#FFB000",
        "accent-yellow-dark": "#D4921B",
        "accent-yellow-hover": "#FFA000",
        "accent-green": "#46D160",
        "accent-green-dark": "#3AA04D",
      },
    },
  },
  plugins: [],
};
