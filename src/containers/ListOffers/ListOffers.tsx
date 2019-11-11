import * as React from 'react';
import { Container, Alert } from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getOffers, RootState, getOffersLoading } from 'stores';

import { Offer } from 'models/Offer';
import { offersActions } from 'stores/offers/actions';
import Spinner from 'components/Spinner/Spinner';
import List from 'components/List/List';
import ListItem from 'components/ListItem/ListItem';

interface MapStateProps {
  offers: Offer[];
  isOffersLoading: boolean;
}

interface Props extends MapStateProps {
  searchTerm: string;
  getOffers: (searchTerm: string) => void;
}

const ListOffers = ({ searchTerm, offers, isOffersLoading, getOffers }: Props) => {
  React.useEffect(() => {
    getOffers(searchTerm);
  }, [getOffers, searchTerm]);

  const renderSubtitle = (item: Offer) => {
    const { priceCurrency, priceTotal, priceDaily, nights } = item;
    return (
      <>
        <p>
          Total price:{' '}
          <strong>
            {priceCurrency} {priceTotal}
          </strong>
        </p>
        <p>
          Price per day:{' '}
          <strong>
            {priceCurrency} {priceDaily}
          </strong>
        </p>
        <p>
          Nights: <strong>{nights}</strong>
        </p>
      </>
    );
  };

  const renderContent = (item: Offer) => {
    const { guestsCount, bedroomsCount, shortName } = item;
    return (
      <>
        <strong>{guestsCount}</strong> pers, <strong>{bedroomsCount}</strong> bedrooms{' '}
        <strong>{shortName}</strong>
      </>
    );
  };

  if (isOffersLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <h1>{searchTerm}</h1>

      {offers && offers.length === 0 && (
        <Alert color="info">No offers found using your search term.</Alert>
      )}

      {offers && (
        <List items={offers} itemsPerRow={2}>
          {chunkItems =>
            chunkItems.map(item => (
              <ListItem
                key={item.id}
                name={item.name}
                mainPhoto={item.photos[0].t}
                subTitle={renderSubtitle(item)}
                content={renderContent(item)}
              />
            ))
          }
        </List>
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector<RootState, MapStateProps>({
  offers: getOffers,
  isOffersLoading: getOffersLoading,
});

const mapDispatchToProps = {
  getOffers: searchTerm => offersActions.load(searchTerm),
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOffers);
