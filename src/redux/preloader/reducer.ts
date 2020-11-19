import { combineReducers } from 'redux';
import * as types from './constants';
import * as postsTypes from '../posts/constants';
import { PreloaderActionTypes } from './actions';

export default combineReducers({
  isLoading(state: boolean = false, action: PreloaderActionTypes): boolean {
    switch (action.type) {
      case types.ENABLE_LOADING:
      case postsTypes.GET_POSTS_REQUEST:
        return true;
      case types.DISABLE_LOADING:
      case postsTypes.GET_POSTS_SUCCESS:
      case postsTypes.GET_POSTS_FAILURE:
        return false;
      default:
        return state;
    }
  },
});
