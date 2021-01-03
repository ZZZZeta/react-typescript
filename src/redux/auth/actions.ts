import * as types from './constants';
import { BaseAction } from '../baseTypes';
import { apiLogin } from '../../api/auth';

interface LoginAction extends BaseAction {}

export type AuthActionTypes = LoginAction;

export const login = (data: {
  email: string;
  password: string;
}): LoginAction => ({
  types: [
    types.LOGIN_USER_REQUEST,
    types.LOGIN_USER_SUCCESS,
    types.LOGIN_USER_FAILURE,
  ],
  promise: () => apiLogin(data),
});
