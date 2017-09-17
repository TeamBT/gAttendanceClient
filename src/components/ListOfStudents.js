import React from 'react'
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/'

const ListOfStudents = ({ students, toggleModal }) => {

  let student = students.map(student => {
    let checkedIn = student.checkedIn ? 'success' : 'danger'
    return (
      <Col sm={6} md={4} key={ student.name } >
        <ListGroupItem bsStyle={ checkedIn } onClick={toggleModal.bind(null, student)} className="StudentList-item">{ student.name }</ListGroupItem>
      </Col>
    )
  })

  return (
    <Col sm={8} md={10} smOffset={2} mdOffset={1}>
      <ListGroup>
        { student }
      </ListGroup>
    </Col>
  )
}

export default ListOfStudents
