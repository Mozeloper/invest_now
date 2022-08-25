import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleGetAllRecurringPayments = createAsyncThunk(
  "recurring/recurringPayment",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.getActiveRecurringPaymentURL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleGetDetailsRecurringPayment = createAsyncThunk(
  "recurring/detailsRecurringPayment",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.get(
        appUrls.getActiveRecurringPaymentURL + `-detail?id=${values?.id}&customer_id=${values?.customer_id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleDisableRecurringPayment = createAsyncThunk(
  "recurring/disablerecurringPayment",
  async (value, { rejectWithValue }) => {
    try {
      const data = await api.delete(appUrls.disableRecurringPaymentURL + `?schedule_id=${value}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  allActiveRecurringPaymentData: null,
  allActiveRecurringPaymentIsLoading: false,
  disabingRecurringPaymentIsLoading: false,
  detailsRecurringPaymentData: null,
  detailsRecurringPaymentIsLoading: false,
};

export const recurringPaymentSlice = createSlice({
  name: "recurringPayment",
  initialState,
  extraReducers: {
    [handleGetAllRecurringPayments.pending]: (state) => {
      state.allActiveRecurringPaymentIsLoading = true;
    },
    [handleGetAllRecurringPayments.fulfilled]: (state, action) => {
      state.allActiveRecurringPaymentIsLoading = false;
      state.allActiveRecurringPaymentData = action;
    },
    [handleGetAllRecurringPayments.rejected]: (state) => {
      state.allActiveRecurringPaymentIsLoading = false;
    },
    [handleDisableRecurringPayment.pending]: (state) => {
      state.disabingRecurringPaymentIsLoading = true;
    },
    [handleDisableRecurringPayment.fulfilled]: (state, action) => {
      state.disabingRecurringPaymentIsLoading = false;
    },
    [handleDisableRecurringPayment.rejected]: (state) => {
      state.disabingRecurringPaymentIsLoading = false;
    },
    [handleGetDetailsRecurringPayment.pending]: (state) => {
      state.detailsRecurringPaymentIsLoading = true;
    },
    [handleGetDetailsRecurringPayment.fulfilled]: (state, action) => {
      state.detailsRecurringPaymentIsLoading = false;
      state.detailsRecurringPaymentData = action;
    },
    [handleGetDetailsRecurringPayment.rejected]: (state) => {
      state.detailsRecurringPaymentIsLoading = false;
    },
  },
});

const { reducer } = recurringPaymentSlice;
export default reducer;
