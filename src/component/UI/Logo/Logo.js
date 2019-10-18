import React from 'react';
import BurgerBuilder from '../../../assets/images/burger-logo.png';
import './Logo.scss';
import PropTypes from "prop-types";


export const Logo = (props) => {
  return (
    <div className="Logo" style={props.customStyle || {}}>
      <img src={BurgerBuilder} alt="Burger Builder Logo"/>
    </div>
  );
};

Logo.propTypes = {
  customStyle: PropTypes.object
};
