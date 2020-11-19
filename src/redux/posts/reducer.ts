import * as types from './constants';
import { combineReducers } from 'redux';
import { Posts } from './types';
import { PostsActionTypes } from './actions';

export default combineReducers({
  isLoading(state: boolean = false, action): boolean {
    switch (action.type) {
      case types.GET_POSTS_REQUEST:
        return true;
      case types.GET_POSTS_SUCCESS:
      case types.GET_POSTS_FAILURE:
        return false;
      default:
        return state;
    }
  },
  posts(state: Posts = [], action: PostsActionTypes): Posts {
    switch (action.type) {
      case types.GET_POSTS_SUCCESS:
        return action.result.data;
      default:
        return state;
    }
  },
});
