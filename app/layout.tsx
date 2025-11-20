import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SecureBank | Advanced Fraud Prevention",
  description: "Next-gen banking security layer with real-time fraud detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "font-sans min-h-screen flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
