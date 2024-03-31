/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Full_Slider_Bar: "hsl(174, 77%, 80%)",
        Slider_Backround: "hsl(174, 86%, 45%)",
        Discount_Background: "hsl(14, 92%, 95%)",
        Discount_Text: "hsl(15, 100%, 70%)",
        CTA_Text: "hsl(226, 100%, 87%)",
        Main_Background: "hsl(230, 100%, 99%)",
        Empty_Slider_Bar: "hsl(224, 65%, 95%)",
        Toggle_Background: "hsl(223, 50%, 87%)",
        Text: "hsl(225, 20%, 60%)",
        Text_CTA_Background: "hsl(227, 35%, 25%)",
      },
      fontFamily: {
        Manrope: "Manrope",
      },
      boxShadow: {
        thumb: "0 16px 16px 8px hsl(174, 77%, 80%)",
      },
    },
  },
  plugins: [],
};
