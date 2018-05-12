import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  import './footer.css'


class Footer extends Component {
    constructor(props) {
        super(props)     
    }

    render() {
      return (
          <div className="footer">
              <h3>Contact Us</h3>
              <a styles="color:#FFFFFF" href=""><i className="material-icons">email</i></a>
          </div>
      );
  }

}
export default Footer;
