import { combineReducers } from "redux";
import reducerAgents from "./reducerAgents";


const rootReducer = combineReducers({
  agents: reducerAgents,
});

export default rootReducer;
