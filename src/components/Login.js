import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render(){
    return(
      <div className="container">
          <div className="row">
              <div className="col-md-offset-5 col-md-3">
                  <div className="form-login">
                    <h4>Welcome back.</h4>
                    <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
                    <br></br>
                    <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
                    <br></br>
                    <div className="wrapper">
                      <Link to="/attendance">
                        <span className="group-btn">
                          <a className="btn btn-primary btn-md">Login<i className="fa fa-sign-in"></i></a>
                        </span>
                      </Link>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
