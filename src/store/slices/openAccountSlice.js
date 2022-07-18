import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

export const openAccountSlice = createSlice({
  name: "openAccount",
  initialState,
  reducers: {
    handleNextStep: (state) => {
      state.step += 1;
    },
    handlePreviousStep: (state) => {
      state.step -= 1;
    },
    handleResetStep: (state) => {
      state.step = 1;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = openAccountSlice;
export const { handleNextStep, handlePreviousStep, handleResetStep } = actions;
export default reducer;
