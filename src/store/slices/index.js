import { combineReducers } from "redux";
import authSlices from "./authSlices";
import dashboardSlice from "./dashboardSlice";
import productsSlice from "./productsSlice";
import updateKycSlice from "./settingsUpdateKycSlice";

const rootReducer = combineReducers({
  authReducer: authSlices,
  dashboardReducer: dashboardSlice,
  updateKycSliceReducer: updateKycSlice,
  productsReducer: productsSlice,
});

export default rootReducer;
