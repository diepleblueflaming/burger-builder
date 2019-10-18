import React from 'react';
import Proptypes from 'prop-types';
import {classname} from "../../../helpers/helpers";

import './Button.scss';

export const Button = (props) => {
  return (
    <button
      className={classname({
        Button: true,
        [props.btnType]: true
      })}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  clicked: Proptypes.func.isRequired,
  btnType: Proptypes.string.isRequired
};
