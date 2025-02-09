import type { Metadata } from "next";
import { Poppins} from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Collweb",
  description: "A collection of beautiful websites. ✨🚀 ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://collweb.vercel.app",
  
    images: [
      {
        url: "https://collweb.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "collweb",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased ` }
      >
        {children}
      </body>
    </html>
  );
}
