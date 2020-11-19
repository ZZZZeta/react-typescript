import * as types from './constants';
import { combineReducers } from 'redux';

export default combineReducers({
    posts(state = {}, action) {
      switch (action.type) {
          case types.GET_POSTS_REQUEST:
              return {
                  isLoading: false
              }
          case types.GET_POSTS_SUCCESS:
              return {
                  items: action.result.data,
                  isLoading: false
              }
          case types.GET_POSTS_FAILURE:
              return {
                  isLoading: false
              }
      }
    }
});