module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            myBlack: "#17252A",
            lightGreen: {
               100: "#3AAFA9",
               200: "#2B7A78",
            },
            myWhite: {
               100: "#FEFFFF",
               200: "#DEF2F1",
            },
         },
         fontFamily: {
            spartanFont: ["Spartan"],
            spacemonoFont: ["Space Mono"],
         },
         backgroundImage: (theme) => ({ ContactBackground: "url('../img/ContactBackground.jpg')" }),
      },
   },
   variants: {
      extend: {
         translate: ["group-hover"],
         transitionDuration: ["group-hover"],
      },
   },
   plugins: [],
};
