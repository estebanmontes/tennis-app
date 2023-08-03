import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'containers/HomeScreen';
// import RegisterScreen from 'containers/RegisterScreen';

const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="Profile"
        component={RegisterScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
