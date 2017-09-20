import React from 'react'
import { Button, FormGroup, ControlLabel, Radio, Col } from 'react-bootstrap/lib/'

class AttendanceOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      selectedExcused: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <FormGroup controlId="hereNotHere">
          <ControlLabel htmlFor="hereNotHere" >Attendance</ControlLabel>
          <Radio name="selectedOption" value='true' checked={this.state.selectedOption === true}
            onChange={this.handleChange} >
            Here
          </Radio>
          {' '}
          <Radio name="selectedOption" value='false' checked={this.state.selectedOption === false}
            onChange={this.handleChange} >
            Absent
          </Radio>
          {' '}
      </FormGroup>
      <FormGroup hidden={this.state.selectedOption} controlId="excused">
          <ControlLabel htmlFor="excused" >Excused/Unexcused</ControlLabel>
          <Radio name="selectedExcused" value='true' checked={this.state.selectedExcused === true}
            onChange={this.handleChange} >
            Excused
          </Radio>
          {' '}
          <Radio name="selectedExcused" value='false' checked={this.state.selectedExcused === false}
            onChange={this.handleChange} >
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
