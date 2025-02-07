import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andi Rayka - Frontend Developer",
  description:
    "Frontend developer specializing in building responsive and performant web applications with React, Next.js, and TypeScript",
  keywords: [
    "frontend developer",
    "web development",
    "React",
    "Next.js",
    "UI/UX",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  twitter: {
    card: "summary_large_image",
    title: "Andi Rayka - Frontend Developer",
    description:
      "Frontend developer specializing in building responsive and performant web applications",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
