const { INIT_AGENTS } = require("../actionTypes");

function adminReducer (state = {agents: []}, action) {
  switch (action.type) {
    case INIT_AGENTS:
      
      return {...state, agents: action.payload }
  
    default:
      return state;
  }
}

export default adminReducer
