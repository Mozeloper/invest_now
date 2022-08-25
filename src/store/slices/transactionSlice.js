import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleGetDepositHistory = createAsyncThunk(
  "transactions/depositHistory",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.get(
        appUrls.depositHistoryURL +
          `?search=${values?.searchText ?? ""}&page=${values?.paginationNumber ?? 1}&perPage=5&from=${
            values?.startDate ?? null
          }&to=${values?.endDate ?? null}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleGetWithdrawalHistory = createAsyncThunk(
  "transactions/withdrawalHistory",
  async (values, { rejectWithValue }) => {
    if (values.type === "completed") {
      try {
        const data = await api.get(
          appUrls.withdrawalHistoryCompletedURL +
            `?search=${values?.searchText ?? ""}&page=${values?.paginationNumber ?? 1}&limit=5&from=${
              values?.startDate ?? null
            }&to=${values?.endDate ?? null}`
        );
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      try {
        const data = await api.get(
          appUrls.withdrawalHistoryPendingURL +
            `?search=${values?.searchText ?? ""}&page=${values?.paginationNumber ?? 1}&limit=5&from=${
              values?.startDate ?? null
            }&to=${values?.endDate ?? null}`
        );
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  }
);

export const handleGetTransactionStatistics = createAsyncThunk(
  "transactions/transactionStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.transactionStatistics);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  depositHistoryData: null,
  depositHistoryIsLoading: false,
  transactionStatistcisData: null,
  transactionStatistcisIsLoading: false,
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    [handleGetDepositHistory.pending]: (state) => {
      state.depositHistoryIsLoading = true;
    },
    [handleGetDepositHistory.fulfilled]: (state, action) => {
      state.depositHistoryIsLoading = false;
      state.depositHistoryData = action;
    },
    [handleGetDepositHistory.rejected]: (state) => {
      state.depositHistoryIsLoading = false;
    },
    [handleGetTransactionStatistics.pending]: (state) => {
      state.transactionStatistcisIsLoading = true;
    },
    [handleGetTransactionStatistics.fulfilled]: (state, action) => {
      state.transactionStatistcisIsLoading = false;
      state.transactionStatistcisData = action;
    },
    [handleGetTransactionStatistics.rejected]: (state) => {
      state.transactionStatistcisIsLoading = false;
    },
    [handleGetWithdrawalHistory.pending]: (state) => {
      state.withdrawalHistoryIsLoading = true;
    },
    [handleGetWithdrawalHistory.fulfilled]: (state, action) => {
      state.withdrawalHistoryIsLoading = false;
      state.withdrawalHistoryData = action;
    },
    [handleGetWithdrawalHistory.rejected]: (state) => {
      state.withdrawalHistoryIsLoading = false;
    },
  },
});

const { reducer } = transactionSlice;
export default reducer;
