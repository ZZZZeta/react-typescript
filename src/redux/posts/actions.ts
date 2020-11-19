import * as types from './constants';
import { apiGetPosts } from "../../api/posts";
import {AxiosPromise} from "axios";

interface getPostsAction {
  types: Array<string>,
  promise: AxiosPromise
};

export const getPosts = () => ({
   types: [
       types.GET_POSTS_REQUEST,
       types.GET_POSTS_SUCCESS,
       types.GET_POSTS_FAILURE,
   ],
   promise: () => apiGetPosts()
});