import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Nunito as the default font - only essential weights
const nunito = localFont({
  src: [
    {
      path: "../../public/fonts/Nunito-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
});

// Gilroy as secondary font - only essential weights
const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

// Gloock font - add variable property
const gloock = localFont({
  src: [{ path: "../../public/fonts/Gloock-Regular.ttf" }],
  variable: "--font-gloock", // This was missing!
});

export const metadata: Metadata = {
  title: "ADmyBRAND",
  description: "AI Suite for Brand Growth",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${gilroy.variable} ${gloock.variable} font-sans antialiased`}
      
      >
        {children}
      </body>
    </html>
  );
}