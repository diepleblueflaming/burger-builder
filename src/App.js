import React from 'react';
import {Layout} from "./component/Layout/Layout";
import {BurgerBuilder} from "./container/BurgerBuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
