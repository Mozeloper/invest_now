import { combineReducers } from "redux";
import authSlices from "./authSlices";
import dashboardSlice from "./dashboardSlice";
import productsSlice from "./productsSlice";
import updateKycSlice from "./settingsUpdateKycSlice";
import openAccountSlice from "./openAccountSlice";
import portfolioSlice from "./portfolioSlice";

const rootReducer = combineReducers({
  authReducer: authSlices,
  dashboardReducer: dashboardSlice,
  updateKycSliceReducer: updateKycSlice,
  productsReducer: productsSlice,
  openAccountReducer: openAccountSlice,
  portfolioReducer: portfolioSlice,
});

export default rootReducer;
