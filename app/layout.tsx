import type { Metadata } from "next";
import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export const metadata: Metadata = {
  title: "Brian Kamau",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background antialiased",
          archivo.variable + " " + libre_franklin.variable,
        )}>{children}</body>
    </html>
  );
}
