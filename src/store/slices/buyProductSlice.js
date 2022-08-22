import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleInitializePayment = createAsyncThunk(
  "buyproduct/initializePayment",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.post(appUrls.initializePaymentURL, values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleRecurrentPayment = createAsyncThunk(
  "buyproduct/recurrentPayment",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.post(appUrls.recurrentPaymentURL, values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleVerifyPayment = createAsyncThunk("buyproduct/verifyPayment", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.verifyPaymentURL, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleExistingCashAccount = createAsyncThunk(
  "buyproduct/existingCashAccount",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.existingCashAccountUrl);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const buyProductSlice = createSlice({
  name: "buyProduct",
  initialState: {},
  reducers: {
    reintializeState: (state) => {
      state.accountType = null;
      state.dependentDetails = null;
      state.bithCertificate = null;
      state.identityCard = null;
      state.identityTypeId = null;
      state.bankDetails = null;
      state.referralCode = "";
      state.nextOfKin = null;
      state.beneficiaryDetails = null;
      state.cscsDetails = null;
      state.cscsValidIdentity = null;
      state.cscsValidIdentityType = null;
      state.step = null;
    },
    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },
    setDependentDetails: (state, action) => {
      state.dependentDetails = action.payload;
    },
    setBirthCertificate: (state, action) => {
      state.bithCertificate = action.payload;
    },
    setIdentityCard: (state, action) => {
      state.identityCard = action.payload;
    },
    setIdentityTypeId: (state, action) => {
      state.identityTypeId = action.payload;
    },
    setCscsValidIdentity: (state, action) => {
      state.cscsValidIdentity = action.payload;
    },
    setcscsValidIdentityType: (state, action) => {
      state.cscsValidIdentityType = action.payload;
    },
    setProductCode: (state, action) => {
      state.productCode = action.payload;
    },
    setBankDetails: (state, action) => {
      state.bankDetails = action.payload;
    },
    setNextOfkin: (state, action) => {
      state.nextOfKin = action.payload;
    },
    setBeneficiaryDetails: (state, action) => {
      state.beneficiaryDetails = action.payload;
    },
    setCscsDetails: (state, action) => {
      state.cscsDetails = action.payload;
    },
    setReferralCode: (state, action) => {
      state.referralCode = action.payload;
    },
    setNextStep: (state, action) => {
      state.step = action.payload;
    },
  },
  extraReducers: {
    [handleInitializePayment.pending]: (state) => {
      state.isInitializePaymentLoading = true;
    },
    [handleInitializePayment.fulfilled]: (state, action) => {
      state.isInitializePaymentLoading = false;
      state.initializePaymentData = action?.payload;
    },
    [handleInitializePayment.rejected]: (state, action) => {
      state.isInitializePaymentLoading = false;
      state.initializePaymentData = action?.payload;
    },
    [handleRecurrentPayment.pending]: (state) => {
      state.isInitializePaymentLoading = true;
    },
    [handleRecurrentPayment.fulfilled]: (state, action) => {
      state.isInitializePaymentLoading = false;
      state.initializePaymentData = action?.payload;
    },
    [handleRecurrentPayment.rejected]: (state, action) => {
      state.isInitializePaymentLoading = false;
      state.initializePaymentData = action?.payload;
    },
    [handleVerifyPayment.pending]: (state) => {
      state.isVerifyPaymentLoading = true;
    },
    [handleVerifyPayment.fulfilled]: (state, action) => {
      state.isVerifyPaymentLoading = false;
      state.verifyPaymentData = action?.payload;
    },
    [handleVerifyPayment.rejected]: (state, action) => {
      state.isVerifyPaymentLoading = false;
      state.verifyPaymentData = action?.payload;
    },
    [handleExistingCashAccount.pending]: (state) => {
      state.isExistingCashAccountIsLoaing = true;
    },
    [handleExistingCashAccount.fulfilled]: (state, action) => {
      state.isExistingCashAccountIsLoaing = false;
      state.existingAccountData = action;
    },
    [handleExistingCashAccount.rejected]: (state, action) => {
      state.isExistingCashAccountIsLoaing = false;
      state.existingAccountData = action;
    },
  },
});

export const { reducer, actions } = buyProductSlice;
export const {
  setBeneficiaryDetails,
  setIdentityCard,
  setCscsValidIdentity,
  setcscsValidIdentityType,
  setDependentDetails,
  setIdentityTypeId,
  reintializeState,
  setBirthCertificate,
  setCscsDetails,
  setReferralCode,
  setNextStep,
  setAccountType,
  setProductCode,
  setBankDetails,
  setNextOfkin,
} = actions;

export default reducer;
