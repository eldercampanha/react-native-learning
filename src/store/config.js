import {createStore, combineReducers} from 'redux'

import placesReducer from './reducer/places'

const rootReducer = combineReducers({
    places: placesReducer
});

const config = () => {
    return createStore(rootReducer)
};

export default config;
