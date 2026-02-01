import localFont from "next/font/local";

export const euclid = localFont({
  src: [
    {
      path: "../public/fonts/EuclidTriangle-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EuclidTriangle-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/EuclidTriangle-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-euclid",
  display: "swap",
});

export const kugile = localFont({
  src: [
    {
      path: "../public/fonts/Kugile.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-kugile",
  display: "swap",
});

