import { fork } from 'redux-saga/effects';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import { OffersAction } from './offers/actions';
import * as OffersReducer from './offers/reducer';
import { sagas as offersSaga } from './offers/sagas';

export type RootAction = OffersAction;

export interface RootState {
  offers: OffersReducer.State;
}

function* rootSaga() {
  yield fork(offersSaga);
}

const rootReducer = combineReducers<RootState>({
  offers: OffersReducer.reducer,
});

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
}

// Selectors

const getOffersState = (state: RootState) => state.offers;

export const getOffers = createSelector(getOffersState, OffersReducer.getOffers);
