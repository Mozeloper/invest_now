import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleUtilityBill = createAsyncThunk("settings/uploadUtilityBill", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.uploadUtilityBillURL, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleUploadPassport = createAsyncThunk("settings/uploadPassport", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.uploadPassport, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getIdentityTypes = createAsyncThunk("settings/identityTypes", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.identityTypesURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleValidId = createAsyncThunk("settings/validId", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.uploadCustomerIdentity + `id=${values.id}`, values.data);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleSignatureUpload = createAsyncThunk("settings/signature", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.uploadSignatureURL, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getcustomerTitle = createAsyncThunk("settings/customerTitles", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.customerTitlesURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getReligion = createAsyncThunk("settings/religion", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.religionURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getMaritalStatus = createAsyncThunk("settings/maritalStatus", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.maritalStatusURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleSaveBioData = createAsyncThunk("settings/savebioData", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.saveBioDataURL, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getEmployementStatus = createAsyncThunk("settings/employmentStatus", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.employementStatusURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getSalaryBand = createAsyncThunk("settings/salaryband", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.salaryBandURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleSaveEmployementDetails = createAsyncThunk(
  "settings/employmentDetails",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.put(appUrls.employementDetailsURL, values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getReasonList = createAsyncThunk("settings/noReasonList", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.noReasonTinURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleSaveSelfCertification = createAsyncThunk(
  "settings/selfCertification",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.put(appUrls.saveSelfCertificationURL, values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleResetPassword = createAsyncThunk("settings/resetPassword", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.resetPasswordURL, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  isLoading: false,
  utilityBillState: null,
  identityTypeState: null,
  validIdState: null,
  signatureData: null,
  customerTitle: null,
  religion: null,
  maritalStatus: null,
  employementStatus: null,
  salaryBand: null,
  noReasonList: null,
};

export const updateKycSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: {
    [handleUtilityBill.pending]: (state) => {
      state.isLoading = true;
    },
    [handleUtilityBill.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.utilityBillState = action.payload;
    },
    [handleUtilityBill.rejected]: (state, action) => {
      state.isLoading = false;
      state.utilityBillState = action.payload;
    },
    [handleUploadPassport.pending]: (state) => {
      state.isLoadingPassport = true;
    },
    [handleUploadPassport.fulfilled]: (state, action) => {
      state.isLoadingPassport = false;
      state.passportData = action.payload;
    },
    [handleUploadPassport.rejected]: (state, action) => {
      state.isLoadingPassport = false;
      state.passportData = action.payload;
    },
    [getIdentityTypes.pending]: (state) => {
      state.isLoading = true;
    },
    [getIdentityTypes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.identityTypeState = action;
    },
    [getIdentityTypes.rejected]: (state, action) => {
      state.isLoading = false;
      state.identityTypeState = action;
    },
    [handleValidId.pending]: (state) => {
      state.isLoading = true;
    },
    [handleValidId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.validIdState = action;
    },
    [handleValidId.rejected]: (state, action) => {
      state.isLoading = false;
      state.validIdState = action;
    },
    [handleSignatureUpload.pending]: (state) => {
      state.isLoading = true;
    },
    [handleSignatureUpload.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.signatureData = action;
    },
    [handleSignatureUpload.rejected]: (state, action) => {
      state.isLoading = false;
      state.signatureData = action;
    },
    [getcustomerTitle.pending]: (state) => {
      state.isLoading = true;
    },
    [getcustomerTitle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerTitle = action;
    },
    [getcustomerTitle.rejected]: (state, action) => {
      state.isLoading = false;
      state.customerTitle = action;
    },
    [getReligion.pending]: (state) => {
      state.isLoading = true;
    },
    [getReligion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.religion = action;
    },
    [getReligion.rejected]: (state, action) => {
      state.isLoading = false;
      state.religion = action;
    },
    [getMaritalStatus.pending]: (state) => {
      state.isLoading = true;
    },
    [getMaritalStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.maritalStatus = action;
    },
    [getMaritalStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.maritalStatus = action;
    },
    [handleSaveBioData.pending]: (state) => {
      state.saveBioDataisLoading = true;
    },
    [handleSaveBioData.fulfilled]: (state, action) => {
      state.saveBioDataisLoading = false;
    },
    [handleSaveBioData.rejected]: (state, action) => {
      state.saveBioDataisLoading = false;
    },
    [getEmployementStatus.pending]: (state) => {
      state.isLoading = true;
    },
    [getEmployementStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.employementStatus = action;
    },
    [getEmployementStatus.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getSalaryBand.pending]: (state) => {
      state.isLoading = true;
    },
    [getSalaryBand.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.salaryBand = action;
    },
    [getSalaryBand.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [handleSaveEmployementDetails.pending]: (state) => {
      state.saveEmploymentDetailsIsLoading = true;
    },
    [handleSaveEmployementDetails.fulfilled]: (state, action) => {
      state.saveEmploymentDetailsIsLoading = false;
    },
    [handleSaveEmployementDetails.rejected]: (state, action) => {
      state.saveEmploymentDetailsIsLoading = false;
    },
    [getReasonList.pending]: (state) => {
      state.isLoading = true;
    },
    [getReasonList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.noReasonList = action;
    },
    [getReasonList.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [handleSaveSelfCertification.pending]: (state) => {
      state.selfCertificationIsLoading = true;
    },
    [handleSaveSelfCertification.fulfilled]: (state, action) => {
      state.selfCertificationIsLoading = false;
    },
    [handleSaveSelfCertification.rejected]: (state, action) => {
      state.selfCertificationIsLoading = false;
    },
    [handleResetPassword.pending]: (state) => {
      state.resetPasswordIsLoading = true;
    },
    [handleResetPassword.fulfilled]: (state) => {
      state.resetPasswordIsLoading = false;
    },
    [handleResetPassword.rejected]: (state, action) => {
      state.resetPasswordIsLoading = false;
    },
  },
});

const { reducer } = updateKycSlice;
export default reducer;
