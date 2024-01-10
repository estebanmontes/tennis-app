import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTheme } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import HomeScreen from 'containers/HomeScreen';
import PlayScreen from '~/containers/PlayScreen';
import RankingScreen from '~/containers/RankingScreen';
import { useAuth } from '~/context/authContext';

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';
  const { userInfo, getUserInfo } = useAuth();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (userInfo && !userInfo?.level) {
      navigation.navigate('EvaluationWelcomeScreen');
    }
  }, [userInfo]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
        tabBarActiveTintColor: '#D8FA52',
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: theme.colors.secondaryContainer,
        height: 40,
        marginTop: 8,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={26} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="PlayScreen"
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="tennisball" color={color} size={26} />,
        }}
        component={PlayScreen}
      />
      <Tab.Screen
        name="RankingSreen"
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="medal" color={color} size={26} />,
        }}
        component={RankingScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
