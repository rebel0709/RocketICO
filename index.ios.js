/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const logger = createLogger();
class RocketICORedux extends Component {
  store =  createStore(AppReducer,applyMiddleware(thunk, logger));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RocketICORedux', () => RocketICORedux);
export default RocketICORedux