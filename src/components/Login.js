import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render(){
    return(
      <div className="login-container">
          <div className="">
              <div className="">
                  <div className="form-login">
                    <h4>Welcome back.</h4>
                    <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
                    <br></br>
                    <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
                    <br></br>
                    <div className="wrapper">
                      <Link to="/attendance">
                          <button className="btn btn-warning btn-md">Login</button>
                      </Link>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
