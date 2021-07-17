import { ADD_GOODS_TO_CART } from "../actionTypes";

function agentReducer(state = { cart: [] }, action) {
  switch (action.payload) {
    case ADD_GOODS_TO_CART:
      const index = state.cart.findIndex(action.payload);
      if (index !== -1) {
        return {...state, cart: [...state.cart,state.cart[index].value = action.payload.value]};
      }
      else return {...state, cart: [...state.cart.push(action.payload)]}

    default:
      return state;
  }
}

export default agentReducer;
