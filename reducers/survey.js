import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { 
    subjects: [], 
    expectations: [], 
    conditions: false 
    },
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSubjects: (state, action) => {
      state.value.subjects = action.payload
    },
    addExpectations: (state, action) => {
        state.value.expectations = action.payload
      },
    acceptConditions: (state, action) => {
        state.value.conditions = true
    }
  },
});

export const { addSubjects, addExpectations, acceptConditions } = surveySlice.actions;
export default surveySlice.reducer;
