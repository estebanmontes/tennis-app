import { useFonts } from 'expo-font';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '~/context/authContext';
import store from '~/redux/store'; // Create your store and export it
import theme from './src/theme/theme';
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
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
