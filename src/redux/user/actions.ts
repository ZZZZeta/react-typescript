import * as types from './constants';
import { BaseAction } from '../baseTypes';
import { apiGetCurrentUser } from '../../api/auth';

interface getCurrentUserAction extends BaseAction {}

export type UserActionTypes = getCurrentUserAction;

export const getCurrentUser = (): getCurrentUserAction => ({
  types: [
    types.GET_CURRENT_USER_REQUEST,
    types.GET_CURRENT_USER_SUCCESS,
    types.GET_CURRENT_USER_FAILURE,
  ],
  promise: () => apiGetCurrentUser(),
});
