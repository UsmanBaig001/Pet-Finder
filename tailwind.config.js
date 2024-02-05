/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#6504B5",
        customGrey: "#EFEEF1",
      },
      screens:{
        'xsm':{'min':'1px', 'max':'393px'},
        'xx' :{'min': '1px' , 'max' : '639px'},
        'footerBug1' :{'min': '1024px' , 'max' : '1237px'},
        'footerBug2' :{'min': '825px' , 'max' : '1023px'},
        'footerBug3' :{'min': '1238px' , 'max' : '1297px'},
      }
    },
  },
  plugins: [],
};
