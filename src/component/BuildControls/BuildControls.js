/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 16/10/2019-22:35
 */
import React from 'react';
import './BuildControls.scss';
import PropTypes from 'prop-types';
import {BuildControl} from "./BuildControl/BuildControl";
import {BurgerIngredientType} from "../../constants/BurgerIngredients";
import {BurgerIngredientPrice} from "../../constants/BurgerIngredients";

const controls = [
  {
    label: 'Salad', type: BurgerIngredientType.SALAD
  },
  {
    label: 'Meat', type: BurgerIngredientType.MEAT
  },
  {
    label: 'Cheese', type: BurgerIngredientType.CHEESE
  },
  {
    label: 'Bacon', type: BurgerIngredientType.BACON
  }
];

export const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>Current Burger Price: <strong>{props.totalPrice}$</strong></p>
      {
        controls.map(ctrl =>
          <BuildControl
            key={ctrl.type}
            label={ctrl.label + `(${BurgerIngredientPrice[ctrl.type]}$)`}
            added={props.added.bind(this, ctrl.type)}
            removed={props.removed.bind(this, ctrl.type)}
            disabled={props.disableInfo[ctrl.type]}
          />)
      }
      <button className="OrderButton" disabled={props.totalPrice <= 0}>ORDER NOW</button>
    </div>
  );
};

BuildControls.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disableInfo: PropTypes.object.isRequired
};
