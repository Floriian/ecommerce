import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../product/product.type";

interface Cart {
  products: Product[];
  totalPrice: number;
}
const initialState: Cart = {
  totalPrice: 0,
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      state.products.push(payload);
      state.totalPrice = state.totalPrice + payload.price;
    },
    removeProduct: (state, { payload }: PayloadAction<Product>) => {
      state.products = state.products.filter((p) => p != payload);
      state.totalPrice = state.totalPrice - payload.price;
    },
    resetCart: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, removeProduct, resetCart } = cartSlice.actions;
