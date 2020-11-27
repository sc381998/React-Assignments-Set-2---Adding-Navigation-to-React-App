import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import { useLocation } from "react-router-dom";
class App extends Component {
  render() {
    function LocationDisplay() {
      const location = useLocation();
      return (
        <>
          <h3 data-testid="location-display">{location.pathname}</h3>
        </>
      );
    }
    return (
      <BrowserRouter>
        <div id="main">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />

            <Route component={NoMatch} />
          </Switch>

          <LocationDisplay />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
