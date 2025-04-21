/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          satoshi: ['"Satoshi Variable"', 'sans-serif'],
        },
        colors: {
          devansh: '#0a0f1c', // fundo exato igual ao Hero dele
        },
        
      },
    }, 
}    
  
