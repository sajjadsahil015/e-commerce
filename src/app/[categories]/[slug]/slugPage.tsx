'use client'

import { FaHeart, FaPlus, FaMinus, FaStar, FaArrowLeft, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SlugComponent from "@/components/slugComponent";
import { useAppDispatch, useAppSelector } from "@/src/app/store/hooks";
import { useState } from "react";
import AddToCartToast from "@/components/AddToCartToast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addToCart } from "@/src/app/store/features/cart";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const product = products.find((item) => item.slug === params.slug);

  const [selectedColor, setSelectedColor] = useState<string>(product ? product.color[0] : "");
  const [selectedSize, setSelectedSize] = useState<string>(product ? product.size[0] : "");
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <h2 className="text-3xl font-extrabold text-myBlackHead mb-3">Product Not Found</h2>
        <p className="text-myBlackPara mb-6 max-w-md">
          Sorry, the product you are looking for might have been removed or does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-myBlackHead text-mywhite px-6 py-3 rounded-lg hover:bg-myOrange duration-300 font-semibold text-sm"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  const effectivePrice = product.price - product.discount;
  const totalPrice = effectivePrice * quantity;
  const originalTotalPrice = product.price * quantity;

  const currentCartItem = {
    id: product.id,
    title: product.title,
    image: product.image[0],
    slug: product.slug,
    price: product.price,
    color: selectedColor || product.color[0],
    category: product.category,
    desc: product.desc,
    size: selectedSize || product.size[0],
    qty: quantity,
    discount: product.discount,
  };

  const handleBuyNow = () => {
    dispatch(addToCart(currentCartItem));
    router.push("/cart");
  };

  return (
    <div className="my-10">
      <div className="mb-6">
        <Link
          href={`/${product.category}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-myBlackPara hover:text-myOrange duration-200 capitalize"
        >
          <FaArrowLeft className="text-xs" /> Back to {product.category}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Gallery */}
        <div className="w-full flex justify-center">
          <SlugComponent image={product.image} />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-myOrange mb-1">
            {product.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-myBlackHead tracking-tight mb-2">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-myOrange text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-xs font-semibold text-myBlackPara">(5.0 / 48 reviews)</span>
          </div>

          {/* Description */}
          <p className="text-base text-myBlackPara leading-relaxed mb-6 font-normal">
            {product.desc}
          </p>

          {/* Color Picker */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-myBlackHead mb-2 tracking-wide uppercase">
              Color
            </h3>
            <div className="flex items-center gap-3">
              {product.color.map((colorItem, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedColor(colorItem)}
                  className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                    selectedColor === colorItem
                      ? "border-myOrange ring-2 ring-myOrange/50 scale-110"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  style={{ backgroundColor: colorItem }}
                  title={colorItem}
                >
                  {selectedColor === colorItem && (
                    <FaCheck
                      className={`text-[10px] ${
                        colorItem.toLowerCase() === "#ffffff" || colorItem.toLowerCase() === "#fafafa"
                          ? "text-black"
                          : "text-white"
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Picker */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-myBlackHead mb-2 tracking-wide uppercase">
              Select Size: <span className="text-myOrange uppercase">{selectedSize}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.size.map((sizeOption, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedSize(sizeOption)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg border uppercase transition-all duration-200 ${
                    selectedSize === sizeOption
                      ? "bg-myBlackHead text-mywhite border-myBlackHead shadow"
                      : "bg-white text-myBlackHead border-gray-300 hover:border-myOrange"
                  }`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-sm font-bold text-myBlackHead tracking-wide uppercase">
              Quantity
            </h3>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
              <button
                type="button"
                disabled={quantity <= 1}
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="px-3 py-2 text-myBlackHead hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <FaMinus className="text-xs" />
              </button>
              <span className="px-4 py-2 font-bold text-sm text-myBlackHead min-w-[40px] text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-2 text-myBlackHead hover:bg-gray-100 transition"
              >
                <FaPlus className="text-xs" />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            {/* Price display */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-extrabold text-myBlackHead">
                Rs. {totalPrice.toLocaleString()}
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    Rs. {originalTotalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-myOrange bg-myOrange/10 px-2.5 py-1 rounded-full">
                    Save Rs. {(product.discount * quantity).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <AddToCartToast cartItem={currentCartItem} />
              </div>
              <Button
                onClick={handleBuyNow}
                className="flex-1 group cursor-pointer bg-myOrange hover:bg-myOrange/90 text-mywhite border-0 rounded-lg text-sm font-semibold h-10 transition-all shadow hover:shadow-md"
              >
                <FaHeart className="mr-2" />
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
