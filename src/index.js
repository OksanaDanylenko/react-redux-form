import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, } from 'redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import UserInfo from './components/UserInfo';
import PasswordInfo from './components/PasswordInfo';
import './assets/styles/index.css';
import reducer from './reducers';

const store = createStore(reducer);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={UserInfo}/>
            <Route path="/password" component={PasswordInfo}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

