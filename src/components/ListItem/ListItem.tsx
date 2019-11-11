import * as React from 'react';
import {
  Fade,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
  Button,
} from 'reactstrap';

interface Props {
  name: string;
  mainPhoto: string;
  content?: React.ReactNode;
  subTitle?: React.ReactNode;
}

const ListItem = ({ name, content, subTitle, mainPhoto }: Props) => {
  return (
    <Fade tag={Card} className="list-item">
      <CardImg top width="100%" src={mainPhoto} alt="Card image cap" />
      <CardBody>
        <CardTitle>
          <strong>{name}</strong>
        </CardTitle>
        {subTitle && <CardSubtitle>{subTitle}</CardSubtitle>}
        {content && <CardText>{content}</CardText>}
        <Button color="success" block={true}>
          View offer
        </Button>
      </CardBody>
    </Fade>
  );
};

export default ListItem;
