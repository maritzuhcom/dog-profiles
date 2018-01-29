import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';

import rootReducer from './reducers';

import About from './components/About';
import BreedImages from './components/BreedImages';
import DogList from './components/DogList';

const store = createStore(rootReducer, applyMiddleware(Thunk));

const App = () => {
  const AppNav = TabNavigator({
    About: {
      screen: About,
    },
    DogList: {
      screen: DogList,
    },
    BreedImages: {
      screen: BreedImages,
    },
  }, {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
      },
      tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  });
  return (
    <Provider store={store}>
      <View style={Styles.container}>
        <AppNav />
      </View>
    </Provider>
  );
};

export default App;

const white = '#fff';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: white,
  },
});
