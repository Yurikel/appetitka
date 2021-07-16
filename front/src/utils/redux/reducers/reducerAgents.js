import { INIT_AGENTS } from "../actionTypes";

function reducerAgents (state = {agents: []}, action) {
  switch (action.payload) {
    case INIT_AGENTS:
      
      return {...state, agents: action.payload }
  
    default:
      return state;
  }
}

export default reducerAgents
