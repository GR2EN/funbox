const card = (state, action) => {
  switch(action.type) {
  case 'SET_SELECTED': {
    return {
      ...state,
      isSelected: action.payload,
    };
  }
  case 'SET_HOVERED': {
    return {
      ...state,
      isHovered: action.payload,
    };
  }
  case 'SET_DISABLED': {
    return {
      ...state,
      isDisabled: action.payload,
    };
  }
  default: return state;
  }
};

export default card;
