import React, { Component } from 'react';
import logo from './images/glogo.png';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ListOfStudents from './components/ListOfStudents'

const attendance = [
  {
    id: 1,
    name: 'Nick',
    checkedIn: true,
    Excused: false
  },
  {
    id: 2,
    name: 'Tyler',
    checkedIn: true,
    Excused: false
  },
  {
    id: 3,
    name: 'Jae',
    checkedIn: true,
    Excused: false
  },
  {
    id: 4,
    name: 'Cody',
    checkedIn: true,
    Excused: false
  },
  {
    id: 5,
    name: 'Trenton',
    checkedIn: false,
    Excused: false
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={ logo } instructor="Roberto Ortega"/>
        <ListOfStudents students={ attendance }/>
        <Footer />
      </div>
    );
  }
}

export default App;
