import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: '',
};


const userSlice = createSlice({

  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {},
    logoutUser:(state) => {},
  }

});


export const { loginUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
