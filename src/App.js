import React from "react"
import { Route, Switch } from "react-router-dom"

import Authentification from "./pages/Authentification"
import ErrorPage from "./pages/ErrorPage"

const App = () => (
  <Switch>
    <Route exact path='/' component={Authentification} />
    <Route component={ErrorPage} />
  </Switch>
)

export default App
