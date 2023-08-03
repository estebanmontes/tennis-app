import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from 'containers/LoginScreen';
import RegisterScreen from 'containers/RegisterScreen';
import WelcomeScreen from 'containers/WelcomeScreen';
import InputCodeScreen from 'containers/AccountRecovery/InputCode';
import InputEmailScreen from 'containers/AccountRecovery/InputEmail';
import EmailConfirmationScreen from 'containers/EmailConfirmation';
import EvaluationWelcomeScreen from 'containers/Evaluation/EvaluationWelcomeScreen'

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InputCodeScreen"
        component={InputCodeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InputEmailScreen"
        component={InputEmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailConfirmationScreen"
        component={EmailConfirmationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EvaluationWelcomeScreen"
        component={EvaluationWelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
