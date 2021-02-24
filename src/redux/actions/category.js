import { SET_CATEGORY, SET_SEARCH } from "../types";

export const setCategory = (index) => ({
  type: SET_CATEGORY,
  payload: index
})

export const setSearch = (word) => ({
  type: SET_SEARCH,
  payload: word
})