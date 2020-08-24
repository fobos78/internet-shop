import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addData } from '../redux/actions';
import Header from './Header';
import Head from './Head';
import './App.css';
import data from '../db';

function App() {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.addDataReducer);

  useEffect(() => {
    dispatch(addData(data));
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <Header dataState={dataState} />
        <Head />
      </div>

    </>
  );
}

export default memo(App);
