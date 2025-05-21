import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BasaFinder",
  description:
    "Discover, compare, and book rental properties with ease on BasaFinder.",
  icons: {
    icon: "/favicon1.png",
    shortcut: "/favicon1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="">
      <body className={` ${robotoMono.className} antialiased`}>
        <Providers>
          <Toaster richColors position="top-center" />

          {children}
        </Providers>
      </body>
    </html>
  );
}
