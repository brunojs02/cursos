import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
