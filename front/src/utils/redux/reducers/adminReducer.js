const { INIT_AGENTS, REQUEST_GOODS } = require("../actionTypes");

function adminReducer (state = {agents: []}, action) {
  switch (action.type) {
    case REQUEST_GOODS:
      return {...state, goodsList: action.payload }
    case INIT_AGENTS:
      
      return {...state, agents: action.payload }
  
    default:
      return state;
  }
}

export default adminReducer
