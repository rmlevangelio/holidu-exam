import { ActionType, createAction } from 'typesafe-actions';
import { Offer } from 'models/Offer';

export enum OffersActionTypes {
  Load = '[Offers] Load',
  Success = '[Offers] Success',
  Fail = '[Offers] Fail',
  Reset = '[Offers] Reset',
}

export const offersActions = {
  load: createAction(OffersActionTypes.Load)<string>(),
  success: createAction(OffersActionTypes.Success)<Offer[]>(),
  fail: createAction(OffersActionTypes.Fail)<string>(),
  reset: createAction(OffersActionTypes.Reset),
};

export type OffersAction = ActionType<typeof offersActions>;
