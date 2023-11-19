import { User } from 'types/AuthTypes';
import { fetchWithToken } from './api';

const API_URL = process.env.API_URL || 'https://api-tennis-node.onrender.com/api';
// Mock login function for demonstration purposes
export const login = async (email: string, password: string): Promise<User> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};

export const refreshToken = async (): Promise<User> => {
  const response = await fetchWithToken(`/refresh_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};

export const verifyToken = async (token: string): Promise<User> => {
  const response = await fetch(`${API_URL}/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};

export const register = async (email: string, password: string): Promise<User> => {
  console.log('API_URL', API_URL);
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  console.log('response', response);
  const data = await response.json();
  console.log('data', data);
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};
