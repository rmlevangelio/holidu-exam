import * as React from 'react';
import { Spinner as ReactstrapSpinner } from 'reactstrap';

import './Spinner.scss';

interface Props {
  color: string;
}

const Spinner = ({ color }: Props) => {
  return (
    <div className="spinner-container">
      <ReactstrapSpinner color={color} />
    </div>
  );
};

export default Spinner;
