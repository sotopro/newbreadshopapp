import { URL_API } from "../../constants/firebase";
import { cartTypes } from "../types";
const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartTypes;

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});

export const confirmCart = (payload) => ({
  type: CONFIRM_CART,
  payload,
});
