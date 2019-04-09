import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';

import GetNews from './components/Button';
import NewsItem from './components/Newsitem';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',margin:40
          }}>
          <GetNews />
          <NewsItem />
        </View>
      </Provider>
    );
  }
}
