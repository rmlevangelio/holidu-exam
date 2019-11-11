import { put, takeLatest, call } from 'redux-saga/effects';
import Api from '../../services/Api';
import { RawSearchResponse, Offer } from '../../models/Offer';
import { RawOffer } from './../../models/Offer';
import { OffersActionTypes, offersActions, OffersAction } from './actions';

const fetchOffers = async searchTerm => {
  try {
    Api.searchTerm = searchTerm;
    const response = await Api.getOffers();
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

function* load(action: OffersAction) {
  try {
    const data: RawSearchResponse = yield call(fetchOffers, action.payload);
    const offers: Offer[] = data.offers.map((offer: RawOffer) => ({
      id: offer.id,
      name: `${offer.details.name} ${offer.details.shortName[0]}`,
      shortName: offer.details.shortName[0],
      bedroomsCount: offer.details.bedroomsCount,
      priceCurrency: offer.price.currency,
      priceTotal: offer.price.total,
      priceDaily: offer.price.daily,
      nights: offer.price.nights,
      guestsCount: offer.details.guestsCount,
      apartmentType: offer.details.apartmentType,
      photos: offer.photos,
    }));
    yield put(offersActions.success(offers));
  } catch (e) {
    yield put(offersActions.fail(e));
  }
}

export function* sagas() {
  yield takeLatest(OffersActionTypes.Load, load);
}
