import { configureStore } from "@reduxjs/toolkit";
import { sidebarReducer } from "./features/sidebar/sidebarSlice";
import { cartReducer } from "./features/cart/cartSlice";
import { userReducer } from "./features/user/userSlice";



export const store = configureStore({

  reducer: {
    sidebarState : sidebarReducer,
    cartState    : cartReducer,
    userState    : userReducer
  }

});