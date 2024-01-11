import { User } from 'types/AuthTypes';
import { fetchWithToken } from './api';

export const updateProfile = async (
  name: string,
  lastname: string,
  dateOfBirth: string,
  gender: string,
): Promise<User> => {
  const response = await fetchWithToken('/profile/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, lastname, dateOfBirth, gender }),
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};

export const addLevel = async (level: string): Promise<User> => {
  console.log('level', level);
  const response = await fetchWithToken('/profile/level', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ level }),
  });
  if (response.error) {
    throw new Error(data.error);
  }
  return response;
};

export const getProfile = async (): Promise<User> => {
  const response = await fetchWithToken('/profile', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};
