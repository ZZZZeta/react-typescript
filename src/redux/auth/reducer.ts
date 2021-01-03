import * as types from './constants';
import { combineReducers } from 'redux';
import { AuthActionTypes } from './actions';

export default combineReducers({
  isLoading(state: boolean = false, action: AuthActionTypes): boolean {
    switch (action.type) {
      case types.LOGIN_USER_REQUEST:
        return true;
      case types.LOGIN_USER_SUCCESS:
      case types.LOGIN_USER_FAILURE:
        return false;
      default:
        return state;
    }
  },
  token(state: string = '', action: AuthActionTypes): string {
    switch (action.type) {
      case types.LOGIN_USER_SUCCESS:
        return action.result.data;
      default:
        return state;
    }
  },
});
