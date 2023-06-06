import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../product/product.store";

interface Cart {
  products: Product[];
  price: number;
}
const initialState: Cart = {
  price: 0,
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
