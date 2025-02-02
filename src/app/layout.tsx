import type { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WorkSans = localFont({
  src: "./fonts/WorkSans-VariableFont_wght.ttf",
  variable: "--font-work-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kaabil - Jobseeker",
  description: "A Job portal by kaabil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${WorkSans.variable} ${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
