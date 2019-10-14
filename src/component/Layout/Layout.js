/**
 * Project: burger-builder
 * Author: Le Hai Diep(dieple)
 * Date-Time: 14/10/2019-22:33
 */
import React from 'react';

export const Layout = (props) => {
  return (
    <div className="Layout">
      <main>
        {props.children}
      </main>
    </div>
  );
};
