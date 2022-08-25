import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleGetStatementAccount = createAsyncThunk(
  "portfolio/statementAccount",
  async (value, { rejectWithValue }) => {
    if (value === "cash_statement") {
      try {
        const data = await api.get(appUrls.getCashStatmentAccountURL);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      try {
        const data = await api.get(appUrls.getPortfolioStatementAccountURL);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  }
);

export const handleRequestStatementAccount = createAsyncThunk(
  "portfolio/requestAccount",
  async (value, { rejectWithValue }) => {
    if (value?.type === "cash_statement") {
      try {
        const data = await api.get(
          appUrls.requestCashStatementURL +
            `?customer_id=${value?.payload?.customer_id}&from=${value?.payload?.from}&to=${value?.payload?.to}&core_system=${value?.payload?.core_system}&options=cash_account=${value?.payload?.options}`
        );
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      try {
        const data = await api.get(
          appUrls.requestPortfolioStatementURL +
            `?customer_id=${value?.payload?.customer_id}&portfolio_code=${value?.payload?.portfolio_code}&from=${value?.payload?.from}&to=${value?.payload?.to}`
        );
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  }
);

const initialState = {
  statementAccountData: null,
  statementAccountIsLoading: false,
  resqueststatementData: null,
  requetstatementAccountIsLoading: false,
};

export const statementSlice = createSlice({
  name: "statement",
  initialState,
  extraReducers: {
    [handleGetStatementAccount.pending]: (state) => {
      state.statementAccountIsLoading = true;
    },
    [handleGetStatementAccount.fulfilled]: (state, action) => {
      state.statementAccountIsLoading = false;
      state.statementAccountData = action;
    },
    [handleGetStatementAccount.rejected]: (state) => {
      state.statementAccountIsLoading = false;
    },
    [handleRequestStatementAccount.pending]: (state) => {
      state.requetstatementAccountIsLoading = true;
    },
    [handleRequestStatementAccount.fulfilled]: (state, action) => {
      state.requetstatementAccountIsLoading = false;
      state.resqueststatementData = action.payload;
    },
    [handleRequestStatementAccount.rejected]: (state) => {
      state.requetstatementAccountIsLoading = false;
    },
  },
});

const { reducer } = statementSlice;
export default reducer;
