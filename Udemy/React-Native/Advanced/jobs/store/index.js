import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { Location } from 'expo';

const { Jeff } = require('../setup/setup');

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk)
    )
);

Location.setApiKey(Jeff);

export default store;