/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
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
    fontFamily: {
      "space-grotesk": "Space Grotesk",
    },
    fontSize: {
      headline: [
        "4.325rem",
        {
          fontWeight: "700",
          lineHeight: "3.75rem",
        },
      ],
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
        },
      ],
      text1: [
        "1.125rem",
        {
          fontWeight: "400",
        },
      ],
      text2: [
        "1rem",
        {
          fontWeight: "400",
        },
      ],
      text3: [
        "0.875rem",
        {
          fontWeight: "400",
        },
      ],
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
      num: [
        "4.063rem",
        {
          fontWeight: "700",
          lineHeight: "3.75rem",
        },
      ],
      membername: [
        "1.875rem",
        {
          fontWeight: "700",
        },
      ],
    },
    borderRadius: {
      DEFAULT: "0.5rem",
    },
    extend: {
      backgroundImage: {
        pattern: "url('asset/background.png')",
      },
      width: {
        "logo-sm": "2.813rem", //45
        "logo-lg": "20.938rem", //335
        "photo-main": "24.188rem", //387
        "photo-grid": "22.125rem", //354
        "photo-self": "22.5rem", //360
        "icon-sm": "1.25rem", //23
        "icon-sm2": "1.68rem", //27
        "icon-md": "2.625rem", //42
        "component-sm": "2.625rem", //42
        "component-md": "5.125rem", //82
      },
      maxWidth: {
        "paragraf-about": "34.75rem", //556
        "logo-robot": "31.25rem", //740
        "icon-sm2": "1.68rem", //27
      },
      minWidth: {
        "icon-sm2": "1.68rem", //27
      },
      height: {
        footer: "19.625rem", //314
      },
      minHeight: {
        division: "14rem",
      },
      space: {
        navbar: "1.875rem",
        headline: "1.625rem",
        iconfooter: "0.438rem",
        category: "1.875rem",
        gallery: "1.438rem",
        maincontent: "6.938rem",
        index: "7.625rem",
      },
      margin: {
        ycontent: "4.063rem",
        xcontent: "9rem",
        xmaincontent: "5rem",
        dropdown: "2.5rem",
        subtitle: "3.75rem",
        button: "2.188rem",
      },
      padding: {
        yfooter: "1.563rem",
        xfooter: "7rem",
        ydropdown: "0.5rem",
        xdropdown: "0.938rem",
        category: "1.25rem",
        xbtn: "2.5rem",
        ybtn: "1rem",
        xaward: "1.563rem",
        yaward: "2.313rem",
      },
    },
  },
  plugins: [],
};
