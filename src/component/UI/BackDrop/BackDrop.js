import React from 'react';
import PropTypes from 'prop-types';
import './BackDrop.scss';

export const BackDrop = (props) => {
  return (
    props.show ?
    <div
      className="Backdrop"
      onClick={props.clicked}
    >
    </div> : null
  );
};

BackDrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};
