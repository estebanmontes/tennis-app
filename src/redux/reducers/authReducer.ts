// reducers/authReducer.ts

import { AuthActionTypes, AuthState } from '../types';

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
      };
    // Add other cases for additional actions if needed
    default:
      return state;
  }
};

export default authReducer;
