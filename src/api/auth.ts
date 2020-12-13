import makeApiCall from '../utils/api/makeApiCall';

export const apiRegister = (data: unknown) =>
  makeApiCall({
    url: 'api/posts',
    method: 'GET',
    data,
  });

export const apiLogin = (data: unknown) =>
  makeApiCall({
    url: 'api/posts',
    method: 'GET',
    data
  });
