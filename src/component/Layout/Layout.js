/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:33
 */
import React, {Component} from 'react';
import {Toolbar} from "../Navigation/Toolbar/Toolbar";
import {SideDrawer} from "../Navigation/SideDrawer/SideDrawer";

export class Layout extends Component {

  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  };

  render () {
    return (
      <div className="Layout">
        <Toolbar SideDrawerToggleClicked={this.sideDrawerToggleHandler}/>
        <main>
          {this.props.children}
        </main>
        <nav>
          <SideDrawer
            open={this.state.showSideDrawer}
            sideDrawerCloseHandler={this.sideDrawerCloseHandler}
          />
        </nav>
      </div>
    );
  }
};
