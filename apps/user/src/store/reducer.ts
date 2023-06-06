import { combineReducers } from "redux";
import { cartSlice } from "./cart/cart.store";

export const rootReducer = combineReducers({
  [cartSlice.name]: [cartSlice.reducer],
});
