import React from 'react';
import classNames from 'classnames';
import catImage from '../../assets/images/cat.png';
import cardReducer from '../../reducers/card';

const initialState = {
  isSelected: false,
  isHovered: false,
};

const Card = ({ index, item, disabled: isDisabled }) => {
  const [state, dispatch] = React.useReducer(cardReducer, initialState);
  const { desc, title, taste, stock, weight, unit } = item;
  const { isHovered, isSelected } = state;
  
  const handleSelection = React.useCallback(() => {
    dispatch({
      type: 'SET_SELECTED',
      payload: !isSelected,
    });
    
    dispatch({
      type: 'SET_HOVERED',
      payload: false,
    });
  }, [isSelected]);

  const onMouseEnter = React.useCallback(() => {
    dispatch({
      type: 'SET_HOVERED',
      payload: true,
    });
  });
  
  const onMouseLeave = React.useCallback(() => {
    dispatch({
      type: 'SET_HOVERED',
      payload: false,
    });
  });

  const handleKeyboard = React.useCallback(() => {
    // TODO: implement Tab and Enter/Space handling
  });

  return (
    <div className={classNames(
      'card',
      { 'card--selected': isSelected, 'card--disabled': isDisabled },
    )}>
      <div
        className="card__content"
        role="button"
        tabIndex={index}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleSelection}
        onKeyDown={handleKeyboard}>
        <div className="card__content-root">
          <p className={classNames(
            'card__description',
            { 'card__description--selected': isSelected && isHovered },
          )}>
            {isSelected && isHovered
              ? <>Котэ не одобряет?</>
              : <>Сказочное заморское яство</>}
          </p>
          <h6 className="card__title">{title}</h6>
          <p className="card__taste">{taste}</p>
          <p className="card__description card__description--small">{stock}</p>
          <div className="card__weight">
            {weight}
            <span className="card__weight-unit">{unit}</span>
          </div>
          <img className="card__image" src={catImage} alt={`${title} ${taste}`} />
        </div>
      </div>
      {isDisabled
        ? (<div className="card__footer">
          {`Печалька, ${taste} закончился.`}
        </div>)
        : (<div className="card__footer">
          {isSelected
            ? <>{desc}</>
            : <>
              Чего сидишь? Порадуй котэ, <button
                type="button"
                className="card__link"
                onClick={handleSelection}>купи</button>
            </>}
        </div>)}
    </div>
  );
};

export default Card;
