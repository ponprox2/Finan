import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {createStore, useSelector} from 'react-redux';
import SPlashScreen from './src/navigation/AppNavigator/SPlashScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  // const counter = useSelector(state => state.counter);

  return (
    <Provider store={store}>
      <MenuProvider>
        <SPlashScreen />
      </MenuProvider>
    </Provider>
  );
}

export default App;
