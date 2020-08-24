/* eslint-disable import/prefer-default-export */
import {
  ADD_DATA, ADD_MODAL, ZERO, PUT_FOOD, ADD_MODAL_CART, DEL_CART, SEL_BOOKS, SEL_TOYS, SEL_ALL, SEARCH_NAME,
} from './actions';

export function addDataReducer(state = {}, action) {
  switch (action.type) {
    case ADD_DATA:
      return { ...action.payload };
    case ADD_MODAL:
      return { ...state, modal: !action.payload };
    case ZERO:
      return { ...state, modal: action.payload };
    case SEL_BOOKS:
      return { ...state, db: state.db.filter((el) => el.kategories === action.payload) };
    case SEL_TOYS:
      return { ...state, db: state.db.filter((el) => el.kategories === action.payload) };
    case SEL_ALL:
      return { ...state, db: state.db.filter((el) => el.kategories === action.payload) };
    case SEARCH_NAME:
      return { ...state, db: [ ...state.db.filter((el) => el.name === action.payload) ]};
    default: return state;
  }
}

const initCart = {
  select: false,
  modal: false,
  food: [],
};

export function addCart(state = initCart, action) {
  switch (action.type) {
    case ADD_MODAL_CART:
      return { ...state, modal: !action.payload };
    case DEL_CART:
      return { ...state, food: state.food.filter((el) => el.id !== action.payload.id) };
    case PUT_FOOD:
      return {
        ...state,
        food: [...state.food, { ...action.payload, cartFlag: true }],
        // db: state.db.map((el) => ((el.id === action.payload.id) ? { ...el, cartFlag: true } : el)),
      };
    default: return state;
  }
}
