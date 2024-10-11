import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import NavBar from "@/components/NavBar";
import ToastProvider from "@/provider/ToastProvider";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-com front",
  description: "E-com front part",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <ToastProvider />
              <NavBar />
              {children}
              <Footer />
            </ThemeProvider>
          </ThemeContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
