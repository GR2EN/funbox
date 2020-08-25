const products = (state, action) => {
  switch(action.type) {
  case 'FETCH_PRODUCTS': {
    return {
      ...state,
      isLoading: true,
    };
  }
  case 'FETCH_SUCCESS': {
    return {
      ...state,
      isLoading: false,
    };
  }
  case 'SET_PRODUCTS': {
    return {
      ...state,
      items: action.payload,
    };
  }
  default: return state;
  }
};

export default products;
