import type { Metadata } from "next";
import { WorkSans, NyghtSerif } from "@/app/ui/fonts";
import "@/app/globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";

export const metadata: Metadata = {
  title: "Photography Studio",
  description: "Estúdio de Fotografia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${WorkSans.variable} ${NyghtSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
