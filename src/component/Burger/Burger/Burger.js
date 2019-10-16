/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:42
 */
import React from 'react';
import './Burger.scss';
import PropTypes from 'prop-types';

import {BurgerIngredients} from "../BurgerIngredients/BurgerIngredients";
import {BurgerIngredientType} from "../../../constants/BurgerIngredients";

export const Burger = (props) => {
  const {ingredients} = props;
  let transformedIngredients = Object.keys(ingredients).
    map(igKey => {
      return [...Array(ingredients[igKey])].map((_, index) =>
        <BurgerIngredients type={igKey} key={igKey + '_' + index}/>
      );
    }).reduce((acc,curr) => [...acc, ...curr], []);

  if (!transformedIngredients.length) {
    transformedIngredients = <h1>Please add some burger ingredients</h1>
  }
  return (
    <div className="Burger">
      <BurgerIngredients type={BurgerIngredientType.BREAD_TOP}/>
      {
        transformedIngredients
      }
      <BurgerIngredients type={BurgerIngredientType.BREAD_BOTTOM}/>
    </div>
  );
};

Burger.protoTypes = {
  ingredients: PropTypes.object.isRequired
};
