import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import Footer from '../Menu/footer.jsx'
import './index.css';


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
    "width": "100px"
  },
  input : {
    "padding": "10px 40px 10px 10px",
    "borderRadius": "5px",
    "backgroundColor": "transparent",
    "color": "#FFFFFF !important",
    "border": "2px solid #FFFFFF"
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
    "color": "#FFFFFF"
  }
}
const SignInPage = ({ history }) =>
  <div style={styles.cont} class="container">
    <div class="row">
      <center>

      <img src={require('../assets/logo_white.png')} style={styles.img} align="center" />
      <SignInForm history={history} />
      </center>
    </div>
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.MENU);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="container" style={styles.form}>
        <div class="row">
          <center>
            <h1 style={styles.texthead}>Sign in to order</h1>
          <form onSubmit={this.onSubmit}>
          <div class="row form-group" style={styles.row}>
            <input
              value={email}
              style = {styles.input}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email Address"
            />
            </div>
            <div class="row form-group" style={styles.row}>
              <input
                style = {styles.input}
                value={password}
                onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="row" style={styles.row}>
              <button className="btn btn-danger" style = {styles.button} disabled={isInvalid} type="submit">
                Sign In
              </button>
            </div>

            { error && <p>{error.message}</p> }
          </form>
          <PasswordForgetLink />
          <SignUpLink />
          </center>
          </div>

      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
