import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = process.env.API_URL || 'https://api-tennis-node.onrender.com/api';

export const fetchWithToken = async (url: string, options: RequestInit): Promise<any> => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('response222', response);
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};
