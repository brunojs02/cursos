import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

export default class App extends Component {

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDO4oTLNA-wkzVAIynhZZwsiQR1KyTYncE',
      authDomain: 'manager-19a48.firebaseapp.com',
      databaseURL: 'https://manager-19a48.firebaseio.com',
      projectId: 'manager-19a48',
      storageBucket: 'manager-19a48.appspot.com',
      messagingSenderId: '309594375033'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
      </Provider>
    );
  }
}
