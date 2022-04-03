module.exports = {
  mode: "jit",
  purge: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_51: "#fafbff",
        white_A700_b2: "#ffffffb2",
        blue_A100: "#7cb8f7",
        bluegray_500_19: "#707c9719",
        pink_700_26: "#c71c4a26",
        gray_50: "#fdfbfd",
        blue_500_bf: "#298cf2bf",
        blue_500_26: "#298cf226",
        green_A700: "#00c305",
        pink_A200: "#ff3366",
        gray_500_40: "#ababab40",
        blue_500_1a: "#298cf21a",
        black_900_05: "#00000005",
        blue_500_3f: "#2a8bf23f",
        bluegray_500_7f: "#707c977f",
        bluegray_500_b2: "#707c97b2",
        blue_500: "#2a8bf2",
        gray_900: "#0d1c2e",
        bluegray_500_26: "#707d9626",
        bluegray_500_27: "#707c9726",
        green_A700_3f: "#00c3053f",
        gray_101: "#f5f4fb",
        gray_300: "#dadada",
        gray_100: "#f3f3fb",
        black_900_0d: "#0000000d",
        lime_900_26: "#99523026",
        bluegray_500: "#707c97",
        white_A700_26: "#ffffff26",
        white_A700_bf: "#ffffffbf",
        bluegray_200: "#b7bdcb",
        blue_300: "#60a9f6",
        pink_A200_3f: "#ff33663f",
        white_A700: "#ffffff",
      },
      boxShadow: {
        bs8: "1px 1px  50px 0px #ffffff26",
        bs9: "1px 1px  50px 0px #ababab40",
        bs1: "4px 0px  25px 0px #298cf2bf",
        bs7: "1px 1px  50px 0px #c71c4a26",
        bs3: "10px 10px  50px 0px #298cf21a",
        bs6: "0px 10px  25px 0px #0000000d",
        bs5: "10px 6px  25px 0px #298cf226",
        bs4: "1px 1px  50px 0px #707d9626",
        bs2: "1px 1px  50px 0px #99523026",
        bs: "23.859647750854492px 5.614035129547119px  50px 0px #00000005",
      },
      borderWidth: { bw: "none", bw5: "5px", bw15: "1.5px" },
      borderRadius: {
        radius2: "2px",
        radius3: "3px",
        radius6: "6px",
        radius10: "10px",
        radius20: "20px",
        radius50: "50%",
        radius100: "100px",
      },
      fontFamily: { ttnorms: "TT Norms" },
      fontSize: {
        fs7: "7px",
        fs8: "8px",
        fs9: "9px",
        fs10: "10px",
        fs11: "11px",
        fs12: "12px",
        fs13: "13px",
        fs14: "14px",
        fs15: "15px",
        fs16: "16px",
        fs18: "18px",
        fs20: "20px",
        fs21: "21px",
        fs24: "24px",
        fs27: "27px",
        fs32: "32px",
        fs36: "36px",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#f3f3fb,#fdfbfd)",
        gradient1: "linear-gradient(170.71645deg ,#60a9f6,#2a8bf2)",
        gradient2: "linear-gradient(165.40343deg ,#60a9f6,#2a8bf2)",
        gradient3: "linear-gradient(153.43495deg ,#60a9f6,#2a8bf2)",
        gradient4: "linear-gradient(165.96376deg ,#7cb8f7,#2a8bf2)",
      },
      lineHeight: {
        lh15: "15px",
        lh17: "17px",
        lh19: "19px",
        lh23: "23px",
        lh2600: "26.00px",
      },
      letterSpacing: { ls1: "1px", ls11: "-1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};