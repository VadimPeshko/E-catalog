import { SET_PRODUCTS, SET_LOADER } from "../types";

const initialState = {
  products: [],
  isLoaded: false
}

export const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoaded: true
      }
    case SET_LOADER:
      return {
        ...state,
        isLoaded: action.payload
      }
    default:
      return state
  }
}