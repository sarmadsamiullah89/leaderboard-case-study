import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import FlashMessage from 'react-native-flash-message';

import store from 'store/index';
import HomeScreen from 'screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <Provider store={store}>
        <HomeScreen />
        <FlashMessage position="top" />
      </Provider>
    </PaperProvider>
  );
}

export default App;
