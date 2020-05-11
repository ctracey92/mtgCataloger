import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

//Import in all of my components
import Home from "./Pages/Home/home";
import Tester from "./components/tester";
import Other from "./components/other";
import FourOhFour from "./Pages/404/FourOhFour";
import Inventory from "./Pages/Inventory/Inventory"


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/other" component={Other} />
          <Route exact path="/tester" component={Tester} />
          <Route path="*" component={FourOhFour} />
        </Switch>

      </Router>
    )
  }
}

export default App;
