import React from 'react';
import catImage from '../../assets/images/cat.png';

const Card = ({ item }) => {
  const { desc, title, taste, stock, weight, unit } = item;
  
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__description">{desc}</p>
        <h6 className="card__title">{title}</h6>
        <p className="card__taste">{taste}</p>
        <p className="card__description card__description--small">{stock}</p>
        <div className="card__weight">
          {weight}
          <span className="card__weight-unit">{unit}</span>
        </div>
        <img className="card__image" src={catImage} alt={`${title} ${taste}`} />
      </div>
      <div className="card__footer">
        Чего сидишь? Порадуй котэ, <a href="http://funbox.ru/" className="card__link">купи</a>
      </div>
    </div>
  );
};

export default Card;
