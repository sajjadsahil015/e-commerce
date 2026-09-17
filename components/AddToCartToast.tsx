"use client";

import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/src/app/store/hooks";
import { addToCart } from "@/src/app/store/features/cart";
import { FaShoppingCart } from "react-icons/fa";
import { Carts } from "@/src/app/utils/type";

interface AddToCartToastProps {
  cartItem: Omit<Carts, "uuid">;
}

const AddToCartToast = ({ cartItem }: AddToCartToastProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(cartItem));
    toast.success(`${cartItem.title} added to cart!`);
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="group cursor-pointer border bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead duration-300 hover:border-myOrange rounded-lg text-xs sm:text-sm"
    >
      <FaShoppingCart className="mr-2 group-hover:text-myOrange duration-300" />
      Add to Cart
    </Button>
  );
};

export default AddToCartToast;
