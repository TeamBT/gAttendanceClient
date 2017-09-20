import React from 'react'
import Student from './Student'
import {ListGroup, Col} from 'react-bootstrap/lib/'

const ListOfStudents = ({students, toggleModal}) => {
  return (
    <Col sm={12} md={10} smOffset={1} mdOffset={1}>
      <ListGroup className="listGroup">
        {students.map(student => {
          return <Student key={student.id}
                    student={student}
                    toggleModal={toggleModal} />
          }
        )}
      </ListGroup>
    </Col>
  )
}

export default ListOfStudents
