import makeApiCall from '../utils/api/makeApiCall';

export const apiRegister = (data: unknown) =>
  makeApiCall({
    url: 'api/auth/register',
    method: 'POST',
    data,
  });

export const apiLogin = (data: unknown) =>
  makeApiCall({
    url: 'api/auth/login',
    method: 'POST',
    data
  });
