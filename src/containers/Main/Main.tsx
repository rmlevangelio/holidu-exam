import * as React from 'react';
import { Container, Spinner, CardDeck } from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getOffers, RootState, getOffersLoading } from 'stores';

import { Offer } from 'models/Offer';
import { offersActions } from 'stores/offers/actions';
import { chunkArray } from 'utils/helpers';
import OfferItem from 'components/OfferItem';

import './Main.scss';

interface MapStateProps {
  offers: Offer[];
  isLoading: boolean;
}

interface Props extends MapStateProps {
  getOffers?: (searchTerm: string) => void;
}

const Main = ({ offers, isLoading, getOffers }: Props) => {
  const searchTerm = 'Mallorca, Spanien';

  React.useEffect(() => {
    getOffers(searchTerm);
  }, [getOffers]);

  const splitOffers = offers && chunkArray(offers, 3);

  return (
    <Container>
      <h1>{searchTerm}</h1>

      {isLoading && <Spinner color="primary" />}
      <div className="offers">
        {offers &&
          splitOffers.map((perChunk, index) => (
            <CardDeck key={`row_${index}`} className="offers__row">
              {perChunk.map((offer: Offer) => {
                const mainPhoto = offer.photos[1].t;
                return <OfferItem mainPhoto={mainPhoto} {...offer} />;
              })}
            </CardDeck>
          ))}
      </div>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector<RootState, MapStateProps>({
  offers: getOffers,
  isLoading: getOffersLoading,
});

const mapDispatchToProps = {
  getOffers: searchTerm => offersActions.load(searchTerm),
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
