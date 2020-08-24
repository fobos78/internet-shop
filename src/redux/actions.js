/* eslint-disable import/prefer-default-export */
export const ADD_DATA = 'ADD_DATA';
export const ADD_MODAL = 'ADD_MODAL';
export const ADD_MODAL_CART = 'ADD_MODAL_CART';
export const ZERO = 'ZERO';
export const PUT_FOOD = 'PUT_FOOD';
export const DEL_CART = 'DEL_CART';
export const SEL_BOOKS = 'SEL_BOOKS';
export const SEL_TOYS = 'SEL_TOYS';
export const SEL_ALL = 'SEL_ALL';
export const SEARCH_NAME = 'SEARCH_NAME';

export function addData(data) {
  return {
    type: ADD_DATA,
    payload: data,
  };
}
export function addModal(data) {
  return {
    type: ADD_MODAL,
    payload: data,
  };
}
export function addModalCart(data) {
  return {
    type: ADD_MODAL_CART,
    payload: data,
  };
}
export function zero(data) {
  return {
    type: ZERO,
    payload: data,
  };
}
export function putFood(data) {
  return {
    type: PUT_FOOD,
    payload: data,
  };
}
export function delCart(data) {
  return {
    type: DEL_CART,
    payload: data,
  };
}
export function selectBooks(data) {
  return {
    type: SEL_BOOKS,
    payload: data,
  };
}
export function selectToys(data) {
  return {
    type: SEL_TOYS,
    payload: data,
  };
}
export function selAll(data) {
  return {
    type: SEL_ALL,
    payload: data,
  };
}
export function searchName(data) {
  return {
    type: SEARCH_NAME,
    payload: data,
  };
}
