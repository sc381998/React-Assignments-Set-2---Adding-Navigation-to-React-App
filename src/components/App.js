import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import LocationDisplay from "./LocationDisplay";
class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
