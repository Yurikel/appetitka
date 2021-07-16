import { ADD_GOODS_TO_CART, INIT_AGENTS, INIT_GOODS } from "./actionTypes";

export function initAgentsAC(payload) {
  return { type: INIT_AGENTS, payload };
}

export function addGoodsToCartAC(payload) {
  return { type: ADD_GOODS_TO_CART, payload };
}

export function initGoodsAC(payload) {
  return { type: INIT_GOODS, payload };
}