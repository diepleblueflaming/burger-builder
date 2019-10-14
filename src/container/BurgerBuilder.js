/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:43
 */

import React, {Component} from 'react';
import {Burger} from "../component/Burger/Burger/Burger";

export class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Burger/>
    );
  }
}
