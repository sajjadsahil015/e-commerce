'use client';

import React from 'react';
import BestSellingCard from "@/components/bestSellingCard";
import { useAppSelector } from "../src/app/store/hooks";
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface CategoryContentProps {
  props: string;
}

const CategoryContent = ({ props }: CategoryContentProps) => {
  const products = useAppSelector((state) => state.products);
  const normalizedCategory = decodeURIComponent(props).toLowerCase();
  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === normalizedCategory
  );

  return (
    <div className="my-12">
      {/* Category Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-myOrange block mb-1">
          Collection
        </span>
        <h1 className="scroll-m-20 text-3xl lg:text-4xl font-extrabold tracking-tight text-myBlackHead capitalize">
          {props}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        <p className="text-sm text-myBlackPara mt-3 max-w-md mx-auto">
          Explore our exclusive range of high quality {props} designed for contemporary style and utmost comfort.
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((item, i) => (
            <BestSellingCard
              key={item.id || i}
              src={item.image[0]}
              alt={item.title}
              title={item.title}
              desc={item.desc}
              price={item.price}
              slug={item.slug}
              category={item.category}
              discount={item.discount}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-[40vh] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl font-bold text-myBlackHead mb-2">
            No products found in &quot;{props}&quot;
          </h2>
          <p className="text-myBlackPara mb-6 max-w-sm">
            We currently don&apos;t have items in this category or check back soon for our new collection!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-myBlackHead text-mywhite px-5 py-2.5 rounded-lg hover:bg-myOrange duration-300 font-semibold text-sm"
          >
            <FaArrowLeft className="text-xs" /> Back to Store
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryContent;