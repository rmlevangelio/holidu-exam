export interface Offers {
  id: string;
  groupId: string;
}

export interface RawOffers {
  offers: Offers[];
  metaData: any;
}
