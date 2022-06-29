import { combineReducers } from "redux";
import authSlices from "./authSlices";
import dashboardSlice from "./dashboardSlice";

const rootReducer = combineReducers({
  authReducer: authSlices,
  dashboardReducer: dashboardSlice,
});

export default rootReducer;
