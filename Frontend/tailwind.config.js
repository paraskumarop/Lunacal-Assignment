/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outer-shadow': '5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)',
        'custom-inset': 'inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25)',
        'button-shadow':'13.49px 16.87px 67.47px 8.43px rgba(10, 10, 10, 1),-8.43px -16.87px 50.6px -16.87px rgba(72, 91, 113, 1)',
        'right-hr-shadow': '4px 4px 4.9px 0px rgba(0, 0, 0, 0.25)',
        'horiztal-hr-shadow':'0px 4px 4px 0px rgba(0, 0, 0, 0.33)',
        'bottom-right' : '5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)',
        'gallery-inner-shadow': 'inset 0px 4px 10px 2px rgba(0, 0, 0, 0.25) ',
        'add-image-shadows':'inset 0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15) ,inset 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05) ,9px 10px 7.1px 0px rgba(0, 0, 0, 0.4),-0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)',
        'left-right-shadows':'4px 5px 30px 5px rgba(16, 18, 19, 1),-5px -3px 30px -10px rgba(150, 190, 231, 1)',


      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)',
        'main-bg': 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        'hr-gradient' :`linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
        'left-right-bg':'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)'
      },
      fontFamily:{
        'zkarta' : 'Plus Jakarta Sans',
        'Poppins': 'Poppins'
      }
    },
  },
  plugins: [],
}

