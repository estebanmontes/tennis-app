import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'react-native-paper';

import HomeScreen from 'containers/HomeScreen';
import PlayScreen from '~/containers/PlayScreen';
import RankingScreen from '~/containers/RankingScreen';
// import RegisterScreen from 'containers/RegisterScreen';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '~/context/authContext';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';
  const { userInfo, getUserInfo } = useAuth();
  const navigation = useNavigation();

  // React.useEffect(() => {
  //   getUserInfo();
  // }, []);

  React.useEffect(() => {
    if (userInfo && !userInfo?.level) {
      navigation.navigate('EvaluationWelcomeScreen');
    }
  }, [userInfo]);

  console.log('userInfo', userInfo);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
      }}
      barStyle={{
        backgroundColor: '#fff',
        borderTopColor: '#C0C0C0',
        borderTopWidth: 2,
        borderRadius: 2,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      activeColor="#D8FA52"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={26} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Play"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Ionicons name="tennisball" color={color} size={26} />,
        }}
        component={PlayScreen}
      />
      <Tab.Screen
        name="Ranking"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <FontAwesome5 name="medal" color={color} size={26} />,
        }}
        component={RankingScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
