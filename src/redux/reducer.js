const FavItem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return [...state, action.payload];
    case 'REMOVE_FAV':
      return state.filter(
        FavItem => FavItem.char_id !== action.payload.char_id,
      );
  }

  return state;
};

export default FavItem;
