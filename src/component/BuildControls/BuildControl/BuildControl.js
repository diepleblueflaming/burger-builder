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
      <button className="Less" onClick={props.removed} disabled={props.disabled}>Less</button>
      <button className="More" onClick={props.added}>More</button>
    </div>
  );
};


BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
