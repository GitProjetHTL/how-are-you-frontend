import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { 
    savedEmotion: false, 
    savedComment: false,
    modifiedComment : false, 
    },
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    saveEmotionToday: (state, action) => {
      state.value.savedEmotion = action.payload;  
    },
    saveCommentToday: (state, action) => {
        state.value.savedComment = action.payload; 
      },
    changeComment: (state, action) => {
        state.value.savedComment = action.payload.savedComment;
        state.value.modifiedComment = action.payload.modifiedComment; 
    },
    logoutJournal: (state, action) => {
      state.value.savedComment = null;
      state.value.modifiedComment = null;
      state.value.savedEmotion = null;  
    },
  },
});

export const { saveEmotionToday, saveCommentToday, changeComment, logoutJournal} = journalSlice.actions;
export default journalSlice.reducer;
