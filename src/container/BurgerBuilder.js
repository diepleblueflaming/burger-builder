/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:43
 */

import React, {Component, Fragment} from 'react';
import {Burger} from "../component/Burger/Burger/Burger";
import {BurgerIngredientType} from "../constants/BurgerIngredients";
import {BuildControls} from "../component/BuildControls/BuildControls";

export class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    ingredients: {
      [BurgerIngredientType.CHEESE]: 2,
      [BurgerIngredientType.MEAT]: 3,
      [BurgerIngredientType.BACON]: 1,
      [BurgerIngredientType.SALAD]: 2
    }
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </Fragment>
    );
  }
}
