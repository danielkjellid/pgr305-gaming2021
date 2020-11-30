import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../views/Home'
import Characters from '../views/Characters'
import Games from '../views/Games'
import Admin from '../views/Admin'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/games'>
          <Games />
        </Route>
        <Route path='/characters'>
          <Characters />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
