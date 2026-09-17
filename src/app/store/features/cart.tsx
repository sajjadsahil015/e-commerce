import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Carts } from "../../utils/type";

const initialState: Carts[] = [];

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<Carts, "uuid">>) {
      const existingItem = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );

      if (existingItem) {
        existingItem.qty += action.payload.qty || 1;
      } else {
        const uuid = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        state.push({ ...action.payload, uuid });
      }
    },
    delFromCart(state, action: PayloadAction<string | number | undefined>) {
      return state.filter((val) => val.uuid !== action.payload);
    },
    addCart(state, action: PayloadAction<{ uuid?: string | number; id?: number; color?: string; size?: string }>) {
      const obj = state.find(
        (val) =>
          (action.payload.uuid && val.uuid === action.payload.uuid) ||
          (val.id === action.payload.id &&
            val.color === action.payload.color &&
            val.size === action.payload.size)
      );
      if (obj) {
        obj.qty += 1;
      }
    },
    subtractCart(state, action: PayloadAction<{ uuid?: string | number; id?: number; color?: string; size?: string }>) {
      const obj = state.find(
        (val) =>
          (action.payload.uuid && val.uuid === action.payload.uuid) ||
          (val.id === action.payload.id &&
            val.color === action.payload.color &&
            val.size === action.payload.size)
      );
      if (obj) {
        if (obj.qty > 1) {
          obj.qty -= 1;
        } else {
          return state.filter((val) => val.uuid !== obj.uuid);
        }
      }
    },
    clearCart() {
      return [];
    }
  },
});

export const { addToCart, delFromCart, addCart, subtractCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
