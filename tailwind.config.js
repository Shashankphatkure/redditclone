/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#1B2A49", // Navy blue
          light: "#2E2E3A", // Deep gray
          dark: "#141E35", // Darker navy for dark mode
        },
        // Background colors
        background: {
          light: "#FFFFFF",
          dark: "#1A1A1F",
          alt: {
            light: "#F1F1F1",
            dark: "#2E2E3A",
          },
        },
        // Text colors
        text: {
          primary: {
            light: "#1B2A49",
            dark: "#FFFFFF",
          },
          secondary: {
            light: "#4B5563",
            dark: "#9CA3AF",
          },
        },
        // Accent colors
        accent: {
          yellow: {
            DEFAULT: "#FFC107",
            hover: "#FFB300",
            dark: "#FFD54F",
          },
          green: {
            DEFAULT: "#34A853",
            hover: "#2E9648",
            dark: "#4CAF50",
          },
        },
        // Interactive elements
        interactive: {
          blue: {
            DEFAULT: "#1E90FF",
            hover: "#1873CC",
            dark: "#40A9FF",
          },
          red: {
            DEFAULT: "#FF6D6D",
            hover: "#FF5252",
            dark: "#FF8A8A",
          },
        },
      },
    },
  },
  plugins: [],
};
