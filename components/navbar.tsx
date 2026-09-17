"use client"

import Link from "next/link";
import logo from "../public/logo.png";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./navLink";
import Image from "next/image";
import { useAppSelector } from "@/src/app/store/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + (item.qty || 1), 0);

  return (
    <header className="sticky top-0 z-50 bg-mywhite/95 backdrop-blur-md border-b border-gray-200/70">
      <div className="navbar bg-transparent px-2 sm:px-4 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="p-2 text-2xl lg:hidden text-myBlackHead hover:text-myOrange transition-colors cursor-pointer"
            >
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-mywhite rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-gray-200/80 font-medium text-myBlackHead"
            >
              <li>
                <Link href="/" className="py-2 hover:text-myOrange">Home</Link>
              </li>
              <li>
                <details>
                  <summary className="py-2 hover:text-myOrange">Women Collections</summary>
                  <ul className="p-2 bg-white/80 rounded-lg">
                    <li>
                      <Link href="/tops" className="py-1.5 hover:text-myOrange">Tops</Link>
                    </li>
                    <li>
                      <Link href="/pants" className="py-1.5 hover:text-myOrange">Pants</Link>
                    </li>
                    <li>
                      <Link href="/accessories" className="py-1.5 hover:text-myOrange">Accessories & Jewelry</Link>
                    </li>
                    <li>
                      <Link href="/shoes" className="py-1.5 hover:text-myOrange">Shoes</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/about" className="py-2 hover:text-myOrange">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="py-2 hover:text-myOrange">Contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="hidden lg:flex items-center">
            <Image
              src={logo}
              alt="Women's Fashion Logo"
              width={110}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        <div className="navbar-center">
          <Link href="/" className="flex lg:hidden items-center">
            <Image
              src={logo}
              alt="Women's Fashion Logo"
              width={90}
              priority
              className="object-contain"
            />
          </Link>
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>

        <div className="navbar-end">
          <Link
            href="/cart"
            aria-label="View Shopping Cart"
            className="cursor-pointer pr-2 group relative p-2 rounded-full hover:bg-gray-200/60 transition-colors"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-myBlackHead group-hover:text-myOrange duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="badge badge-sm indicator-item font-bold text-mywhite bg-myOrange h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs shadow-sm">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
