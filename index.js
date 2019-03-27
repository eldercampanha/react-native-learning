/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'
import App from './App';
import config from './src/store/config'
import {name as appName} from './app.json';

const store = config();

const RNRedux = () => (
    <Provider store={store}>
    <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);

