import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isOpened: false,
}


const sidebarSlice = createSlice({

  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpened = true;
    },
    closeSidebar: (state) => {
      state.isOpened = false;
    },
  }

});


export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;