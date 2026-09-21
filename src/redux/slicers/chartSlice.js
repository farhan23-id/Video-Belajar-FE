import { createSlice, nanoid } from "@reduxjs/toolkit";

const CART_STORAGE_KEY = "cart_items";

function loadCartFromStorage() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Gagal membaca cart dari localStorage:", error);
    return [];
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    toggleCart: (state, action) => {
      const courseId = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.courseId === courseId,
      );

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push({
          id: nanoid(),
          courseId,
          status: "waiting",
          orderDate: new Date().toISOString(),
        });
      }
    },
    updateStatus: (state, action) => {
      const { courseId, status } = action.payload;
      const item = state.items.find((item) => item.courseId === courseId);
      if (item) item.status = status;
    },
  },
});

export const { toggleCart, updateStatus } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectIsInCart = (state, courseId) =>
  state.cart.items.some((item) => item.courseId === courseId);
export const selectCartCount = (state) => state.cart.items.length;

export default cartSlice.reducer;
