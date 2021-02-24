import { SET_PRODUCT } from "../types";

export const product = (item) => ({
  type: SET_PRODUCT,
  payload: item
})

export const fetchProduct = (id) => {
  return async dispatch => {
    const response = await fetch(`/products?id=${id}`);
    const json = await response.json();
    dispatch(product(json))
  }
}