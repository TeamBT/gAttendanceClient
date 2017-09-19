import React from 'react'
import {ToggleButtonGroup, ToggleButton, Col} from 'react-bootstrap/lib/'

class FilterBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "all"
    }
  }
  onChange = (value) => {
    if (value === 'all') {
      this.setState({value})
      let students = this.props.students
      this.props.filteredStudents(students)
    } else if (value === 'present') {
      let students = this.props.students.filter(student => {
        return student.checkedIn === true
      })
      this.props.filteredStudents(students)
      this.setState({value})
    } else if (value === 'absent') {
      let students = this.props.students.filter(student => {
        return student.checkedIn === false
      })
      this.props.filteredStudents(students)
      this.setState({value})
    }
  }
  render() {
    return (
      <Col className="buttonGroup" md={10} mdOffset={1}>
        <ToggleButtonGroup
          type="radio"
          name="filter"
          value={this.state.value}
          onChange={this.onChange}
          justified
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="present">Present</ToggleButton>
          <ToggleButton value="absent">Absent</ToggleButton>
        </ToggleButtonGroup>
      </Col>
    )
  }
}


export default FilterBar
