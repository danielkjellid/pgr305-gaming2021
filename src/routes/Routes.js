import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
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
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/games' component={Games}></Route>
        <Route exact path='/characters' component={Characters}></Route>
        <Route exact path='/admin' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
