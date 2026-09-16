import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { siteCopy } from "@/lib/copy";
import { media } from "@/lib/media";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteCopy.seo.title,
  description: siteCopy.seo.description,
  icons: {
    icon: media.favicon,
  },
  openGraph: {
    title: siteCopy.seo.title,
    description: siteCopy.seo.description,
    type: "website",
    images: [
      {
        url: media.og,
        width: 1200,
        height: 630,
        alt: siteCopy.seo.title,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-void font-sans text-signal">
        {children}
      </body>
    </html>
  );
}
