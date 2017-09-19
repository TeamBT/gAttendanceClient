import React from 'react'
import { ListGroupItem, Col } from 'react-bootstrap/lib/'

const Student = ({student, toggleModal}) => {

    let checkedIn
    if (student.checkedIn) {
      checkedIn = 'success'
    } else if (student.excused) {
      checkedIn = 'warning'
    } else {
      checkedIn = 'danger'
    }

    return (
      <Col sm={5} md={4} key={student.id} >
        <ListGroupItem bsStyle={checkedIn} onClick={toggleModal.bind(null, student)}
          className="StudentList-item">{ student.name }
        </ListGroupItem>
      </Col>
    )
}

export default Student
