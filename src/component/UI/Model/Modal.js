import React, {Fragment} from 'react';
import './Modal.scss';
import PropTypes from "prop-types";
import {BackDrop} from "../BackDrop/BackDrop";
import {classname} from "../../../helpers/helpers";

export const Modal = (props) => {
  return (
    <Fragment>
      <BackDrop show={props.show} clicked={props.clicked}/>
      <div className={classname({
        Modal: true,
        show: props.show
      })}>
        {
          props.children
        }
      </div>
    </Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};
