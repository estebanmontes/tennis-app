import React from 'react';
import { Text, View } from 'react-native';
import Button from '~/components/Button';
import { useAuth } from '~/context/authContext';

const HomeScreen: React.FC = () => {
  const { logout } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          logout();
        }}
        type="primary"
      >
        Logout
      </Button>
      {/* Add your login form and logic here */}
    </View>
  );
};

export default HomeScreen;
