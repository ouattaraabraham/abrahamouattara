/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      screens: {
        'mobil-sm': '320px',
        'mobil': '480px',
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',
        '2xl': '1536px',
      },

      keyframes: {
        heroAnimation : {
          '0%': {borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'},
          '50%': {borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'},
          '100%': {borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}
        }
      },

      animation: {
        heroAnimation: 'heroAnimation 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

