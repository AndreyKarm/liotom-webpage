import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Roboto
import Script from "next/script";
import "./globals.css";

// Configure Roboto font
const roboto = Roboto({
  weight: ['400', '700'], // Specify desired weights
  subsets: ["latin"],
  variable: "--font-roboto", // Assign a CSS variable
});

// Remove Geist Mono import and configuration if not needed elsewhere
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Liotom Landing",
  description: "Landing page for Liotom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script defer src="https://umami-landing.liotom.me/script.js" data-website-id="5d88266f-7c2c-44b8-9109-266c0a032fde" />
      </head>
      {/* Apply the Roboto font variable */}
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}