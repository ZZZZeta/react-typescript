import { combineReducers } from 'redux';
import * as types from './constants';

export default combineReducers({
    isLoading(state = false, action) {
        switch (action.type) {
            case types.ENABLE_LOADING:
                return true;
            case types.DISABLE_LOADING:
                return false;
            default:
                return state;
        }
    },
});
