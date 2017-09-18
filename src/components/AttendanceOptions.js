import React from 'react'
import { Button, FormGroup, ControlLabel, Radio } from 'react-bootstrap/lib/'

class AttendanceOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
    this.setState({
      selectedOption: this.props.student.checkedIn
    })
  }
  handleChange(event) {
    this.setState({
      selectedOption: event.target.value === 'true' ? true : false
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.attendanceSubmission(this.state.selectedOption, this.props.student.id)
  }
  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <FormGroup controlId="hereNotHere">
          <ControlLabel htmlFor="hereNotHere" >Attendance</ControlLabel>
          <Radio name="attendance" value='true' checked={this.state.selectedOption === true}
            onChange={this.handleChange} >
            Here
          </Radio>
          {' '}
          <Radio name="attendance" value='false' checked={this.state.selectedOption === false}
            onChange={this.handleChange} >
            Absent
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
