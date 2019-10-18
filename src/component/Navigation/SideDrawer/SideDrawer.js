import React from 'react';
import {Logo} from "../../UI/Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";
import {BackDrop} from "../../UI/BackDrop/BackDrop";
import './SideDrawer.scss';

export const SideDrawer = () => {
  return (
    <BackDrop show={true} clicked={}/>
    <div className="SideDrawer">
      <Logo customStyle={{
        height: '11%',
        marginBottom: '32px'
      }}/>
      <NavigationItems/>
    </div>
  );
};
