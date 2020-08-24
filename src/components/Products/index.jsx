import React from 'react';
import { Card, CardSkeleton } from '..';

const Products = ({ items }) => {
  return (
    <ul className="products">
      {items
        ? items.map(item => (
          <li key={`${item.id}`} className="products__item">
            <Card item={item} />
          </li>
        ))
        : Array(3)
          .fill(0)
          .map((_, index) => <CardSkeleton key={index} />)}
    </ul>
  );
};

export default Products;
