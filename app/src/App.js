import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Header";
import Welcome from "./components/Welcome";
import DataProtection from "./components/dataProtection";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          {/* <Menu /> */}
          <Welcome />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="data_protection" component={DataProtection} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
