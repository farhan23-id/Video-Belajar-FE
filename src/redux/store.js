import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slicers/chartSlice";

const CART_STORAGE_KEY = "cart_items";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart.items));
  } catch (error) {
    console.error("Gagal menyimpan cart ke localStorage:", error);
  }
});
