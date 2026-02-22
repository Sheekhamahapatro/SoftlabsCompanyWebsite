import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "../components/PageTransition";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softlabs Infotech",
  description: "Cyber Security & IT Solutions",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-amber-50 text-black">

        {/* HEADER (UNCHANGED) */}
  
         <Navbar />
        
        {/* ✅ PAGE TRANSITION CLIENT WRAPPER */}
        <PageTransition>
          {children}
        </PageTransition>

        <Chatbot />

      <Footer />
      </body>
    </html>
  );
}
