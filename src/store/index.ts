import { createStore, applyMiddleware, compose as simpleCompose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/rootReducer';
import rootSaga from '../redux/rootSaga';

// middlewares
import { apiMiddleware } from './middlewares/apiMiddleware';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    apiMiddleware,
    sagaMiddleware,
    createLogger({
        collapsed: true,
    })
);

const compose =
    process.env.NODE_ENV === 'development'
        // @ts-ignore
        ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        : simpleCompose;

const initialState = {};

const store = createStore(rootReducer, initialState, compose(middleware));

sagaMiddleware.run(rootSaga);

export default store;
