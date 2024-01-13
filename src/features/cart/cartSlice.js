import { createSlice } from "@reduxjs/toolkit";


const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500, //5 dollars
  tax: 0,
  orderTotal: 0,
};


const cartSlice = createSlice({

  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {},
    editItem: (state, action) => {},
    removeItem: (state, action) => {},
    clearCart: (state) => {}
  }
  
});


export const { addItem, editItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;