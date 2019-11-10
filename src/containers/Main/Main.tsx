import * as React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Spinner,
  Fade,
} from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getOffers, RootState, getOffersLoading } from 'stores';

import { Offers } from 'models/Offers';
import { offersActions } from 'stores/offers/actions';

import './Main.scss';

interface MapStateProps {
  offers: Offers[];
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

  return (
    <Container>
      <Row>
        <Col>
          <h1>{searchTerm}</h1>

          {isLoading && <Spinner color="primary" />}
          <div className="offers">
            {offers &&
              offers.map((offer: any) => {
                const mainPhoto = offer.photos[0].hr;
                const name = `${offer.details.name} ${offer.details.shortName[0]}`;
                return (
                  <Fade in={true} tag="h5" className="offers__item">
                    <Card>
                      <CardImg top width="100%" src={mainPhoto} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>
                          <strong>{name}</strong>
                        </CardTitle>
                        <CardSubtitle>
                          <strong>{offer.details.guestsCount}</strong> pers,{' '}
                          <strong>{offer.details.bedroomsCount}</strong> bedrooms{' '}
                          <strong>{offer.details.shortName[0]}</strong>
                        </CardSubtitle>
                        <CardText>
                          <div></div>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Fade>
                );
              })}
          </div>
        </Col>
      </Row>
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
