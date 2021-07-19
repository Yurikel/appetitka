const { INIT_AGENTS, REQUEST_GOODS, EDIT_GOODS, DELETE_GOODS } = require("../actionTypes");

function adminReducer(state = { agents: [] }, action) {
  switch (action.type) {
    case REQUEST_GOODS:
      return { ...state, goodsList: action.payload };
    case INIT_AGENTS:
      return { ...state, agents: action.payload };
    case EDIT_GOODS:
      const editedGoodIndex = state.goodsList.findIndex(good => good._id === action.payload._id)
      return { ...state, goodsList: [
        ...state.goodsList.slice(0, editedGoodIndex),
        action.payload,
        ...state.goodsList.slice(editedGoodIndex + 1)
      ]};
    case DELETE_GOODS:
      return { ...state, goodsList: state.goodsList.filter(good => good._id !== action.payload._id)};
    default:
      return state;
  }
}

export default adminReducer;
