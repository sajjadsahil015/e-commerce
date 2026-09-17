"use client";

import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="text-gray-600 body-font border-t border-gray-200 mt-20 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-left">
          {/* Company */}
          <div>
            <h2 className="text-lg font-bold tracking-tight text-myBlackHead mb-4 uppercase text-sm">
              Company
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-bold tracking-tight text-myBlackHead mb-4 uppercase text-sm">
              Collections
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/tops"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Women Tops & Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/pants"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Pants & Trousers
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Jewelry & Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/shoes"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Footwear & Heels
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h2 className="text-lg font-bold tracking-tight text-myBlackHead mb-4 uppercase text-sm">
              Customer Care
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-myBlackPara hover:text-myOrange transition-colors"
                >
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <span className="text-sm font-medium text-myBlackPara">
                  Free Delivery on orders &gt; Rs. 2999
                </span>
              </li>
              <li>
                <span className="text-sm font-medium text-myBlackPara">
                  7-Day Money Back Guarantee
                </span>
              </li>
              <li>
                <span className="text-sm font-medium text-myBlackPara">
                  24/7 Dedicated Support
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-bold tracking-tight text-myBlackHead mb-4 uppercase text-sm">
              Stay in Touch
            </h2>
            <p className="text-sm text-myBlackPara mb-3">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-myOrange/30 focus:border-myOrange text-sm py-2 px-3 outline-none text-myBlackHead transition-all"
              />
              <button
                type="submit"
                className="w-full bg-myBlackHead hover:bg-myOrange text-mywhite text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow cursor-pointer"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Women's Fashion" width={100} />
          </Link>
          <p className="text-xs text-myBlackPara font-medium text-center">
            &copy; {new Date().getFullYear()} Women&apos;s Fashion. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-500 hover:text-myOrange transition-colors"
            >
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-500 hover:text-myOrange transition-colors"
            >
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 hover:text-myOrange transition-colors"
            >
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;