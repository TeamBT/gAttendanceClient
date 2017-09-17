import React from 'react'
import { Modal, Button } from 'react-bootstrap/lib/'
// import StudentInfo from './StudentInfo'

const StudentModal = ({ toggleModal, showModal }) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={toggleModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          test
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default StudentModal
