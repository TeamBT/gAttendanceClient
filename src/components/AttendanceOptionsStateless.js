import React from 'react'
import { Button, FormGroup, ControlLabel, Radio } from 'react-bootstrap/lib/'

const AttendanceOptions = ({ student, attendanceSubmission }) => {

  function checkedInTrue(student) {
    return student.checkedIn ? 'checked' : null
  }

  function checkedInFalse(student) {
    return student.checkedIn ? null : 'checked'
  }

  return(
    <form>
      <FormGroup controlId="hereNotHere">
          <ControlLabel htmlFor="hereNotHere" >Attendance</ControlLabel>
          <Radio name="radioGroup" checked={checkedInTrue(student)} >
            Here
          </Radio>
          {' '}
          <Radio name="radioGroup" checked={checkedInFalse(student)} >
            Absent
          </Radio>
          {' '}
      </FormGroup>
      <Button type="submit" onClick={(event) => attendanceSubmission(event)}>
        Submit
      </Button>
    </form>
  )
}

// export default AttendanceOptions
