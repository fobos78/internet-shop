import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import data from '../../db';
import styles from './Header.module.css';
import { zero, selectBooks, selectToys, selAll, addData, searchName } from '../../redux/actions';

function Header() {
  // управляемая форма
  const [inputs, setInputs] = useState('');
  const [forms, setForms] = useState(''); // forms - буду сравнивать со state по нажатии поиск менять state
  const [select, setSelect] = useState(false);
  // const dataState = useSelector((state) => state.addDataReducer);
  // const dataStateCart = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  function inputChange(event) {
    setInputs(event.target.value);
  }

  function formSubmit(event) {
    event.preventDefault();
    setForms(inputs);
    dispatch(searchName(inputs));
    setInputs('');
  }

  function selectBook(books) {
    dispatch(selectBooks(books));
  }
  function selectToy(toys) {
    dispatch(selectToys(toys));
  }
  function selectAll() {
    dispatch(addData(data));
  }
  return (
    <div className={styles.Header}>
      <form onSubmit={formSubmit}>
        <label htmlFor="search">
          <input id="search" name="search" value={inputs} onChange={inputChange} />
        </label>
        <button type="submit">поиск</button>
      </form>
      <Link onClick={() => dispatch(zero(false))} to="/">Главная</Link>
      <div>
        <button onClick={() => setSelect(!select)} className={styles.selectUp}>Категории &#9660;</button>
        {
          select &&
          <ul className={styles.select}>
            <li onClick={() => {setSelect(false); selectAll()}}>all</li>
            <li onClick={() => { setSelect(false); selectBook(' books') }}>books</li>
            <li onClick={() => {setSelect(false); selectToy(' toys')}}>toys</li>
          </ul>
        }
      </div>
      <Link onClick={() => dispatch(zero(false))} to="/cart">Корзина</Link>
    </div>
  );
}

export default Header;
