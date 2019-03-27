import {createStore, combineReducers, compose } from 'redux'

import placesReducer from './reducer/places'

const rootReducer = combineReducers({
    places: placesReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 
}

const config = () => {
    return createStore(rootReducer, composeEnhancers())
};

export default config;
