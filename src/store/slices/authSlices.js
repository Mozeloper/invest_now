import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import { appUrls } from "../../services/urls";

export const handleLogin = createAsyncThunk("auth/login", async (values, { rejectWithValue }) => {
  try {
    const data = await api.post(appUrls.loginURL, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleCustomerExist = createAsyncThunk("auth/customerExist", async (values, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.customerExistURL + `?bvn=${values}`);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleSmileIdentity = createAsyncThunk("auth/smileidentity", async (values, { rejectWithValue }) => {
  try {
    const data = await fetch("https://api.smileidentity.com/v1/id_verification", {
      method: "post",
      body: JSON.stringify(values),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        return response;
      });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleGetGender = createAsyncThunk("auth/getGenders", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.genderURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleGetCountry = createAsyncThunk("auth/getCountry", async (_, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.countryURL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleGetAllState = createAsyncThunk("auth/getStates", async (values, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.stateURL + `?code=${values}`);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleCreateCustomer = createAsyncThunk("auth/createCustomer", async (values, { rejectWithValue }) => {
  try {
    const data = await api.post(appUrls.createCustomerURL, values);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleGetVerificationCode = createAsyncThunk("auth/getOtpCode", async (values, { rejectWithValue }) => {
  try {
    const data = await api.get(appUrls.verificationCodeURL + `?email=${values}`);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleResetVerificationCode = createAsyncThunk(
  "auth/getResetOtpCode",
  async (values, { rejectWithValue }) => {
    try {
      const data = await api.put(appUrls.resendOtpCodeURL + `?bvn=${values}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleValidateOtpCode = createAsyncThunk("auth/validateOtpCode", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.validateOTPURL + `?bvn=${values.bvn}`, values.code);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handlePasswordCreation = createAsyncThunk("auth/getResetOtpCode", async (values, { rejectWithValue }) => {
  try {
    const data = await api.put(appUrls.passwordCreationURL + `?bvn=${values.bvn}`, values.password);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  user: null,
  isLoading: false,
  authedUser: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetInitialState: () => {
      return initialState;
    },
    resetState: (state) => {
      state.states = [];
    },
    authSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [handleLogin.pending]: (state) => {
      state.isLoading = true;
      state.authedUser = null;
    },
    [handleLogin.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.authedUser = action?.payload?.data;
    },
    [handleLogin.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.authedUser = action?.payload?.data;
    },
    [handleCustomerExist.pending]: (state) => {
      state.isLoading = true;
    },
    [handleCustomerExist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action?.payload?.data;
    },
    [handleCustomerExist.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [handleSmileIdentity.pending]: (state) => {
      state.isLoading = true;
      state.smileDetails = null;
    },
    [handleSmileIdentity.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.smileDetails = action?.payload;
    },
    [handleSmileIdentity.rejected]: (state, action) => {
      state.isLoading = false;
      state.smileDetails = action.payload;
    },
    [handleGetGender.pending]: (state) => {
      state.isLoading = true;
      state.gender = null;
    },
    [handleGetGender.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gender = action?.payload?.data;
    },
    [handleGetGender.rejected]: (state, action) => {
      state.isLoading = false;
      state.gender = action.payload.data;
    },
    [handleGetCountry.pending]: (state) => {
      state.isLoading = true;
      state.country = [];
    },
    [handleGetCountry.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.country = action?.payload?.data ?? [];
    },
    [handleGetCountry.rejected]: (state, action) => {
      state.isLoading = false;
      state.country = action.payload;
    },
    [handleGetAllState.pending]: (state) => {
      state.isLoading = true;
      state.states = [];
    },
    [handleGetAllState.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.states = action?.payload?.data ?? [];
    },
    [handleGetAllState.rejected]: (state, action) => {
      state.isLoading = false;
      state.states = action.payload;
    },
    [handleCreateCustomer.pending]: (state) => {
      state.isLoading = true;
      state.customerData = null;
    },
    [handleCreateCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerData = action?.payload?.data;
    },
    [handleCreateCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.customerData = action.payload;
    },
    [handleGetVerificationCode.pending]: (state) => {
      state.isLoading = true;
      state.otpData = null;
    },
    [handleGetVerificationCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.otpData = action?.payload?.data;
    },
    [handleGetVerificationCode.rejected]: (state, action) => {
      state.isLoading = false;
      state.otpData = action.payload;
    },
    [handleResetVerificationCode.pending]: (state) => {
      state.isLoading = true;
      state.otpData = null;
    },
    [handleResetVerificationCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.otpData = action?.payload?.data;
    },
    [handleResetVerificationCode.rejected]: (state, action) => {
      state.isLoading = false;
      state.otpData = action.payload;
    },
    [handleValidateOtpCode.pending]: (state) => {
      state.isLoading = true;
      state.otpData = null;
    },
    [handleValidateOtpCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.otpData = action?.payload?.data;
    },
    [handleValidateOtpCode.rejected]: (state, action) => {
      state.isLoading = false;
      state.otpData = action.payload;
    },
    [handlePasswordCreation.pending]: (state) => {
      state.isLoading = true;
      state.authedUser = null;
    },
    [handlePasswordCreation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.authedUser = action?.payload?.data;
    },
    [handlePasswordCreation.rejected]: (state, action) => {
      state.isLoading = false;
      state.authedUser = action.payload?.data;
    },
  },
});

export const { reducer, actions } = authSlice;
export const { resetInitialState, resetState } = actions;

export default reducer;
