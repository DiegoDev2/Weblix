import type { Metadata } from "next";
import { Poppins} from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Weblix",
  description: "A collection of beautiful websites. ✨🚀 ",
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
