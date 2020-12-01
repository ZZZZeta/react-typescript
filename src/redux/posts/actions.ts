import * as types from './constants';
import { apiGetPostsCached } from '../../api/posts';
import { BaseAction } from '../baseTypes';

interface getPostsAction extends BaseAction {}

export type PostsActionTypes = getPostsAction;

export const getPosts = (): getPostsAction => ({
  types: [
    types.GET_POSTS_REQUEST,
    types.GET_POSTS_SUCCESS,
    types.GET_POSTS_FAILURE,
  ],
  promise: () => apiGetPostsCached(),
});
