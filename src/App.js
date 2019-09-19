import React from "react";
import { Route, Switch } from "react-router-dom";

import Authentification from "./pages/Authentification";

const App = () => (
  <Switch>
    <Route exact path="/" component={Authentification} />
  </Switch>
);

export default App;
