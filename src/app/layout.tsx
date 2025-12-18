import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Second Brain — AI replicas with source-cited answers",
  description:
    "Create AI replicas of your best thinkers. Get source-cited feedback instantly without scheduling meetings.",
  icons: {
    icon: "/brain-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[var(--bg-light)]`}>
        {children}
      </body>
    </html>
  );
}
