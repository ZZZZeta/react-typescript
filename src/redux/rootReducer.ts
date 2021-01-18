import { combineReducers } from 'redux';

import preloader from './preloader/reducer';
import posts from './posts/reducer';
import auth from './auth/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  preloader,
  posts,
  auth,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
