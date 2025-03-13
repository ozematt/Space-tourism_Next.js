import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bellefair = localFont({
  src: [
    {
      path: "./fonts/Bellefair-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bellefair",
});

const barlow = localFont({
  src: [
    {
      path: "./fonts/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-barlow",
});

const barlowCondensed = localFont({
  src: [
    {
      path: "./fonts/BarlowCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Space tourism multi-page website",
  description:
    "A platform for reserving space travel experiences and interplanetary flights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} max-container antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
