import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] })

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Component Library",
  description: "Created by Dante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
