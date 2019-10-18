/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:43
 */

import React, {Component, Fragment} from 'react';
import {Burger} from "../component/Burger/Burger/Burger";
import {BurgerIngredientType} from "../constants/BurgerIngredients";
import {BuildControls} from "../component/BuildControls/BuildControls";
import {BurgerIngredientPrice} from "../constants/BurgerIngredients";
import {OrderSummary} from "../component/OrderSummary/OrderSummary";
import {Modal} from "../component/UI/Model/Modal";

export class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    ingredients: {
      [BurgerIngredientType.CHEESE]: 1,
      [BurgerIngredientType.MEAT]: 1,
      [BurgerIngredientType.BACON]: 1,
      [BurgerIngredientType.SALAD]: 1
    },
    totalPrice: 0,
    purchasing: false
  };


  componentDidMount() {
    this.setState({
      totalPrice: this.calculateBurgerPrice()
    });
  }

  calculateBurgerPrice = () => {
    let totalPrice = 0;
    for (let ign in this.state.ingredients) {
      if (this.state.ingredients.hasOwnProperty(ign)) {
        totalPrice += this.state.ingredients[ign] * BurgerIngredientPrice[ign];
      }
    }
    return totalPrice;
  };

  addBurgerIngredients = (type) => {
    const newBurgerIngredients = {...this.state.ingredients};
    newBurgerIngredients[type] = newBurgerIngredients[type] + 1;
    const newTotalPrice = (this.state.totalPrice + BurgerIngredientPrice[type]).toFixed(2);

    this.setState({
      ingredients: newBurgerIngredients,
      totalPrice: parseFloat(newTotalPrice)
    });
  };


  removeBurgerIngredients = (type) => {
    if (!this.state.ingredients[type]) {
      return;
    }
    const newBurgerIngredients = {...this.state.ingredients};
    newBurgerIngredients[type] = newBurgerIngredients[type] - 1;
    const newTotalPrice = (this.state.totalPrice - BurgerIngredientPrice[type]).toFixed(2);

    this.setState({
      ingredients: newBurgerIngredients,
      totalPrice: parseFloat(newTotalPrice)
    });
  };

  orderHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseCancelledHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinuedHandler = () => {

  };


  render() {
    const disableInfo = {...this.state.ingredients};

    for (let ign in disableInfo) {
      if (this.state.ingredients.hasOwnProperty(ign)) {
        disableInfo[ign] = this.state.ingredients[ign] <= 0;
      }
    }
    return (
      <Fragment>
        <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            purchaseCancelledHandler={this.purchaseCancelledHandler}
            purchaseContinuedHandler={this.purchaseContinuedHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          totalPrice={this.state.totalPrice}
          added={this.addBurgerIngredients}
          removed={this.removeBurgerIngredients}
          disableInfo={disableInfo}
          ordered={this.orderHandler}
        />
      </Fragment>
    );
  }
}
