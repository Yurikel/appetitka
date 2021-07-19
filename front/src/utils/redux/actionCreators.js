import {
  CLEAR_CART,
  DEL_FROM_CART,
  ADD_GOODS_TO_CART,
  INIT_AGENTS,
  INIT_GOODS,
  REQUEST_GOODS,
  ADJUST_CART,
  EDIT_GOODS,
  DELETE_GOODS,
} from "./actionTypes";

export function initAgentsAC(payload) {
  return { type: INIT_AGENTS, payload };
}
export function requestGoodsAC(payload) {
  return { type: REQUEST_GOODS, payload };
}
export function initGoodsAC(payload) {
  return { type: INIT_GOODS, payload };
}
export function editGoodsListAC(payload) {
  return { type: EDIT_GOODS, payload };
}
export function deleteGoodsAC(payload) {
  return { type: DELETE_GOODS, payload };
}


export function addGoodsToCartAC(payload) {
  return { type: ADD_GOODS_TO_CART, payload };
}
export function delGoodsFromCartAC(payload) {
  return { type: DEL_FROM_CART, payload };
}
export function clearCartAC(payload) {
  return { type: CLEAR_CART, payload };
}
export function adjustCartAC(payload) {
  return { type: ADJUST_CART, payload };
}
