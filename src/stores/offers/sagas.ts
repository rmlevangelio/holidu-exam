import { put, takeLatest, call } from 'redux-saga/effects';
import Api from '../../services/Api';
import { RawOffers } from './../../models/Offers';
import { OffersActionTypes, OffersAction, offersActions } from './actions';

const fetchOffers = async () => {
  try {
    const response = await Api.getOffers();
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

function* load(action: OffersAction) {
  try {
    const data: RawOffers = yield call(fetchOffers);
    yield put(offersActions.success(data.offers));
  } catch (e) {
    yield put(offersActions.fail(e));
  }
}

export function* sagas() {
  yield takeLatest(OffersActionTypes.Load, load);
}
