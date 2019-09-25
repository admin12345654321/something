import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Authentification from './pages/Authentification'
import Error from './pages/Error'
import Profile from './pages/Profile'
import Polls from './pages/Polls'

const App = () => (
  <Switch>
    <Route exact path='/' component={Authentification} />
    <Route to='/polls' component={Polls} />
    <Route path='/profile' component={Profile} />
    <Route component={Error} />
  </Switch>
)

export default App
