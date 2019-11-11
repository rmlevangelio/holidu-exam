import * as React from 'react';
import { Container } from 'reactstrap';
import ListOffers from 'containers/ListOffers/ListOffers';

const Main = () => {
  const searchTerm = 'Mallorca, Spanien';

  return (
    <Container>
      <ListOffers searchTerm={searchTerm} />
    </Container>
  );
};

export default Main;
