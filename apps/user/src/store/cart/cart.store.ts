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
      /**
       * If product not in cart, add product to cart.
       */
      const productInCart = state.products.find(
        (product) => product._id === payload._id
      );
      if (!productInCart) {
        state.products.push(payload);
      }

      /**
       * If product in cart, increase the product amount by 1.
       */

      if (productInCart) {
        state.products = state.products.map((product) => {
          if (product._id === payload._id) {
            return {
              ...product,
              productAmount: (product.productAmount += 1),
            };
          }
          return product;
        });
      }
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
