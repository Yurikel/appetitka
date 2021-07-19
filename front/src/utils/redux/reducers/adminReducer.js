const { INIT_AGENTS, REQUEST_GOODS, INIT_APPLICATIONS } = require("../actionTypes");

function adminReducer(state = { agents: [], applications:[], goods:[]}, action) {
  switch (action.type) {
    case REQUEST_GOODS:
      return { ...state, goodsList: action.payload }
    case INIT_AGENTS:
      return { ...state, agents: action.payload }
    case INIT_APPLICATIONS:
      return { ...state, applications: action.payload }
    default:
      return state;
  }
}

export default adminReducer
