import * as React from 'react';
import { CardDeck } from 'reactstrap';

import { chunkArray } from 'utils/helpers';
import Spinner from 'components/Spinner/Spinner';

import './List.scss';

interface Props<T> {
  items: T[];
  itemsPerRow?: number;
  children: (chunkItems: T[]) => React.ReactNode;
}

const List = <T extends Object>({ items, children, itemsPerRow = 3 }: Props<T>) => {
  const splitItems = items && chunkArray([...items], itemsPerRow);
  return (
    <div className="list">
      {items ? (
        splitItems.map((chunkItems: T[], index) => (
          <CardDeck key={index} className="list__row">
            {children(chunkItems)}
          </CardDeck>
        ))
      ) : (
        <Spinner color="primary" />
      )}
    </div>
  );
};

export default List;
