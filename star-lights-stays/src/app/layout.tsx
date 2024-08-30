import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Hotel',
  description: 'Hotel desc'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [user, setUser] = useState(true);

  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
