import { INIT_GOODS } from "../actionTypes";



function goodsReducer(state = { goods: [] }, action) {
    switch (action.type) {
      case INIT_GOODS:
        console.log('in!')
            const newGoods = action.payload
          return {...state, goods: newGoods};
  
      default:
        return state;
    }
  }
  
  export default goodsReducer;
