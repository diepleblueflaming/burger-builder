/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:33
 */
import React from 'react';
import {Toolbar} from "../Navigation/Toolbar/Toolbar";
import {SideDrawer} from "../Navigation/SideDrawer/SideDrawer";

export const Layout = (props) => {
  return (
    <div className="Layout">
      <Toolbar/>
      <main>
        {props.children}
      </main>
      <nav>
        <SideDrawer/>
      </nav>
    </div>
  );
};
