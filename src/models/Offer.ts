interface Photo {
  t: string;
  m: string;
  l: string;
  hr: string;
  overlay: boolean;
}

export interface Offer {
  id: string;
  name: string;
  shortName: string;
  bedroomsCount: number;
  priceTotal: number;
  priceDaily: number;
  priceCurrency: string;
  nights: number;
  guestsCount: number;
  apartmentType: string;
  photos: Photo[];
}

export interface RawOffer {
  id: string;
  groupId: string;
  details: {
    name: string;
    shortName: Array<string>;
    apartmentTypeTitle: string;
    bedroomsCount: number;
    guestsCount: number;
    apartmentType: string;
    longName: string;
  };
  price: {
    total: number;
    daily: number;
    strikeThroughTotal: number;
    strikeThroughDaily: number;
    isExact: boolean;
    currency: string;
    ccy: string;
    discountType: string;
    discountAmount: string;
    nights: number;
  };
  photos: Photo[];
}

export interface RawSearchResponse {
  offers: RawOffer[];
  metaData: any;
}
