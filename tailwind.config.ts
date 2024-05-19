import type { Config } from "tailwindcss";


const config: Config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo-light":"url('/public/BasisLogoLight.svg')",
        "logo-dark":"url('/public/BasisLogodark.svg')",

      },
      
      colors: {

        "accent-light-25":"#ff9999",
        "accent-light-50":"#e07070",
        "accent-light-100":"#ec1c24",
        "accent-light-200":"#c61016",
        "accent-light-300":"#970c11",
        "accent-dark-25":"#e06c70",
        "accent-dark-50":"#d74247",
        "accent-dark-100":"#b1252a",
        "accent-dark-200":"#871d20",
        "accent-dark-300":"#5d1416",
      },
      screens: {
        "ssm": "390px",
        "md":"1025px",
        "3xl":"2040px",
      }
    },
  },
  plugins: [],
  
};
export default config;