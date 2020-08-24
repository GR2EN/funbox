import React from 'react';
import { Products } from './components';
import items from './data/products';

const App = () => {
  return (
    <main className="container">
      <h1 className="main-title">Ты сегодня покормил кота?</h1>
      
      <Products items={items} />
    </main>
  );
};

export default App;
