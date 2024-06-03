import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '50px',
        '5xl': '75px'
      },
      fontSize: {
        'large': '200px'
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
       
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        cheapSignage: ['CheapSignage Standard', 'sans-serif'],
      },  
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        80: "80px",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        750: "740px",
        850: "850px",
        1000: "1000px"
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 0 rgba(241, 201, 0, 0.4)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(241, 201, 0, 0.8)'
          },
        },
      },
      animation: {
        glow: 'glow 1s infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
