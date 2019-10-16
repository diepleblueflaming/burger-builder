/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 16/10/2019-22:35
 */
import React from 'react';
import './BuildControl.scss';
import PropTypes from 'prop-types';

export const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <label className="Label">{props.label}</label>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};


BuildControl.propTypes = {
  label: PropTypes.string.isRequired
};
