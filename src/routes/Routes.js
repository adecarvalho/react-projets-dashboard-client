import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "../pages/HomePage"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import SujetsPage from "../pages/SujetsPage"
import PostsPage from "../pages/PostsPage"
import VisaPage from "../pages/VisaPage"

const Routes = props => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/sujets" component={SujetsPage} />
    <Route exact path="/visa/:id" component={VisaPage} />
    <Route exact path="/posts/:id" component={PostsPage} />
  </Switch>
)

export default Routes
