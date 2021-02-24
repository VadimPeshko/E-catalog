import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import { productsReducer } from "./reducers/productsReducer";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer
})