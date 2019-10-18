import React from 'react';
import PropTypes from "prop-types";
import './NavigationItem.scss';
import {classname} from "../../../../helpers/helpers";

export const NavigationItem = (props) => {
  return (
    <div className="NavigationItem">
      <a href={props.link} className={classname({
        active: props.active
      })}>{props.children}</a>
    </div>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};
