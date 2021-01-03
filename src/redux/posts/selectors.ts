import REDUCER from './constants';
import { RootState } from '../rootReducer';
import { createDeepEqualSelector } from '../../utils/reselect/createDeepEqualSelector';

const rootSelector = (state: RootState) => state[REDUCER];

export const postsSelector = createDeepEqualSelector(
  [rootSelector],
  (state) => state.posts
);

// every component gets and works with its own selector instance
export const postsSelectorInstance = () =>
  createDeepEqualSelector([rootSelector], (state) => state.posts);
