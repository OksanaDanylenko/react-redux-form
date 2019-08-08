import * as types from '../constants/ActionTypes';
const initialState = [
    {
        password: ''
    }
];

export default function passwordInfo(state = initialState, action) {

    switch(action.type) {
        case types.ADD_PASSWORD:
            return [action.payload];
        default:
            return state;
    }
}
