import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../reducers'; // Define RootState type in reducers/index.ts
import QuestionaireScreen from 'containers/Evaluation/EvaluationQuestionaire';
import EvaluationResultsScreen from 'containers/Evaluation/EvaluationResults';
import EvaluationWelcomeScreen from 'containers/Evaluation/EvaluationWelcomeScreen';
import ProfileScreen from 'containers/ProfileScreen';
import OnboardingScreen from '~/containers/OnboardingScreen';
import { useAuth } from '~/context/authContext';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  //   const isLoggedIn = useSelector<RootState, boolean>(
  //     (state) => state.auth.isLoggedIn
  //   );
  const { isLoggedIn, onLoad, userInfo } = useAuth();

  React.useEffect(() => {
    onLoad();
  }, []);

  console.log('isLoggedIn', isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="MainNavigator"
              component={MainNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EvaluationWelcomeScreen"
              component={EvaluationWelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuestionaireScreen"
              component={QuestionaireScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EvaluationResultsScreen"
              component={EvaluationResultsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
