import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const InstanceDeleteModal = (props) => {

  const handleConfirmDelete = () => {
    props.confirmDelete()
  }

  return (
    <Modal
      animation={false} 
      show={props.show} 
      onHide={props.onHide}
    >
        <Modal.Header closeButton>
          <Modal.Title>Delete instance</Modal.Title>
        </Modal.Header>
          <Modal.Body>Are you sure you want to delete {props.title}? This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            No
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete instance
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default InstanceDeleteModal