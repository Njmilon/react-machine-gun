/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f5fc6c",
        
"secondary": "#249e03",
        
"accent": "#edb7a8",
        
"neutral": "#21242C",
        
"base-100": "#262C54",
        
"info": "#5D7AEE",
        
"success": "#2CD8C4",
        
"warning": "#B88E0F",
        
"error": "#E0527A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
