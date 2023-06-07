import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./product.type";

const initialState: Product = {
  _id: "",
  name: "",
  productAmount: 0,
  price: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increaseAmount: (state) => {
      state.productAmount += 1;
    },
    decreaseAmount: (state) => {
      state.productAmount -= 1;
    },
    setProduct: (state, { payload }: PayloadAction<Product>) => {
      state = payload;
    },
  },
});

export const { increaseAmount, decreaseAmount, setProduct } =
  productSlice.actions;
