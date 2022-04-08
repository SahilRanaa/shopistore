import {
  CLEAR_ALL,
  DELETE_ITEM,
  GET_PRODUCTS,
  SET_DATA,
  SHOW_PRODUCT,
} from "./actions.types";

export const setData = (products) => {
  return {
    type: SET_DATA,
    payload: products,
  };
};

export const getProduct = (prod) => {
  return {
    type: GET_PRODUCTS,
    payload: prod,
  };
};

export const showProduct = (product) => {
  return {
    type: SHOW_PRODUCT,
    payload: product,
  };
};

export const clearAll = () => {
  return {
    type: CLEAR_ALL,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
