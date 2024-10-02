import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Container from "@/globals/Container";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TransilvaniaCars",
  description: "Car rental website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Container className='py-4 md:py-8 lg:py-16'>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
