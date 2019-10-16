/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 16/10/2019-22:35
 */
import React from 'react';
import './BuildControls.scss';
import PropTypes from 'prop-types';
import {BuildControl} from "./BuildControl/BuildControl";

const controls = [
  {
    label: 'Salad', type: 'salad'
  },
  {
    label: 'Meat', type: 'meat'
  },
  {
    label: 'Cheese', type: 'cheese'
  },
  {
    label: 'Bacon', type: 'bacon'
  }
];

export const BuildControls = () => {
  return (
    <div className="BuildControls">
      {
        controls.map(ctrl => <BuildControl label={ctrl.label}/>)
      }
    </div>
  );
};
