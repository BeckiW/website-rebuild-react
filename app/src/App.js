import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'


class App extends Component {
  render() {
    return (

      <Router>
        <div className="page-container">
          <Header />

          <Switch>
            <Route exact path="/" component={Welcome} />

          </Switch>

        </div>
      </Router>


    )
  }

}

export default App;
