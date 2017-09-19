import React, { Component } from 'react';
import logo from './images/glogo.png';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ListOfStudents from './components/ListOfStudents'
import StudentModal from './components/StudentModal'
import FilterBar from './components/FilterBar'

const attendance = [
  {
    id: 1,
    name: 'Nick Nasky',
    checkedIn: false,
    excused: false
  },
  {
    id: 2,
    name: 'Tyler Keesling',
    checkedIn: false,
    excused: false
  },
  {
    id: 3,
    name: 'Jae Holderby',
    checkedIn: false,
    excused: false
  },
  {
    id: 4,
    name: 'Cody Duskin',
    checkedIn: false,
    excused: false
  },
  {
    id: 5,
    name: 'Trenton Wuerker',
    checkedIn: false,
    excused: false
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
      filterStudents: [],
      selectedStudent: null,
      showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.attendanceSubmission = this.attendanceSubmission.bind(this)
    this.filteredStudents = this.filteredStudents.bind(this)
  }
  componentWillMount() {
    this.setState({
      students: attendance,
      filterStudents: attendance
    })
  }
  filteredStudents(filteredList) {
    this.setState({
      filterStudents: filteredList
    })
  }
  attendanceSubmission(selectedOption, selectedExcused, studentId) {
    function findId(cohort) {
      return cohort.id === studentId
    }

    let isExcused
    selectedOption ? isExcused = null : isExcused = selectedExcused

    this.setState(prevState => {
      prevState.filterStudents.find(findId).checkedIn = selectedOption
      prevState.filterStudents.find(findId).excused = isExcused
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
        <FilterBar students={this.state.students} filteredStudents={this.filteredStudents} />
        <ListOfStudents students={ this.state.filterStudents } toggleModal={this.toggleModal}/>
        <StudentModal toggleModal={this.toggleModal} showModal={this.state.showModal}
          student={this.state.selectedStudent} attendanceSubmission={this.attendanceSubmission}/>
        <Footer />
      </div>
    );
  }
}

export default App;
