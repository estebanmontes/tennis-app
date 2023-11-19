import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState } from 'react';
import {
  login as loginService,
  refreshToken,
  register as registerService,
  verifyToken,
} from '~/services/authServices';

import { getProfile } from '~/services/profileServices';

interface IUser {
  email: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
}

// Create the AuthContext
interface AuthContextData {
  token: string | null;
  isLoggedIn: boolean;
  userInfo: any | null;
  error: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateUserInfo: (user: any) => void;
  onLoad: () => void;
  getUserInfo: () => void;
  setUserSession: (token: string, username: string) => void;
  register: (user: IUser) => void;
}
const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Create a custom hook to easily access the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
const AuthProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserinfo] = useState<any | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onLoad = async () => {
    const token = await AsyncStorage.getItem('token');
    const userInfo = await AsyncStorage.getItem('user');
    let isExpired = false;
    const parsedUserInfo = JSON.parse(userInfo);
    console.log('token', token);
    if (token) {
      const response = await verifyToken(token);
      console.log('response', response);
      const { user } = response;
      if (!user) {
        isExpired = true;
      }
    }

    if (isExpired) {
      console.log('token expired');
      const data = await refreshToken();
      const { token } = data;
      setUserinfo(parsedUserInfo);
      await AsyncStorage.setItem('token', token);
      setToken(token);
      setIsLoggedIn(true);
      return;
    }

    if (token && parsedUserInfo) {
      console.log('token and user info found');
      setToken(token);
      setUserinfo(parsedUserInfo);
      setIsLoggedIn(true);
    }
  };

  const getUserInfo = async () => {
    console.log('updating user info');
    const response = await getProfile();
    if (response.user) {
      setUserinfo(response.user);
      await AsyncStorage.setItem('user', JSON.stringify(response.user));
    }
  };

  const register = async ({ email, password }: IUser) => {
    try {
      console.log('registering', { email, password });
      const response = await registerService(email, password);
      console.log('response', response);
      if (response.token && response.success) {
        const { token, user } = response;
        setToken(token);
        setIsLoggedIn(true);
        // setUsername(name + ' ' + lastname);
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setUserinfo(user);
        // await AsyncStorage.setItem('username', name + ' ' + lastname);
        return response;
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Error registering:', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await loginService(email, password);
      if (response.token && response.success) {
        const { token, user } = response;
        setToken(token);
        setIsLoggedIn(true);
        setUserinfo(user);
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        return response;
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Error logging in:', error);
    }
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    //setUsername(null);
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('username');
  };

  const setUserSession = (token: string, username: string) => {
    setToken(token);
    setIsLoggedIn(true);
    //setUsername(username);
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('username', username);
  };

  const updateUserInfo = (user: any) => {
    setUserinfo(user);
    AsyncStorage.setItem('user', JSON.stringify(user));
  };

  const authContextValue: AuthContextData = {
    token,
    register,
    error,
    login,
    logout,
    userInfo,
    setUserSession,
    getUserInfo,
    updateUserInfo,
    onLoad,
    isLoggedIn,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
