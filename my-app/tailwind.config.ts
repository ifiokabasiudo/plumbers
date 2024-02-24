import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero-bg.png')",
        'bg-1': "url('/image1.jpg')",
        'bg-2': "url('/image2.jpg')",
        'bg-3': "url('/image3.jpg')",
        'bg-4': "url('/image4.jpg')",
        'bg-5': "url('/image5.jpg')",
        'bg-6': "url('/image6.jpg')",
        'bg-7': "url('/image7.jpg')",
        'bg-8': "url('/image8.jpg')",
      },fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
