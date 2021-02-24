import { SET_PRODUCT } from "../types";

const initialState = {
  product: {}
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload[0]
      }
    default:
      return state;
  }
}