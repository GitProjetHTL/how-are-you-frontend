import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { 
    savedEmotion: false, 
    savedComment: false, 
    },
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    saveEmotionToday: (state) => {
      state.value.savedEmotion = true;  
    },
    saveCommentToday: (state) => {
        state.value.savedComment = true; 
      },
    changeComment: (state) => {
        state.value.savedComment = false;
    },
  },
});

export const { saveEmotionToday, saveCommentToday, changeComment } = journalSlice.actions;
export default journalSlice.reducer;
