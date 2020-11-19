import REDUCER from './constants';

interface RootState  {
    [REDUCER]: {
        posts: {}
    }
};

export const postsSelector = (state: RootState) => state[REDUCER].posts;