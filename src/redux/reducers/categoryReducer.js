import { SET_CATEGORY, SET_SEARCH } from "../types";

const initialState = {
  category: null,
  search: ''
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        search: ''
      }

    case SET_SEARCH:
      return {
        ...state,
        search: action.payload
      }

    default:
      return state
  }
}