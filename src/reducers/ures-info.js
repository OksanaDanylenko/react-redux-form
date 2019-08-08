import * as types from '../constants/ActionTypes';
const initialState = [
  {
    id: '',
    firstName: '',
    lastName: '',
    email: ''
  }
];

export default function uresInfo(state = initialState, action) {

  switch(action.type) {
    case types.ADD_USER:
      return [action.payload];
    default:
      return state;
  }
}
