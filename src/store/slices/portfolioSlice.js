import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleGetPortfolioTransaction = createAsyncThunk(
  "portfolio/portfolioTransaction",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.getPortfolioTransactionURL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  portfolioTransaction: null,
  portfolioTransactionIsLoading: false,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  extraReducers: {
    [handleGetPortfolioTransaction.pending]: (state) => {
      state.portfolioTransactionIsLoading = true;
    },
    [handleGetPortfolioTransaction.fulfilled]: (state, action) => {
      state.portfolioTransactionIsLoading = false;
      state.portfolioTransaction = action;
    },
    [handleGetPortfolioTransaction.rejected]: (state) => {
      state.portfolioTransactionIsLoading = false;
    },
  },
});

const { reducer } = portfolioSlice;
export default reducer;
