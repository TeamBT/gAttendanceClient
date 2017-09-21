import React, { Component } from 'react';
import logo from './images/glogo.png';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={ logo }
                instructor="Roberto Ortega"
                cohort="g55" />
        <Footer />
      </div>
    )
  }
}

export default App;
