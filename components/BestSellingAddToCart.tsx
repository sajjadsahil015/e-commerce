"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/src/app/store/hooks";
import { useState, useEffect } from "react";
import { addToCart } from "@/src/app/store/features/cart";
import { toast } from "react-toastify";

interface BestSellingAddToCartProps {
  slug: string;
}

const BestSellingAddToCart = ({ slug }: BestSellingAddToCartProps) => {
  const products = useAppSelector((state) => state.products);
  const product = products.find((val) => val.slug === slug);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    if (product) {
      if (!selectedColor && product.color?.length > 0) {
        setSelectedColor(product.color[0]);
      }
      if (!selectedSize && product.size?.length > 0) {
        setSelectedSize(product.size[0]);
      }
    }
  }, [product, selectedColor, selectedSize]);

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image[0],
        slug: product.slug,
        price: product.price,
        color: selectedColor || product.color[0] || "",
        category: product.category,
        desc: product.desc,
        size: selectedSize || product.size[0] || "",
        qty: 1,
        discount: product.discount,
      })
    );
    toast.success(`${product.title} added to cart!`);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button className="group cursor-pointer border bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead duration-300 hover:border-myOrange rounded-lg text-xs sm:text-sm">
          <FaShoppingCart className="mr-2 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4 shadow-xl border border-gray-200 rounded-xl bg-mywhite">
        <h4 className="font-bold text-myBlackHead text-sm mb-3">Select Options</h4>

        {/* Size Selection */}
        <div className="mb-3">
          <label className="block text-xs font-semibold text-myBlackPara mb-1 uppercase tracking-wider">
            Size: <span className="text-myOrange">{selectedSize || product.size[0]}</span>
          </label>
          <div className="flex flex-wrap gap-1.5">
            {product.size.map((sz, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`text-xs px-2.5 py-1 rounded border uppercase font-medium transition-all ${
                  (selectedSize || product.size[0]) === sz
                    ? "bg-myBlackHead text-mywhite border-myBlackHead"
                    : "bg-white text-myBlackHead border-gray-300 hover:border-myOrange"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-myBlackPara mb-1 uppercase tracking-wider">
            Color
          </label>
          <div className="flex items-center gap-2">
            {product.color.map((col, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedColor(col)}
                className={`relative rounded-full w-6 h-6 border-2 transition-all flex items-center justify-center ${
                  (selectedColor || product.color[0]) === col
                    ? "border-myOrange scale-110 shadow-sm ring-1 ring-myOrange"
                    : "border-gray-300 hover:scale-105"
                }`}
                style={{ backgroundColor: col }}
                title={col}
              >
                {(selectedColor || product.color[0]) === col && (
                  <FaCheck
                    className={`text-[10px] ${
                      col.toLowerCase() === "#ffffff" || col.toLowerCase() === "#fafafa"
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Add Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full group cursor-pointer border bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead duration-300 hover:border-myOrange rounded-lg text-xs sm:text-sm font-semibold"
        >
          <FaShoppingCart className="mr-2 group-hover:text-myOrange duration-300" />
          Confirm & Add
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default BestSellingAddToCart;
