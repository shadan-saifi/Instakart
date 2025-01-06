'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar";
import NavItems from "@/components/NavItems";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
          <Navbar />
          <NavItems />
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
