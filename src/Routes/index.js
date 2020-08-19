import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/homepage";
import tos from "../Pages/terms";
import pp from "../Pages/privacy"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/terms-and-conditions" component={tos} />
      <Route path="/privacy-policy" component={pp} />
    </Switch>
  );
}
