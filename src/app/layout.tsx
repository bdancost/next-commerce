import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next E-Commerce 13",
  description: "Next E-Commerce utilizando Next.js e TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body
          className={clsx(
            `${geistSans.variable} ${geistMono.variable} antialiased bg-slate-700`
          )}
        >
          <Navbar />
          <main className="bg-slate-700 h-screen p-16">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
