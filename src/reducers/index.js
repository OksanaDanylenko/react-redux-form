import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import uresInfo from './ures-info';
import passwords from './passwords';

export default combineReducers({
    routing: routerReducer,
    uresInfo: uresInfo,
    passwords
});

