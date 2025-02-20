import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import React from "react";
import ThemeProvider from "@/components/layout/ThemeProvider";
import BackgroundProvider from "@/components/BackgroundProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Mini marketplace",
  description: "Marketplace prototype",
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
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </BackgroundProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
