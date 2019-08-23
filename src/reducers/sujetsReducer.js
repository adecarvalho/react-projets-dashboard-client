import { SUJETS_FETCH } from "./types"

//
export const SujetsReducer = (state, action) => {
  let newstate = undefined
  //
  switch (action.type) {
    //
    case SUJETS_FETCH:
      newstate = { ...state, sujets: action.payload }
      return newstate
    //
    default:
      return state
  }
}
