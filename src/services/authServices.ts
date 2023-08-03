import { User } from 'types/AuthTypes';

// Mock login function for demonstration purposes
export const login = async (email: string, password: string): Promise<User> => {
  // You can replace this with actual API calls to authenticate the user
  // For simplicity, we're just returning a mocked user object here
  if (email === 'user@example.com' && password === 'password') {
    return {
      id: 1,
      name: 'John Doe',
      email: 'user@example.com',
    };
  } else {
    throw new Error('Invalid credentials');
  }
};
