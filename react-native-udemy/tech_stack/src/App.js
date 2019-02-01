import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

export default App = () => (
    <Provider store={createStore(reducers)}>
        <View>
            <Header title='Tech Stack' />
            <LibraryList />
        </View>
    </Provider>
);