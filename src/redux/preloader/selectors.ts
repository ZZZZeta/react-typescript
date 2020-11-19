import REDUCER from './constants';
import { RootState } from '../rootReducer';

export const isLoading = (state: RootState) => state[REDUCER].isLoading;
