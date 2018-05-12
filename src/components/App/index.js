import React from 'react';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import Menu from '../Menu/menu.jsx';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';
import './App.css';
import Main from '../Menu/main.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import MenuItem from '../Menu/menu-items.jsx'
import Cart from '../Menu/cart';

const App = () =>
  <Router>
    <div className="app">
      <Navigation />

      <Route exact path={routes.LANDING} component={() => <SignInPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route path='/menu' component={Menu}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/choose/item/:id' component={MenuItem}/>

    </div>
  </Router>

export default withAuthentication(App);