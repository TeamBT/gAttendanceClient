import React from 'react'
import AttendanceOptions from './AttendanceOptions'
import { Modal, Button } from 'react-bootstrap/lib/'
// import StudentInfo from './StudentInfo'

const StudentModal = ({ toggleModal, showModal, student, attendanceSubmission }) => {
  return (
    <div className="modal">
      <Modal
        show={showModal}
        onHide={toggleModal}
        bsSize='sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            { student !== null ? student.name : 'Loading...' }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AttendanceOptions student={ student } attendanceSubmission={ attendanceSubmission } />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ toggleModal }>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default StudentModal
