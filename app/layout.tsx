import type { Metadata } from "next";
import { WorkSans, NyghtSerif } from "@/app/ui/fonts";
import "@/app/globals.css";
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer/footer";
import BackToTopButton from "@/app/ui/helper/back-to-top";
import Loader from "@/app/ui/helper/loader";
import { Slide, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    template: "%s | The Photography Studio",
    default: "The Photography Studio",
  },
  icons: {
    icon: [
      {
        url: "/images/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  description:
    "Eleve suas memórias com The Photography Studio. Oferecemos sessões personalizadas para cada ocasião, garantindo belas imagens que duram para sempre.",
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
        <ToastContainer transition={Slide} toastStyle={{ borderRadius: 0 }} />
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
        <Loader />
      </body>
    </html>
  );
}
