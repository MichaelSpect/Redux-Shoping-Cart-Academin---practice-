import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity = state.totalQuantity + 1;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalQuantity = state.totalQuantity + 1;
      }
      console.log(state);
    },
    removeFromCart(state, action) {
      const itemID = action.payload;
      const existingItem = state.items.find((item) => item.id === itemID);
      state.changed = true;
      if (existingItem.quantity >= 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalQuantity = state.totalQuantity - 1;
      }
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== itemID);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
