import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/homepage";
import tos from "../Pages/terms";
import pp from "../Pages/privacy"
import error from "../Components/404"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/terms-and-conditions" component={tos} />
      <Route path="/privacy-policy" component={pp} />
      <Route component={error}/>
    </Switch>
  );
}
