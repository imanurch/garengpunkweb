/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primarycolor: "#11112B",
      highlightcolor: "#F3A712",
      activepage: "#F3A712",
      completecolor: "#DB2B39",
      addingcolor: "#9AC2C9",
      lightgreycolor: "#F5F5F5",
      lightcolor: "#FFF",
    },
    fontSize: {
      // headline: "4.325rem", //70
      // title1: "3rem", //48px
      // title2: "2.375rem", //38
      // title3: "1.5rem", //24
      // text1: "1.125rem", //18
      // text2: "1rem", //16
      // text3: "0.875rem", //14
      // btn1: "1.125rem", //18
      // btn2: "1rem", //16
      // logoname: "1.125rem", //18
      headline: [
        "4.325rem",
        {
          fontWeight: "700",
          lineHeight: "3.75rem",
        },
      ],
      // title1: [
      //   "3rem",
      //   {
      //     fontWeight: "600",
      //     lineHeight: "2.5rem",
      //   },
      // ],
      title2: [
        "2.375rem",
        {
          fontWeight: "700",
          lineHeight: "2rem",
        },
      ],
      title3: [
        "1.5rem",
        {
          fontWeight: "500",
          // lineHeight: "2.5rem",
        },
      ],
      text1: [
        "1.125rem",
        {
          fontWeight: "400",
          // lineHeight: "0.938rem",
        },
      ],
      text2: [
        "1rem",
        {
          fontWeight: "400",
          // lineHeight: "2.5rem",
        },
      ],
      text3: [
        "0.875rem",
        {
          fontWeight: "400",
          // lineHeight: "2.5rem",
        },
      ],
      // btn1: [
      //   "1.125rem",
      //   {
      //     fontWeight: "700",
      //     lineHeight: "2.5rem",
      //   },
      // ],
      btn2: [
        "1rem",
        {
          fontWeight: "400",
          lineHeight: "0.875rem",
        },
      ],
      logoname: [
        "1.125rem",
        {
          fontWeight: "500",
          lineHeight: "0.938rem",
        },
      ],
      activepage: [
        "1rem",
        {
          fontWeight: "700",
        },
      ],
    },
    borderRadius: {
      DEFAULT: "0.5rem",
    },
    extend: {
      width: {
        "logo-robot": "46.25rem", //740
        "logo-sm": "2.813rem", //45
        "logo-lg": "20.938rem", //335
        "photo-main": "24.188rem", //387
        "photo-grid": "22.125rem", //354
        "photo-self": "22.5rem", //360
        "icon-sm": "1.25rem", //23
        "icon-md": "2.625rem", //42
        "component-sm": "2.625rem", //42
        "component-md": "5.125rem", //82
      },
      maxWidth: {
        "paragraf-about": "34.75rem", //556
      },
      space: {
        navbar: "1.875rem",
        headline: "1.625rem",
        iconfooter: "0.438rem",
        category: "1.875rem",
        gallery: "1.438rem",
        maincontent: "6.938rem",
      },
      margin: {
        ycontent: "4.063rem",
        xcontent: "9rem",
        xmaincontent: "3.25rem",
        dropdown: "2.5rem",
        subtitle: "3.75rem",
        button: "2.188rem",
      },
      padding: {
        yfooter: "1.563rem",
        xfooter: "7rem",
        ydropdown: "0.5rem",
        xdropdown: "0.938rem",
        category: "3.75rem",
        xbtn: "2.5rem",
        ybtn: "1rem",
      },
      dropShadow: {
        sm: "4px 8px 18px 0px rgba(41, 51, 92, 0.20)",
      },
    },
  },
  plugins: [],
};