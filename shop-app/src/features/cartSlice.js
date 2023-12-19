// src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // 카트에 담긴 상품들
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 카트에 상품 추가
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    // 카트에서 상품 제거
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    // 카트 비우기
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
