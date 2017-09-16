import React from 'react'
import { Navbar } from 'react-bootstrap/lib/'

const Header = ({ bsStyle, instructor, logo }) => {
  return (
    <Navbar className="header">
      <Navbar.Header>
      <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Brand>
          <a><span className="g">g</span>Attendance Tracker</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          Instructor: <Navbar.Link>{ instructor }</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          Cohort: g55
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
