import REDUCER from './constants';
import { RootState } from '../rootReducer';

export const tokenSelector = (state: RootState): string => state[REDUCER].token;
export const isLoggedInSelector = (state: RootState): boolean => state[REDUCER].isLoggedIn;