/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { fadeIn, bounce, flash, flip, jello } from 'react-animations';

import './Modal.css';
import { addModal, putFood, addModalCart, delCart } from '../../redux/actions';

function Modal({ el }) {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.addDataReducer);
  const dataStateCart = useSelector((state) => state.addCart);
  const arr = [fadeIn, bounce, flash, flip, jello];
  const Bounce = styled.div`animation: 2s ${keyframes`${arr[Math.floor(Math.random()*4)]}`}`;
  
  function fullInfo() {
    dispatch(addModal(dataState.modal));
    dispatch(addModalCart(dataStateCart.modal));
  }
  function putCart(element) {
    dispatch(putFood(element));
  }
  function delFromCart(el) {
    dispatch(addModal(dataState.modal));
    dispatch(addModalCart(dataStateCart.modal));
    dispatch(delCart(el));
  }
  return (
    <>
      <div className="Modal">
        <h4>
          Категория:
          {el.kategories}
        </h4>
        <h4>
          Название:
          {el.name}
        </h4>
        {
          (el.cartFlag
            && <button type="button" onClick={() => delFromCart(el)}>удалить</button>)
          || (el.cartFlag || <button type="button" onClick={() => putCart(el)}>В корзину</button>)
        }
        <h4>
          Цена:
          {el.cost}
        </h4>
        <h4>
          Описание:
          {el.discription}
        </h4>
        <Bounce> <div style={{ backgroundImage: `url(/img/${el.id}.jpg)` }} className="img"  >
        </div></Bounce>
        <button type="button" onClick={fullInfo}>Закрыть</button>
      </div>
    </>
  );
}

export default Modal;
