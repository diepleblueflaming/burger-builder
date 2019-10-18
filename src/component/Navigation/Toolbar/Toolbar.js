import React from 'react';
import './Toolbar.scss';
import {Logo} from "../../UI/Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";

export const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Menu">Menu</div>
      <div className="Logo">
        <Logo/>
      </div>
      <nav className="DesktopOnly">
        <NavigationItems/>
      </nav>
    </header>
  );
};
