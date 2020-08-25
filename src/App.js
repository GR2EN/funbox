import React from 'react';
import { Products } from './components';
import data from './data/products';
import productsReducer from './reducers/products';

const initialState = {
  isLoading: false,
  items: [],
};

const App = () => {
  const [state, dispatch] = React.useReducer(productsReducer, initialState);
  const { isLoading, items } = state;

  // simulate data fetching after mount
  React.useEffect(() => {
    dispatch({
      type: 'FETCH_PRODUCTS',
    });

    setTimeout(() => {
      dispatch({
        type: 'FETCH_SUCCESS',
      });
    }, 1500);

    dispatch({
      type: 'SET_PRODUCTS',
      payload: data,
    });
  }, []);

  return (
    <main className="container">
      <h1 className="main-title">Ты сегодня покормил кота?</h1>
      
      {isLoading
        ? <Products />
        : <Products items={items} /> }
    </main>
  );
};

export default App;
