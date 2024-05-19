import Body from "./Footer"
import { Footer } from "./Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "вітаю в Базисі!",
  description: "a website to welcome newcomers to the Basis school.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body>
          {children}

        
      </Body>
    </html>
  );
}
