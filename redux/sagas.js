// Imports: Dependencies
import { all, fork, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
// Imports: Redux Sagas
import { watchIncreaseCounter, watchDecreaseCounter } from '../counter/CounterSagas';

// Redux Saga: Root Saga
export function* rootSaga() {
    yield all([
        fork(watchIncreaseCounter),
        fork(watchDecreaseCounter),
    ]);
};