import React from 'react';
import { Card, CardSkeleton } from '..';

const Products = ({ items }) => {
  return (
    <ul className="products">
      {items
        ? items.map((item, index) => (
          <li key={`${item.id}`} className="products__item">
            <Card index={index} item={item} />
          </li>
        ))
        : Array(3)
          .fill(0)
          .map((_, index) => <CardSkeleton key={index} />)}
    </ul>
  );
};

export default Products;
