import { SET_PRODUCTS, SET_LOADER } from "../types";

export const products = (items) => ({
  type: SET_PRODUCTS,
  payload: items
})

export const loader = (payload) => ({
  type: SET_LOADER,
  payload
})

export const fetchProducts = (category, search) => {
  return async dispatch => {
    dispatch(loader(false))
    const response = await fetch(`/products?${category !== null ? `category=${category}` : ''}${search !== '' ? `q=${search}` : ''}`)
    const json = await response.json()
    dispatch(products(json))
  }
}