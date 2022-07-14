import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {createStore, useSelector} from 'react-redux';
import SPlashScreen from './src/navigation/AppNavigator/SPlashScreen';
import Appnavigator from './src/navigation/Appnavigator1';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import LoadMore from './src/screen/shopshoes/loadMore/index';
import HomePage from './businessCard/src/screen/home/index';
function App() {
  // const counter = useSelector(state => state.counter);

  return (
    // <Provider store={store}>
    //   <MenuProvider>
    //     <Appnavigator />
    //   </MenuProvider>
    // </Provider>

    <HomePage />
  );
}

export default App;
