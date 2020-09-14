// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import { allReducer, rootSaga } from '@redux'
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store 
const store = createStore(
    allReducer,
    applyMiddleware(
        sagaMiddleware,
    ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {
    store,
}