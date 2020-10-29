export const ADD_VALUE = 'ADD_VALUE';
export const REMOVE_VALUE = 'REMOVE_VALUE';

export const addValue = (value) => ({
  payload: value,
  type: ADD_VALUE,
});
