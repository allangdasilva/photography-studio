import type { Metadata } from "next";
import { WorkSans, NyghtSerif } from "@/app/ui/fonts";
import "@/app/globals.css";
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer/footer";
import BackToTopButton from "@/app/ui/helper/back-to-top";
import Loader from "@/app/ui/helper/loader";

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
        <BackToTopButton />
        <Loader />
      </body>
    </html>
  );
}
