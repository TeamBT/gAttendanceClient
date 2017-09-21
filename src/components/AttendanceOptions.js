import React from 'react'
import { Button, FormGroup, ControlLabel, Radio, } from 'react-bootstrap/lib/'

class AttendanceOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      selectedExcused: null
    }
    this.nullExcused = this.nullExcused.bind(this)
  }
  componentWillMount() {
    this.setState({
      selectedOption: this.props.student.checkedIn,
      selectedExcused: this.props.student.excused,
    })
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value === 'true' ? true : false
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.attendanceSubmission(this.state.selectedOption, this.state.selectedExcused, this.props.student.id)
  }
  nullExcused() {
    let excusedAbsence
    if (this.state.selectedExcused === null) {
      excusedAbsence = false
    } else {
      excusedAbsence = this.state.selectedExcused
    }
    return excusedAbsence
  }
  render() {
    return(
    <form onSubmit={this.handleSubmit.bind(this)}>
      <FormGroup controlId="hereNotHere">
          <ControlLabel htmlFor="hereNotHere" >Attendance</ControlLabel>
          <Radio name="selectedOption" value='true' checked={this.state.selectedOption === true}
            onChange={this.handleChange.bind(this)} >
            Here
          </Radio>
          {' '}
          <Radio name="selectedOption" value='false' checked={this.state.selectedOption === false}
            onChange={this.handleChange.bind(this)} >
            Absent
          </Radio>
          {' '}
      </FormGroup>
      <FormGroup hidden={this.state.selectedOption} controlId="excused">
          <ControlLabel htmlFor="excused" >Excused/Unexcused</ControlLabel>
          <Radio name="selectedExcused" value='true' checked={this.nullExcused() === true}
            onChange={this.handleChange.bind(this)} >
            Excused
          </Radio>
          {' '}
          <Radio name="selectedExcused" value='false' checked={this.nullExcused() === false}
            onChange={this.handleChange.bind(this)} >
            Unexcused
          </Radio>
          {' '}
      </FormGroup>

      <Button type="submit" >
        Submit
      </Button>
    </form>
  )}
}

export default AttendanceOptions
