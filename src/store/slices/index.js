import { combineReducers } from "redux";
import authSlices from "./authSlices";
import dashboardSlice from "./dashboardSlice";
import productsSlice from "./productsSlice";
import updateKycSlice from "./settingsUpdateKycSlice";
import openAccountSlice from "./openAccountSlice";
import portfolioSlice from "./portfolioSlice";
import buyProductSlice from "./buyProductSlice";
import statementSlice from "./statementSlice";
import transactionSlice from "./transactionSlice";
import recurringPaymentSlice from "./recurringPaymentSlice";

const rootReducer = combineReducers({
  authReducer: authSlices,
  dashboardReducer: dashboardSlice,
  updateKycSliceReducer: updateKycSlice,
  productsReducer: productsSlice,
  openAccountReducer: openAccountSlice,
  portfolioReducer: portfolioSlice,
  buyProductReducer: buyProductSlice,
  statementReducer: statementSlice,
  transactionReducer: transactionSlice,
  recurringPaymentReducer: recurringPaymentSlice,
});

export default rootReducer;
