"use client";

import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Link from "next/link";
import { FaArrowLeft, FaShoppingBag, FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { clearCart } from "../store/features/cart";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartArray = useAppSelector((state) => state.cart);
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cartArray.reduce(
    (sum, item) => sum + (item.price - item.discount) * item.qty,
    0
  );

  const deliveryFee = subtotal >= 2999 || subtotal === 0 ? 0 : 250;
  const grandTotal = Math.max(0, subtotal - appliedDiscount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "SAVE10") {
      const discountAmount = Math.round(subtotal * 0.1);
      setAppliedDiscount(discountAmount);
      toast.success("Promo code SAVE10 applied! 10% discount added.");
    } else if (promoCode.trim().toUpperCase() === "FASHION20") {
      const discountAmount = Math.round(subtotal * 0.2);
      setAppliedDiscount(discountAmount);
      toast.success("Promo code FASHION20 applied! 20% discount added.");
    } else {
      toast.error("Invalid coupon code. Try 'SAVE10' or 'FASHION20'");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      toast.success("Order placed successfully! Thank you for shopping with us.");
      dispatch(clearCart());
    }, 1500);
  };

  if (cartArray.length === 0) {
    return (
      <div className="min-h-[55vh] flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="w-24 h-24 rounded-full bg-myOrange/10 flex items-center justify-center mb-6 text-myOrange">
          <FaShoppingBag className="text-4xl" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-myBlackHead mb-2">
          Your Shopping Bag is Empty
        </h2>
        <p className="text-myBlackPara mb-8 max-w-md text-sm sm:text-base">
          Looks like you haven&apos;t added any items to your bag yet. Discover our latest collections and find styles you&apos;ll love.
        </p>
        <Link
          href="/tops"
          className="inline-flex items-center gap-2 bg-myBlackHead hover:bg-myOrange text-mywhite px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FaArrowLeft className="text-xs" /> Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="my-8">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-myBlackHead">
          Shopping Cart ({cartArray.reduce((acc, item) => acc + item.qty, 0)} items)
        </h1>
        <p className="text-xs sm:text-sm text-myBlackPara mt-1">
          Review your items and proceed to secure checkout.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 items-start">
        {/* Items List */}
        <div className="lg:col-span-2">
          <CartCard />
          <div className="mt-6 flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-myBlackPara hover:text-myOrange transition-colors"
            >
              <FaArrowLeft className="text-xs" /> Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
          <h2 className="text-lg font-bold text-myBlackHead tracking-tight uppercase mb-4">
            Order Summary
          </h2>

          {/* Coupon input */}
          <form onSubmit={handleApplyPromo} className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Promo code (e.g. SAVE10)"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-myOrange uppercase"
            />
            <button
              type="submit"
              className="bg-myBlackHead hover:bg-myOrange text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Apply
            </button>
          </form>

          {/* Price Breakdown */}
          <div className="space-y-3 text-sm font-medium text-myBlackPara pb-4 border-b border-gray-100">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-myBlackHead font-bold">Rs. {subtotal.toLocaleString()}</span>
            </div>

            {appliedDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Promo Discount</span>
                <span>-Rs. {appliedDiscount.toLocaleString()}</span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span>
                {deliveryFee === 0 ? (
                  <span className="text-green-600 font-bold uppercase text-xs">Free</span>
                ) : (
                  <span className="text-myBlackHead">Rs. {deliveryFee}</span>
                )}
              </span>
            </div>
            {subtotal < 2999 && (
              <p className="text-[11px] text-myOrange font-medium">
                Add Rs. {(2999 - subtotal).toLocaleString()} more for FREE Delivery!
              </p>
            )}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center py-4 border-b border-gray-100">
            <span className="text-base font-bold text-myBlackHead uppercase">Estimated Total</span>
            <span className="text-xl font-extrabold text-myOrange">
              Rs. {grandTotal.toLocaleString()}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="mt-6">
            <Button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-myBlackHead hover:bg-myOrange text-mywhite duration-300 text-sm font-bold py-3.5 rounded-xl cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isCheckingOut ? "Processing Order..." : "Proceed to Checkout"}
            </Button>
          </div>

          {/* Perks */}
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-2 text-xs text-myBlackPara">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-myOrange shrink-0" />
              <span>Secure SSL encrypted checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="text-myOrange shrink-0" />
              <span>Fast tracked dispatch within 24-48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-myOrange shrink-0" />
              <span>Hassle-free 7-day exchange & returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;