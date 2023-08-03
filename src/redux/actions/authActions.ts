// actions/authActions.ts

import { Dispatch } from 'redux';
import { AuthActionTypes } from '../types';
import { login } from '/services/authService';

// Define your action types
export const loginUser =
  (email: string, password: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      // Call the login service and dispatch the appropriate action based on success/failure
      const user = await login(email, password);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
    }
  };
