import { ADD_GOODS_TO_CART } from "../actionTypes";

function agentReducer(state = { cart: [] }, action) {
  switch (action.type) {
    case ADD_GOODS_TO_CART:
    const index = state.cart.findIndex(el => el.title === action.payload.title)
    if(index !== -1 && state.cart[index].value === action.payload.value){
      return state
    }
    if (index !== -1) {
      return {...state, cart: state.cart.map(el => {
        if(el.title === action.payload.title) {
          return {title: action.payload.title, value: action.payload.value}
        } else return el
      })}
    }
    else {
      return {...state, cart: [...state.cart, action.payload]}
    }
    default:
      return state;
  }
}

export default agentReducer;
