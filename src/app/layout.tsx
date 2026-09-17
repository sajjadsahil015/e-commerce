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
  title: {
    default: "Women's Fashion | Trendy & Elegant Apparel",
    template: "%s | Women's Fashion",
  },
  description: "Discover the latest trends in women's tops, pants, accessories, and shoes. Premium quality fabrics and timeless elegance designed for every modern woman.",
  keywords: ["women fashion", "clothes", "tops", "pants", "shoes", "accessories", "jewelry", "pakistan fashion", "ecommerce"],
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
