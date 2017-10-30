import '../css/index.pcss';

import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'

import configureStore from 'store'
import ClientsList from 'containers/clientsList'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={ClientsList} />
        </Router>
    </Provider>,
    document.getElementById('root')
);