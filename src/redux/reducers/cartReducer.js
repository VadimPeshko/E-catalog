import { ADD_PRODUCT, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_PRODUCT, REMOVE_PRODUCTS } from "../types";

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)
const allProductsCount = (object) => [].concat.apply([], Object.values(object).map(obj => obj.items))

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT: {

      const currentItems = !state.items[action.payload.id] ? 
        [action.payload] : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
      ...state.items,
      [action.payload.id]: {
        items: currentItems,
        totalPrice: getTotalPrice(currentItems)
      }
    }

      const count = allProductsCount(newItems);

      return {
        ...state,
        items: newItems,
        totalCount: count.length,
        totalPrice: getTotalPrice(count) 
      }
    }

    case REMOVE_PRODUCTS:
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0
      }

    case REMOVE_PRODUCT: {

      const newItems = { ...state.items }
      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentTotalCount = newItems[action.payload].items.length
      delete newItems[action.payload]

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      }
    } 
    
    case PLUS_CART_ITEM: {
      const newObjItems = [...state.items[action.payload].items, 
      state.items[action.payload].items[0]]

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }
    
      const count = allProductsCount(newItems);
      
      return {
        ...state,
        items: newItems,
        totalPrice : getTotalPrice(count),
        totalCount: count.length
      }
    }

    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items
      const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
      
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const count = allProductsCount(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(count),
        totalCount: count.length
      }
    }

    default:
      return state
  }
}
