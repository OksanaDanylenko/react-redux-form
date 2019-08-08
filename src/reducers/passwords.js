const initialState = [
    {
        password: ''
    }
];

export default function passwordInfo(state = initialState, action) {

    if (action.type === 'ADD_PASSWORD') return [action.payload];

    return state;
}
