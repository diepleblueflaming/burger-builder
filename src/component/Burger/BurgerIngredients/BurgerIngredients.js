/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:08
 */

import React, {Component} from 'react';
import './BurgerIngredients.scss';
import {BurgerIngredientType} from "../../../constants/BurgerIngredients";

export class BurgerIngredients extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let element = null;
    const ingredientType = this.props.type;
    switch (ingredientType) {
      case BurgerIngredientType.BREAD_TOP:
        element = <div className="BurgerIngredients BreadTop"></div>;
        break;
      case BurgerIngredientType.BREAD_BOTTOM:
        element = <div className="BurgerIngredients BreadBottom"></div>;
        break;
      case BurgerIngredientType.MEAT:
        element = <div className="BurgerIngredients Meat"></div>;
        break;
      case BurgerIngredientType.SALAD:
        element = <div className="BurgerIngredients Salad"></div>;
        break;
      case BurgerIngredientType.CHEESE:
        element = <div className="BurgerIngredients Cheese"></div>;
        break;
      case BurgerIngredientType.BACON:
        element = <div className="BurgerIngredients Bacon"></div>;
        break;
      default:
        element = null;
        break;
    }
    return (
      element
    );
  }
}
