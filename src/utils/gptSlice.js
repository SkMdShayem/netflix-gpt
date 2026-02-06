import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgpt: false,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showgpt = !state.showgpt;
    },
  },
});

export const { toggleGpt } = gptSlice.actions;
export default gptSlice.reducer;    
