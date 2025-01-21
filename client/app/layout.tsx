import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageContainer from "./components/Containers/PageContainer";
import StoreProvider from "@/store/StoreProvider";
import LayoutProvider from "./components/layout/layout";
import "react-multi-carousel/lib/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arzu Amber",
  description: "ARZUAMBER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-fourthLight  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <LayoutProvider>
            <PageContainer>{children}</PageContainer>
          </LayoutProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
