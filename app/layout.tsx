import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./_header/header";
import { Footer } from "./footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background antialiased",
          ebGaramond.variable,
        )}>
          <ThemeProvider>
            <div className="mx-auto w-full">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
          </body>
    </html>
  );
}