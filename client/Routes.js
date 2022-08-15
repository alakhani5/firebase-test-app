import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from "./App";

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" Component={App}/>

      </Switch>
      )
  }

}

export default Routes
