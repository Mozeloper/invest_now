import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleGetAllProducts = createAsyncThunk("products/allProducts", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.getAllProducts);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleGetAllSegment = createAsyncThunk("products/segments", async (value, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.getSegmentURL + `?segments=${value ?? ""}`);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleSubmitUtrace = createAsyncThunk("products/utrace", async (value, { rejectWithValue }) => {
  try {
    const data = await api.post(appUrls.saveUtraceURL, value);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleGetProductDetails = createAsyncThunk(
  "products/productDetail",
  async (value, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.getProductDetails + `code=${value}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  allProductIsLoading: false,
  allProductData: null,
  productDetailIsLoading: false,
  productDetailsData: null,
  productSegementsIsLoading: false,
  productSegmentData: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [handleGetAllProducts.pending]: (state) => {
      state.allProductIsLoading = true;
    },
    [handleGetAllProducts.fulfilled]: (state, action) => {
      state.allProductIsLoading = false;
      state.allProductData = action;
    },
    [handleGetAllProducts.rejected]: (state) => {
      state.allProductIsLoading = false;
    },
    [handleGetProductDetails.pending]: (state) => {
      state.productDetailIsLoading = true;
    },
    [handleGetProductDetails.fulfilled]: (state, action) => {
      state.productDetailIsLoading = false;
      state.productDetailsData = action;
    },
    [handleGetProductDetails.rejected]: (state) => {
      state.productDetailIsLoading = false;
    },
    [handleGetAllSegment.pending]: (state) => {
      state.productSegementsIsLoading = true;
    },
    [handleGetAllSegment.fulfilled]: (state, action) => {
      state.productSegementsIsLoading = false;
      state.productSegmentData = action;
    },
    [handleGetAllSegment.rejected]: (state) => {
      state.productSegementsIsLoading = false;
    },
    [handleSubmitUtrace.pending]: (state) => {
      state.savingUtraceIsLoading = true;
    },
    [handleSubmitUtrace.fulfilled]: (state, action) => {
      state.savingUtraceIsLoading = false;
    },
    [handleSubmitUtrace.rejected]: (state) => {
      state.savingUtraceIsLoading = false;
    },
  },
});

const { reducer } = productsSlice;
export default reducer;
