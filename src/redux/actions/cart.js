import { ADD_PRODUCT, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_PRODUCT, REMOVE_PRODUCTS } from "../types";

export const addItemsToCart = (items) => ({
  type: ADD_PRODUCT,
  payload: items
})

export const removeItemsInCart = () => ({
  type: REMOVE_PRODUCTS 
})

export const removeItemInCart = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id 
})

export const plusItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id
})

export const minusItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id
})