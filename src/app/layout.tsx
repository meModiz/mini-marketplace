import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavigationBar/Navbar";
import React from "react";
import ThemeProvider from "@/utils/ThemeProvider";
import BackgroundProvider from "@/components/BackgroundProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`antialiased min-w-screen h-fit text-black dark:text-white`}
        >
          <BackgroundProvider>
            <Navbar />
            {children}
          </BackgroundProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
