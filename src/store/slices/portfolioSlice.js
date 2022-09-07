import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleGetPortfolioTransaction = createAsyncThunk(
  "portfolio/portfolioTransaction",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.get(
        appUrls.getPortfolioTransactionURL +
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

export const handleGetPortfolioPerfomance = createAsyncThunk(
  "portfolio/portfolioPerfomance",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.getPortfolioPerfomanceURL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleGetPortfolioDetails = createAsyncThunk(
  "portfolio/portfolioDetails",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.getPortfolioDetailsURL + `?cash_account_id=${values}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleWithdrawalRequest = createAsyncThunk(
  "portfolio/withdrawalRequest",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.post(appUrls.saveWithdrawalRequestURL, values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleGetPortfolioSummary = createAsyncThunk(
  "portfolio/portfolioSummary",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.getPortfolioSummaryURL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleGetPortfolioStatistics = createAsyncThunk(
  "portfolio/portfolioStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.getPortfolioStatisticsURL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  portfolioTransaction: null,
  portfolioTransactionIsLoading: false,
  portfolioPerformanceData: null,
  portfolioPerformanceIsLoading: false,
  portfolioDetailsData: null,
  portfolioDetailsIsLoading: false,
  portfolioWithdrawalIsLoading: false,
  portfolioSummaryData: null,
  portfolioSummaryIsLoading: false,
  portfolioStatisticsData: null,
  portfolioStatisticsIsLoading: false,
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
    [handleGetPortfolioPerfomance.pending]: (state) => {
      state.portfolioPerformanceIsLoading = true;
    },
    [handleGetPortfolioPerfomance.fulfilled]: (state, action) => {
      state.portfolioPerformanceIsLoading = false;
      state.portfolioPerformanceData = action;
    },
    [handleGetPortfolioPerfomance.rejected]: (state) => {
      state.portfolioPerformanceIsLoading = false;
    },
    [handleGetPortfolioDetails.pending]: (state) => {
      state.portfolioDetailsIsLoading = true;
    },
    [handleGetPortfolioDetails.fulfilled]: (state, action) => {
      state.portfolioDetailsIsLoading = false;
      state.portfolioDetailsData = action;
    },
    [handleGetPortfolioDetails.rejected]: (state) => {
      state.portfolioDetailsIsLoading = false;
    },
    [handleWithdrawalRequest.pending]: (state) => {
      state.portfolioWithdrawalIsLoading = true;
    },
    [handleWithdrawalRequest.fulfilled]: (state) => {
      state.portfolioWithdrawalIsLoading = false;
    },
    [handleWithdrawalRequest.rejected]: (state) => {
      state.portfolioWithdrawalIsLoading = false;
    },
    [handleGetPortfolioSummary.pending]: (state) => {
      state.portfolioSummaryIsLoading = true;
    },
    [handleGetPortfolioSummary.fulfilled]: (state, action) => {
      state.portfolioSummaryIsLoading = false;
      state.portfolioSummaryData = action;
    },
    [handleGetPortfolioSummary.rejected]: (state, action) => {
      state.portfolioSummaryIsLoading = false;
      state.portfolioSummaryData = action;
    },
    [handleGetPortfolioStatistics.pending]: (state) => {
      state.portfolioStatisticsIsLoading = true;
    },
    [handleGetPortfolioStatistics.fulfilled]: (state, action) => {
      state.portfolioStatisticsIsLoading = false;
      state.portfolioStatisticsData = action;
    },
    [handleGetPortfolioStatistics.rejected]: (state, action) => {
      state.portfolioStatisticsIsLoading = false;
      state.portfolioSummaryData = action.payload;
    },
  },
});

const { reducer } = portfolioSlice;
export default reducer;
