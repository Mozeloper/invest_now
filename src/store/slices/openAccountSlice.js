import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const getBankList = createAsyncThunk("openaccount/banklist", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.bankListURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const verifyBankAccount = createAsyncThunk("openaccount/verifyAccount", async (values, { rejectWithValue }) => {
  try {
    const data = await api.get(
      appUrls.verifyBankAccountURL + `bank_code=${values.code}&account_number=${values.account_number}`
    );
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getRelationShipStatus = createAsyncThunk(
  "openaccount/relationShipStatus",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.relationShipURL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleCreateAccount = createAsyncThunk(
  "openaccount/createAccount",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.post(appUrls.createAccountURL, values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleRatingExperience = createAsyncThunk(
  "openaccount/ratingExperience",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.post(appUrls.ratingExperience, values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handlePortfolioItem = createAsyncThunk(
  "openaccount/portfolioItem",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.portfolioItemDetail + `cash_account_id=${values}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handlePaymentFrequency = createAsyncThunk(
  "openaccount/paymentFrequency",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.get(appUrls.paymentFrequency);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  step: 1,
  mybankDetails: null,
  mychnDetails: null,
  mybeneficiaryDetails: null,
  mybeneficiaryPassport: null,
  mybeneficiaryId: null,
  mynextOfKinDetails: null,
  bankListData: null,
  verifiedBankAccount: null,
  relationshipIsLoading: false,
  relationshipData: null,
  createAccountIsLoading: false,
  createAccountData: null,
  portfolioItemIsLoading: false,
  portfolioItemData: null,
};

export const openAccountSlice = createSlice({
  name: "openAccount",
  initialState,
  reducers: {
    handleNextStep: (state, action) => {
      console.log(action);
      switch (action?.payload?.type) {
        case "bank":
          state.step = action?.payload?.nextPhase;
          state.mybankDetails = action?.payload?.values;
          break;
        case "chn":
          state.step = action?.payload?.nextPhase;
          state.mychnDetails = action?.payload?.values;
          break;
        case "beneficiary":
          state.step = action?.payload?.nextPhase;
          state.mybeneficiaryDetails = action?.payload?.values;
          break;
        case "nextOfKin":
          state.step = action?.payload?.nextPhase;
          state.mynextOfKinDetails = action?.payload?.values;
          break;
        default:
          break;
      }
    },

    handlePreviousStep: (state, action) => {
      switch (action?.payload?.type) {
        case "bank":
          state.step = action?.payload?.previouPhase;
          state.mybankDetails = null;
          break;
        case "chn":
          state.step = action?.payload?.previouPhase;
          state.mychnDetails = null;
          break;
        case "beneficiary":
          state.step = action?.payload?.previouPhase;
          state.mybeneficiaryDetails = null;
          break;
        case "nextOfKin":
          state.step = action?.payload?.previouPhase;
          state.mynextOfKinDetails = null;
          break;
        default:
          break;
      }
    },

    handleResetStep: (state) => {
      state.step = 1;
      state.mybankDetails = null;
      state.mychnDetails = null;
      state.mybeneficiaryDetails = null;
      state.mybeneficiaryPassport = null;
      state.mybeneficiaryId = null;
      state.mynextOfKinDetails = null;
      state.bankListData = null;
      state.verifiedBankAccount = null;
      state.relationshipIsLoading = false;
      state.relationshipData = null;
      state.createAccountIsLoading = false;
      state.createAccountData = null;
    },

    handleUploadBeneficiaryFile: (state, action) => {
      switch (action?.payload?.data?.type) {
        case "beneficiary_passport":
          state.mybeneficiaryPassport = action.payload?.data?.beneficiary_passport;
          break;
        case "beneficiary_id":
          state.mybeneficiaryId = action.payload?.data?.beneficiary_id;
          break;
        default:
          break;
      }
    },
  },

  extraReducers: {
    [getBankList.pending]: (state) => {
      state.bankIsLoading = true;
    },
    [getBankList.fulfilled]: (state, action) => {
      state.bankIsLoading = false;
      state.bankListData = action;
    },
    [getBankList.rejected]: (state, action) => {
      state.bankIsLoading = false;
      state.bankListData = action.payload;
    },
    [verifyBankAccount.pending]: (state) => {
      state.verifyAccountIsLoading = true;
    },
    [verifyBankAccount.fulfilled]: (state, action) => {
      state.verifyAccountIsLoading = false;
      state.verifiedBankAccount = action;
    },
    [verifyBankAccount.rejected]: (state, action) => {
      state.verifyAccountIsLoading = false;
      state.verifiedBankAccount = action;
    },
    [getRelationShipStatus.pending]: (state) => {
      state.relationshipIsLoading = true;
    },
    [getRelationShipStatus.fulfilled]: (state, action) => {
      state.relationshipIsLoading = false;
      state.relationshipData = action;
    },
    [getRelationShipStatus.rejected]: (state, action) => {
      state.relationshipIsLoading = false;
      state.relationshipData = action.payload;
    },
    [handleCreateAccount.pending]: (state) => {
      state.createAccountIsLoading = true;
    },
    [handleCreateAccount.fulfilled]: (state, action) => {
      state.createAccountIsLoading = false;
      state.createAccountData = action.payload;
    },
    [handleCreateAccount.rejected]: (state, action) => {
      state.createAccountIsLoading = false;
      state.createAccountData = action.payload;
    },
    [handleRatingExperience.pending]: (state) => {
      state.ratingExperienceIsLoading = true;
    },
    [handleRatingExperience.fulfilled]: (state) => {
      state.ratingExperienceIsLoading = false;
    },
    [handleRatingExperience.rejected]: (state) => {
      state.ratingExperienceIsLoading = false;
    },
    [handlePortfolioItem.pending]: (state) => {
      state.portfolioItemIsLoading = true;
    },
    [handlePortfolioItem.fulfilled]: (state, action) => {
      state.portfolioItemIsLoading = false;
      state.portfolioItemData = action.payload;
    },
    [handlePortfolioItem.rejected]: (state) => {
      state.portfolioItemIsLoading = false;
    },
    [handlePaymentFrequency.pending]: (state) => {
      state.paymentFrequencyIsLoading = true;
    },
    [handlePaymentFrequency.fulfilled]: (state, action) => {
      state.paymentFrequencyIsLoading = false;
      state.paymentFrequencyData = action;
    },
    [handlePaymentFrequency.rejected]: (state) => {
      state.paymentFrequencyIsLoading = false;
    },
  },
});

const { reducer, actions } = openAccountSlice;
export const { handleUploadBeneficiaryFile, handleNextStep, handlePreviousStep, handleResetStep } = actions;
export default reducer;
