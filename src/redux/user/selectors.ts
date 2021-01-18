import REDUCER from './constants';
import { RootState } from '../rootReducer';
import { createDeepEqualSelector } from '../../utils/reselect/createDeepEqualSelector';

const rootSelector = (state: RootState) => state[REDUCER];

export const isLoadingSelector = createDeepEqualSelector(
  [rootSelector],
  (state) => state.isLoading
);

export const currentUserSelector = createDeepEqualSelector(
  [rootSelector],
  (state) => state.currentUser
);
