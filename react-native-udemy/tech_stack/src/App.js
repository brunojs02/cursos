import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default App = () => (
    <Provider store={createStore(reducers)}>
        <View />
    </Provider>
);