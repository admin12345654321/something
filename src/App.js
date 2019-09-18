import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Authentification from "./components/Authentification/Authentification";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Authentification} />
      </Switch>
    </div>
  );
}

export default App;
