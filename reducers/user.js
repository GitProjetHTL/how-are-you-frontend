import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { 
    userId: null, 
    token: null, 
    username: null, 
    email: null, 
    password: null, 
    date: null, 
    emotion: null,
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
      state.value.token = action.payload.token
    }, 

    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.userId = action.payload.userId; 
    },
    
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
    },
    addEmotion: (state, action) => {
      state.value.emotion = action.payload.emotion; 
    }
  },
});

export const { newUser, login, logout, addEmotion } = userSlice.actions;
export default userSlice.reducer;
