const initialState = [
  {
    id: '',
    firstName: '',
    lastName: '',
    email: ''
  }
];

export default function uresInfo(state = initialState, action) {

  if (action.type === 'ADD_USER')  return [action.payload];

  return state;
}
