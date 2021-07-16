import { INIT_AGENTS } from "./actionTypes";

export function initAgentsAC(payload) {
  return { type: INIT_AGENTS, payload };
}
