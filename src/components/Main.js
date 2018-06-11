import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="*" component={NotFound}/>
  </Switch>
);

export default Main;
