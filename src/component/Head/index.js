/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Modal from '../Modal';
import { addModal, addModalCart } from '../../redux/actions';
import './Head.css';

function Head() {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.addDataReducer);
  const dataStateCart = useSelector((state) => state.addCart);
  const [modal, setModal] = useState({});

  function fullInfo(el) {
    dispatch(addModal(dataState.modal));
    dispatch(addModalCart(dataStateCart.modal));
    setModal(el);
  }
// if(dataState.db){

//   console.log(`/img/${dataState.db[0].id}.jpg`);
// }
  return (
    <>
      {
        dataState.modal && <Modal el={modal} />
      }
      {
        dataState.db && ( // проверка на существование массива
          <div className="wrap">
            {
              dataState.db.map(
                (el) => (
                  <div onClick={() => fullInfo(el)} className="Data" key={el.id}>
                    <h4>
                      Категория:
                      {el.kategories}
                    </h4>
                    <h4>
                      Название:
                      {el.name}
                    </h4>
                    <div style={{ backgroundImage: `url(/img/${el.id}.jpg)` }} className="imgAll">
                      {/* <div style={ {backgroundImage: `url(${require("../../img/" + el.id + ".jpg")})`} }  className="imgAll"  >  */}
                    </div>
                    <h4>
                      Цена:
                      {el.cost}
                    </h4>
                  </div>
                ),
              )
            }
          </div>
        )
      }
    </>
  );
}

export default Head;
