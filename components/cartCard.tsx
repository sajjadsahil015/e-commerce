"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/src/app/store/hooks";
import { Carts } from "@/src/app/utils/type";
import {
  addCart,
  delFromCart,
  subtractCart,
} from "@/src/app/store/features/cart";
import { toast } from "react-toastify";

const CartCard = () => {
  const cartArray: Carts[] = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleDelete = (uuid: string | number | undefined, title: string) => {
    dispatch(delFromCart(uuid));
    toast.info(`${title} removed from cart.`);
  };

  return (
    <div className="space-y-4">
      {cartArray.map((item) => {
        const unitPrice = item.price - item.discount;
        const lineTotal = unitPrice * item.qty;

        return (
          <div
            key={item.uuid}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 shadow-sm gap-4 transition hover:shadow-md"
          >
            {/* Image and details */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-bold text-myBlackHead line-clamp-1 capitalize">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 mt-1 text-xs font-medium text-myBlackPara">
                  <span>
                    Size: <strong className="uppercase">{item.size}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    Color:
                    <span
                      className="inline-block w-3.5 h-3.5 rounded-full border border-gray-300"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </div>
                <div className="mt-2 text-xs font-semibold text-myOrange sm:hidden">
                  Rs. {lineTotal.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
              {/* Quantity Controls */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={item.qty <= 1}
                  onClick={() => dispatch(subtractCart(item))}
                  className="h-8 w-8 p-0 hover:bg-gray-200 text-myBlackHead disabled:opacity-40"
                >
                  <FaMinus className="h-2.5 w-2.5" />
                </Button>
                <span className="px-3 font-bold text-sm text-myBlackHead min-w-[32px] text-center">
                  {item.qty}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => dispatch(addCart(item))}
                  className="h-8 w-8 p-0 hover:bg-gray-200 text-myBlackHead"
                >
                  <FaPlus className="h-2.5 w-2.5" />
                </Button>
              </div>

              {/* Price */}
              <div className="hidden sm:block text-right min-w-[90px]">
                <div className="text-base font-bold text-myBlackHead">
                  Rs. {lineTotal.toLocaleString()}
                </div>
                {item.discount > 0 && (
                  <div className="text-xs text-gray-400 line-through">
                    Rs. {(item.price * item.qty).toLocaleString()}
                  </div>
                )}
              </div>

              {/* Trash */}
              <button
                onClick={() => handleDelete(item.uuid, item.title)}
                className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition cursor-pointer"
                title="Remove item"
              >
                <FaTrash className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartCard;
