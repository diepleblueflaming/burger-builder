import React from 'react';
import {NavigationItem} from "./NavigationItem/NavigationItem";
import './NavigationItems.scss';

export const NavigationItems = () => {
  return (
    <div className="NavigationItems">
      <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
      <NavigationItem link="/" active={false}>Checkout</NavigationItem>
    </div>
  );
};
