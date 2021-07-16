import { combineReducers } from "redux";
import agentReducer from "./agentReducer";
import adminReducer from "./adminReducer";

const rootReducer = combineReducers({
  agentReducer,
  adminReducer
});

export default rootReducer;
