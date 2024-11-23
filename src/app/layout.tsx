import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./components/footer";

const inter = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Carry On Quilting",
  description: "Professional longarm quilting in Naul, Co.Dublin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-custom">
      <body className="font-mono">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
