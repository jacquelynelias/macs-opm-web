import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const styles = {
  cont : {
    "backgroundColor": "rgb(178, 13, 41)",
    "height": "100vh",
    "paddingTop": "100px"
  },
  img : {
    "maxWidth": "200px"
  },
  form : {
    "margin": "20px",
    "backgroundColor": "transparent",
    "maxWidth": "400px"
  },
  row : {
    "paddingBottom": "20px"
  },
  button : {
    "backgroundColor": "#FFFFFF",
    "font-family": "Fira Sans Condensed, sans-serif",
    "color": "rgb(178, 13, 41)",
    "borderRadius": "0px",
    "border": "2px solid",
    "width": "150px"
  },
  input : {
    "padding": "10px 40px 10px 10px",
    "borderRadius": "5px",
    "backgroundColor": "transparent",
    "color": "#FFFFFF !important",
    "border": "2px solid #FFFFFF",
    
  },
  textsmall: {
    "font-size": "10px",
    "font-family": "Fira Sans Condensed, sans-serif",
    "color": "#FFFFFF"
  },
  textnorm: {
    "font-size": "14px",
    "font-family": "Fira Sans Condensed, sans-serif",
    "color": "#FFFFFF"
  },
  texthead: {
    "font-size": "40px",
    "font-family": "Fira Sans Condensed, sans-serif",
    "color": "#FFFFFF",
    "padding-bottom": "10px"
  }
}

const SignUpPage = ({ history }) =>
  <div style={styles.cont} class="container">
    <div class="row">
      <center>

      <img src={require('../assets/logo_white.png')} style={styles.img} align="center" />
      <SignUpForm history={history} />
      <p style={styles.textsmall}>
      Created an account?
      {' '}
      <Link style={styles.textsmall} to={routes.SIGN_IN}>Sign In</Link>
      </p>
      </center>
      </div>
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.MENU);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <div className="container" style={styles.form}>
        <div class="row">
          <center>
          <h1 style={styles.texthead}>Sign up to order</h1>
          <form onSubmit={this.onSubmit}>
          <div class="row form-group" style={styles.row}>
            <input
            value={username}
            style = {styles.input}
            onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
            type="text"
            placeholder="Full Name"
            class="form-control"
            />
            </div>
            <div class="row form-group" style={styles.row}>
              <input
              value={email}
              style = {styles.input}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email Address"
              class="form-control"
              />
            </div>
            <div class="row form-group" style={styles.row}>
              <input
                value={passwordOne}
                style = {styles.input}
                onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                type="password"
                placeholder="Password"
                class="form-control"
              />
            </div>
            <div class="row form-group" style={styles.row}>
              <input
              value={passwordTwo}
              style = {styles.input}
              onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
              type="password"
              placeholder="Confirm Password"
              class="form-control"
              />
            </div>
            <div class="row" style={styles.row}>
              <button className="btn btn-danger" style = {styles.button} disabled={isInvalid} type="submit">
                Sign Up
              </button>
            </div>

            { error && <p>{error.message}</p> }
          </form>
          </center>
          </div>

      </div>

    );
  }
}

const SignUpLink = () =>
  <p style={styles.textsmall}>
    Don't have an account?
    {' '}
    <Link style={styles.textsmall} to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};