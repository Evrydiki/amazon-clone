import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* This is the default route */ }
          <Router path="/">
            <Header />
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
