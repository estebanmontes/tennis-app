import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/theme';
import { useFonts } from 'expo-font';
import store from '~/redux/store'; // Create your store and export it
// import { store } from './src/store'; // Create your store and export it

import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Mono': require('./assets/fonts/DMMono-Regular.ttf'),
    // Add more font variants if needed
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
