import { INIT_GOODS } from "../actionTypes";



function goodsReducer(state = { goods: [] }, action) {
    switch (action.payload) {
      case INIT_GOODS:
            const newGoods = action.payload
          return {...state, goods: newGoods};
  
      default:
        return state;
    }
  }
  
  export default goodsReducer;