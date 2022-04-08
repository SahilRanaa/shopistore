import { combineReducers } from "redux";
import { showProduct } from "../actions";
import productReducer, { selectedProductReducer } from "./productReducer";

export const allReducers = combineReducers({
  allproducts: productReducer,
  product: selectedProductReducer,
});
