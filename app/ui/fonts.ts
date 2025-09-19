import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const WorkSans = Work_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-work-sans",
});
export const NyghtSerif = localFont({
  src: [
    {
      path: "../../public/fonts/NyghtSerif-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NyghtSerif-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/NyghtSerif-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-nyght-serif",
});
