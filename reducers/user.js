import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { 
    token: null, 
    username: null, 
    email: null, 
    password: null, 
    date: null
    },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.value.username = action.payload.username;
      state.value.email = action.payload.email; 
      state.value.password = action.payload.password; 
      state.value.date = action.payload.date; 
    }, 

    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
    },
  },
});

export const { newUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
