
// import React from 'react';
// import  Home from "../Pages/homepage";
// import tos from "../Pages/terms";
// import pp from "../Pages/privacy";
// import error from "../Components/404";

import React, { Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
const Home = lazy(()=> import("../Pages/homepage"));
const tos = lazy(()=> import("../Pages/terms"));
const pp = lazy(()=> import("../Pages/privacy"));
const error = lazy(()=> import("../Components/404"));

export default function Routes() {
  return (
    <Suspense fallback={<p> </p>}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/terms-and-conditions" component={tos} />
      <Route path="/privacy-policy" component={pp} />
      <Route component={error}/>
    </Switch>
     </Suspense>
  );
}
