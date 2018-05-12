import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ sessionStore }) =>
  <center>
  <div>
    { sessionStore.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>
  </center>

const NavigationAuth = () =>
    <div>
    </div>

const NavigationNonAuth = () =>
    <div>
    </div>


export default compose(
  inject('sessionStore'),
  observer
)(Navigation);
