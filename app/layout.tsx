import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eemail",
  description: "This design is a copy of a design created by dave (@heyXdave).",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eemail.vercel.app/",
    images: [
      {
        url: "/thumb.jpeg",
        width: 1200,
        height: 630,
        alt: "Eemail",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
