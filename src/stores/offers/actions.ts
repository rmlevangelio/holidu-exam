import { ActionType, createAction } from 'typesafe-actions';
import { Offers } from 'models/Offers';

export enum OffersActionTypes {
  Load = '[Offers] Load',
  Success = '[Offers] Success',
  Fail = '[Offers] Fail',
  Reset = '[Offers] Reset',
}

export const offersActions = {
  load: createAction(OffersActionTypes.Load)(),
  success: createAction(OffersActionTypes.Success)<Offers[]>(),
  fail: createAction(OffersActionTypes.Fail)<string>(),
  reset: createAction(OffersActionTypes.Reset),
};

export type OffersAction = ActionType<typeof offersActions>;
