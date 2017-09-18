import React, { Component } from 'react';
import logo from './images/glogo.png';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ListOfStudents from './components/ListOfStudents'
import StudentModal from './components/StudentModal'

const attendance = [
  {
    id: 1,
    name: 'Nick Nasky',
    checkedIn: false,
    Excused: false
  },
  {
    id: 2,
    name: 'Tyler Keesling',
    checkedIn: true,
    Excused: false
  },
  {
    id: 3,
    name: 'Jae Holderby',
    checkedIn: true,
    Excused: false
  },
  {
    id: 4,
    name: 'Cody Duskin',
    checkedIn: true,
    Excused: false
  },
  {
    id: 5,
    name: 'Trenton Wuerker',
    checkedIn: false,
    Excused: false
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
      selectedStudent: null,
      showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.attendanceSubmission = this.attendanceSubmission.bind(this)
  }
  componentWillMount() {
    this.setState({
      students: attendance
    })
  }
  attendanceSubmission(selectedOption, studentId) {
    function findId(cohort) {
      return cohort.id === studentId
    }

    this.setState(prevState => {
      prevState.students.find(findId).checkedIn = selectedOption
      prevState.showModal = false
    })
  }
  toggleModal(student) {
    this.state.showModal ? this.setState({showModal: false}) : this.setState({showModal: true, selectedStudent: student})
  }
  render() {
    return (
      <div>
        <Header logo={ logo } instructor="Roberto Ortega"/>
        <ListOfStudents students={ this.state.students } toggleModal={this.toggleModal}/>
        <StudentModal toggleModal={this.toggleModal} showModal={this.state.showModal}
          student={this.state.selectedStudent} attendanceSubmission={this.attendanceSubmission}/>
        <Footer />
      </div>
    );
  }
}

export default App;
