import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleDashboardSummary = createAsyncThunk("dashboard/summary", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.dashboardSummaryURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handlecompletionSummary = createAsyncThunk("dashboard/completion", async (values, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.completionSummaryURL + `?id=${values}`);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleSlidingRating = createAsyncThunk("dashboard/rating", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.slidingRateURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleGetReferralProduct = createAsyncThunk(
  "dashboard/referralProduct",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.activeReferralProductURL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleGetReferralCode = createAsyncThunk("dashboard/referralCode", async (_, { rejectWithValue }) => {
  try {
    const data = await api.post(appUrls.referralCodeLinkURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  dashboardSummary: null,
  dashboardSummaryIsLoading: false,
  completionSummary: null,
  completionSummaryIsLoading: false,
  slidingRate: null,
  slidingRateIsLoading: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: {
    [handleDashboardSummary.pending]: (state) => {
      state.dashboardSummaryIsLoading = true;
    },
    [handleDashboardSummary.fulfilled]: (state, action) => {
      state.dashboardSummaryIsLoading = false;
      state.dashboardSummary = action;
    },
    [handleDashboardSummary.rejected]: (state) => {
      state.dashboardSummaryIsLoading = false;
    },
    [handlecompletionSummary.pending]: (state) => {
      state.completionSummaryIsLoading = true;
    },
    [handlecompletionSummary.fulfilled]: (state, action) => {
      state.completionSummaryIsLoading = false;
      state.completionSummary = action.payload;
    },
    [handlecompletionSummary.rejected]: (state) => {
      state.completionSummaryIsLoading = false;
    },
    [handleSlidingRating.pending]: (state) => {
      state.slidingRateIsLoading = true;
    },
    [handleSlidingRating.fulfilled]: (state, action) => {
      state.slidingRateIsLoading = false;
      state.slidingRate = action;
    },
    [handleSlidingRating.rejected]: (state) => {
      state.slidingRateIsLoading = false;
    },
    [handleGetReferralProduct.pending]: (state) => {
      state.activeProductReferralIsLoading = true;
    },
    [handleGetReferralProduct.fulfilled]: (state, action) => {
      state.activeProductReferralIsLoading = false;
      state.referralProduct = action;
    },
    [handleGetReferralProduct.rejected]: (state) => {
      state.activeProductReferralIsLoading = false;
    },
    [handleGetReferralCode.pending]: (state) => {
      state.referralCodeIsLoading = true;
    },
    [handleGetReferralCode.fulfilled]: (state, action) => {
      state.referralCodeIsLoading = false;
      state.referralCodeData = action;
    },
    [handleGetReferralCode.rejected]: (state) => {
      state.referralCodeIsLoading = false;
    },
  },
});

const { reducer } = dashboardSlice;
export default reducer;
