import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
class App extends Component {
  render() {
    return (
      <div id="main">
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
