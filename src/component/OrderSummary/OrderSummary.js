import React from 'react';
import PropTypes from "prop-types";
import {Button} from "../UI/Button/Button";

export const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).
  map(ignKey => {
      return (
        <li key={ignKey}>
          <span style={{textTransform: 'capitalize'}}>{ignKey.toLowerCase()}</span>: {props.ingredients[ignKey]}
        </li>
      )
  });
  return (
    <div className="OrderSummary">
      <h3>Your Order</h3>
      <p>A burger delicious with following ingredients: </p>
      <ul>{ingredients}</ul>
      <p><strong>Total Price: {props.totalPrice}$</strong></p>
      <p>Continue to checkout ?</p>
      <Button clicked={props.purchaseCancelledHandler} btnType="Danger">Cancel</Button>
      <Button clicked={props.purchaseContinuedHandler} btnType="Success">Continue</Button>
    </div>
  );
};


OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  purchaseCancelledHandler: PropTypes.func.isRequired,
  purchaseContinuedHandler: PropTypes.func.isRequired
};
