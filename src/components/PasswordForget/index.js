import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const styles = {
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
  },
    cont : {
      "backgroundColor": "rgb(178, 13, 41)",
      "height": "100vh",
      "paddingTop": "100px"
    },
    img : {
      "maxWidth": "200px"
    },
    form : {
      "margin": "50px",
      "backgroundColor": "transparent",
      "maxWidth": "400px",
      "padding": "50px"
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
      "width": "100px",
      "margin-bottom": "20px"
    },
    input : {
      "padding": "10px 40px 10px 10px",
      "borderRadius": "5px",
      "backgroundColor": "transparent",
      "color": "#FFFFFF !important",
      "border": "2px solid #FFFFFF"
    }
  }
const PasswordForgetPage = () =>
  <div>
    <PasswordForgetForm />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <div style={styles.cont} class="container">
        <div class="row">
          <center>
    
          <img src={require('../assets/logo_white.png')} style={styles.img} align="center" />
          <h1 style={styles.texthead}>Forgot your password?</h1>
          <p style={styles.textnorm}>Enter en email address to reset your password</p>
        <form onSubmit={this.onSubmit}>
        <div class="row" style={styles.row}>
          <input
            value={this.state.email}
            style = {styles.input}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
          </div>
          <button style = {styles.button} disabled={isInvalid} type="submit">
            Reset
          </button>

          { error && <p>{error.message}</p> }
        </form>
        <Link to={routes.SIGN_IN}><button style = {styles.button}>
            Back
          </button></Link>
        </center>
        </div>
        </div>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link style={styles.textsmall} to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
