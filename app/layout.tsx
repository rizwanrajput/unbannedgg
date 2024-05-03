import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Script from "next/script";
import { ModalProvider } from "@/providers/ModalProvider";
import RecoilProvider from "@/providers/RecoilProvider";
import SnowProvider from "@/providers/SnowProvider";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SatoshiFont = localFont({
  src: "./SatoshiVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNBANNED.GG",
  description:
    "UB.GG started out in 2021, ever since then we have provided industry leading products at the lowest prices while still maintaining the highest quality products on the market,our objective is to expand our community and continue providing our customers with the best products at the cheapest rates.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SatoshiFont.className}>
        <RecoilProvider>
          {/* <SnowProvider /> */}
          <Script
            src="https://cdn.sellix.io/static/js/embed.js"
            strategy="beforeInteractive"
          />
          <link
            href="https://cdn.sellix.io/static/css/embed.css"
            rel="stylesheet"
          />
          <ModalProvider />
          <main>{children}</main>
        </RecoilProvider>
      </body>
    </html>
  );
}
