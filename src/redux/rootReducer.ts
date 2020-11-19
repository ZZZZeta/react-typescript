import { combineReducers } from 'redux';

import preloader from './preloader/reducer'

const rootReducer = combineReducers({
    preloader
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
