import {
  CLEAR_ALL,
  DELETE_ITEM,
  GET_PRODUCTS,
  SET_DATA,
  SHOW_PRODUCT,
} from "../actions/actions.types";
const initalState = {
  productData: [],
  cart: [],
};

const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        productData: [...state.productData, action.payload],
      };
    case GET_PRODUCTS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CLEAR_ALL:
      return {
        ...state,
        cart: [],
      };
    case DELETE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((elem) => elem.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default productReducer;

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
