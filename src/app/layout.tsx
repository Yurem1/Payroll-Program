import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payroll",
  description: "Skills USA Practice Project",
};

interface IRootLayout {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({children}: IRootLayout) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center h-screen bg-gray-50`}>{children}</body>
    </html>
  );
}
