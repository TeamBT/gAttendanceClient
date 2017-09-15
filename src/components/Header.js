import React from 'react'
import { Navbar } from 'react-bootstrap/lib/'

const Header = ({ bsStyle, instructor, logo }) => {
  return (
    <Navbar className="header">
      <Navbar.Header>
      <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Brand>
          <a href="#"><span className="g">g</span>Attendance Tracker</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          Instructor: <Navbar.Link href="#">{ instructor }</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          Have a great day!
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
