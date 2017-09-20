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
      selectedStudent: null,
      showModal: false,
      currentFilter: ''
    }
  }

  componentWillMount() {
    //api connect

    this.setState({
      students: attendance,
      currentFilter: 'all'
    })
  }

  toggleFilter(newFilter) {
    this.setState({ currentFilter: newFilter })
  }

  attendanceSubmission(selectedOption, selectedExcused, studentId) {
    function findId(cohort) {
      return cohort.id === studentId
    }

    let isExcused
    selectedOption ? isExcused = null : isExcused = selectedExcused

    this.setState(prevState => {
      prevState.students.find(findId).checkedIn = selectedOption
      prevState.students.find(findId).excused = isExcused
      prevState.showModal = false
    })
  }

  toggleModal(student) {
    this.state.showModal ?
      this.setState({ showModal: false }) :
      this.setState({ showModal: true,
                      selectedStudent: student
                    })
  }

  render() {
    let students = []
    if (this.state.currentFilter === 'all') {
      students = this.state.students
    } else if (this.state.currentFilter === 'absent') {
      students = this.state.students.filter(student => { return student.checkedIn === false })
    } else if (this.state.currentFilter === 'present') {
      students = this.state.students.filter(student => { return student.checkedIn === true })
    }
    return (
      <div>
        <Header logo={logo}
                instructor="Roberto Ortega"/>

        <FilterBar toggleFilter={ this.toggleFilter.bind(this) }/>

        <ListOfStudents students={ students }
                        toggleModal={ this.toggleModal.bind(this) } />

        <StudentModal toggleModal={ this.toggleModal.bind(this) }
                      showModal={ this.state.showModal }
                      student={ this.state.selectedStudent }
                      attendanceSubmission={ this.attendanceSubmission.bind(this) } />
        <Footer />
      </div>
    );
  }
}

export default App;
