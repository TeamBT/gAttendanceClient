import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Attendance from './components/Attendance'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={ App } />
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ Attendance } />
    </div>
  </Router>,
  document.getElementById('root'))
