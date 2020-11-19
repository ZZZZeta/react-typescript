import REDUCER from './constants';
import { RootState } from '../rootReducer';

export const postsSelector = (state: RootState) => state[REDUCER].posts;
