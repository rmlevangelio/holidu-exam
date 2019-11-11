import { getType } from 'typesafe-actions';
import { Offer } from 'models/Offer';
import { offersActions, OffersAction } from './actions';

export interface State {
  offers: Offer[];
  error: string;
  loading: boolean;
}

export const initialState: State = {
  offers: null,
  error: null,
  loading: false,
};

export function reducer(state: State = initialState, action: OffersAction): State {
  switch (action.type) {
    case getType(offersActions.load):
      return { ...state, loading: true };
    case getType(offersActions.success):
      return { ...state, loading: false, offers: action.payload };
    default:
      return state;
  }
}

export const getOffers = (state: State) => state.offers;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
