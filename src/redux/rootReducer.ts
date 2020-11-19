import { combineReducers } from 'redux';

import preloader from './preloader/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
  preloader,
  posts,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
