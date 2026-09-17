import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  title: {
    default: "Women's Fashion | Trendy & Elegant Apparel",
    template: "%s | Women's Fashion",
  },
  description: "Discover the latest trends in women's tops, pants, accessories, and shoes. Premium quality fabrics and timeless elegance designed for every modern woman.",
  keywords: ["women fashion", "clothes", "tops", "pants", "shoes", "accessories", "jewelry", "pakistan fashion", "ecommerce"],
  openGraph: {
    title: "Women's Fashion | Trendy & Elegant Apparel",
    description: "Discover the latest trends in women's tops, pants, accessories, and shoes. Premium quality fabrics and timeless elegance designed for every modern woman.",
    url: "/",
    siteName: "Women's Fashion",
    images: [
      {
        url: "/heroPic.jpg",
        width: 1200,
        height: 630,
        alt: "Women's Fashion Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Fashion | Trendy & Elegant Apparel",
    description: "Discover the latest trends in women's tops, pants, accessories, and shoes.",
    images: ["/heroPic.jpg"],
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
        className={`${geistSans.className} ${geistMono.className} bg-mywhite text-myBlackHead min-h-screen flex flex-col antialiased selection:bg-myOrange selection:text-white`}
      >
        <Providers>
          <Navbar />
          <main className="max-w-[92%] xl:max-w-7xl mx-auto w-full flex-grow">
            {children}
          </main>
          <div className="max-w-[92%] xl:max-w-7xl mx-auto w-full">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
