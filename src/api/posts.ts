import makeApiCall from '../utils/api/makeApiCall';
import cacheApiCall from '../utils/api/cacheApiCall';

export const apiGetPosts = () =>
  makeApiCall({
    url: 'api/posts',
    method: 'GET',
  });

export const apiGetPostsCached = () => cacheApiCall('posts', apiGetPosts);
