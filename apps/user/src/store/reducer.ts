import { combineReducers } from "redux";
import { cartSlice } from "./cart/cart.store";
import { productSlice } from "./product/product.store";

export const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  product: productSlice.reducer,
});
