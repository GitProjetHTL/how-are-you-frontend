import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { 
    userId: null, 
    token: null, 
    username: null, 
    email: null, 
    password: null, 
    date: null, 
    comment: null,
    emotionImage: null,
    emotionName: null, 
    emotionContent: null, 
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
    updateUser: (state, action) => {
      state.value.username = action.payload.username;
      state.value.email = action.payload.email; 
      state.value.password = action.payload.password; 
    }, 

    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.userId = action.payload.userId; 
    },
    
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.emotionImage = null;
      state.value.emotionName = null;
      state.value.emotionContent = null;
    },
    
    saveComment: (state, action) => {
      state.value.comment = action.payload;
    },
    saveEmotion: (state, action) => {
      state.value.emotionImage = action.payload.emotionImage;
      state.value.emotionName = action.payload.emotionName;
      state.value.emotionContent = action.payload.emotionContent;
    },
  },
});

export const { newUser, login, logout, saveComment, saveEmotion, updateUser } = userSlice.actions;
export default userSlice.reducer;
