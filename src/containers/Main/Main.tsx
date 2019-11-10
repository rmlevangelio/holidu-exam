import * as React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getOffers, RootState } from 'stores';

import { Offers } from 'models/Offers';
import { offersActions } from 'stores/offers/actions';

interface Props {
  getOffers?: () => void;
}

interface MapStateProps {
  offers: Offers[];
}

const Main = ({ getOffers }: Props) => {
  React.useEffect(() => {
    getOffers();
  }, [getOffers]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Gallery</h1>
          <Button size="lg">asd</Button>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector<RootState, MapStateProps>({
  offers: getOffers,
});

const mapDispatchToProps = {
  getOffers: offersActions.load,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
