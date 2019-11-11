import * as React from 'react';
import { Offer } from 'models/Offer';
import {
  Fade,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
} from 'reactstrap';

interface Props extends Offer {
  mainPhoto: string;
}

const OfferItem = ({
  id,
  name,
  priceTotal,
  priceDaily,
  priceCurrency,
  nights,
  guestsCount,
  shortName,
  bedroomsCount,
  mainPhoto,
}: Props) => {
  return (
    <Fade key={`offer_${id}`} tag={Card} className="offers__item">
      <CardImg top width="100%" src={mainPhoto} alt="Card image cap" />
      <CardBody>
        <CardTitle>
          <strong>{name}</strong>
        </CardTitle>
        <CardSubtitle>
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
        </CardSubtitle>
        <CardText>
          <strong>{guestsCount}</strong> pers, <strong>{bedroomsCount}</strong> bedrooms{' '}
          <strong>{shortName}</strong>
        </CardText>
        <div className="offers__btn-group">
          <Button block={true} color="success">
            View offer
          </Button>
        </div>
      </CardBody>
    </Fade>
  );
};

export default OfferItem;
