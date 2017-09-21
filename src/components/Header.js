import React from 'react'
import { Navbar } from 'react-bootstrap/lib/'
import { Link } from 'react-router-dom'

const Header = ({ bsStyle, instructor, logo, cohort }) => {
  return (
    <Navbar className="header">
      <Navbar.Header>
      <Link to="/login">
        <img src={ logo } className="App-logo" alt="logo" />
      </Link>
        <Navbar.Brand>
          <span className="g">g</span>Attendance Tracker
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          <Link to="/">
            Instructor: <Navbar.Link>{ instructor }</Navbar.Link>
          </Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          Cohort: { cohort }
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
