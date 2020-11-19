import REDUCER from './constants';

interface RootState {
    [REDUCER]: {
        isLoading: boolean
    }
}

export const isLoading = (state: RootState) => state[REDUCER].isLoading;
