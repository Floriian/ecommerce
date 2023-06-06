import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cart.store";
import { productSlice } from "./product/product.store";
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
