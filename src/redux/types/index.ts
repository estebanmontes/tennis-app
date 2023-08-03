import { User } from 'types/AuthTypes';

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: User;
}

export interface LoginErrorAction {
  type: 'LOGIN_ERROR';
  payload: string; // Error message
}

export type AuthActionTypes = LoginSuccessAction | LoginErrorAction;
