import { combineReducers } from 'redux';
import * as types from './constants';
import { User } from './types';
import { UserActionTypes } from './actions';

export default combineReducers({
  isLoading(state: boolean = false, action: UserActionTypes): boolean {
    switch (action.type) {
      case types.GET_CURRENT_USER_REQUEST:
        return true;
      case types.GET_CURRENT_USER_SUCCESS:
      case types.GET_CURRENT_USER_FAILURE:
        return false;
      default:
        return false;
    }
  },
  currentUser(state: User, action: UserActionTypes): User {
    switch (action.type) {
      case types.GET_CURRENT_USER_SUCCESS:
        return action.result.data;
      default:
        return state;
    }
  },
});
