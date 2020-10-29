const ADD_VALUE = 'ADD_VALUE';
const REMOVE_VALUE = 'REMOVE_VALUE';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return {...state, ...action.payload};
    case REMOVE_VALUE:
      delete state[action.payload];
      return state;
  }

  return state;
};

export default reducer;
