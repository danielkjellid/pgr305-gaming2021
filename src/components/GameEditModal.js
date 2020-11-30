import React, { useState } from 'react'
import { 
  Button, 
  Modal, 
  Image, 
  Form, 
  InputGroup } from 'react-bootstrap'

const GameEditModal = (props) => {

  // define local state
  const [formValidated, setFormValidated] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [genre, setGenre] = useState('')
  const [price, setPrice] = useState('')
  const [console, setConsole] = useState('')

  // the handleEdit function fires whenever the form is submitted
  // e.g. the edit is made
  const handleEdit = (event) => {
    const form = event.currentTarget
    
    // check if the form isnt valid, and stop page reload and propagation
    // but no item is submitted to API or parent
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    // if form is valid, stop page reload and propagation
    event.preventDefault()
    event.stopPropagation()

    // set form as valid
    setFormValidated(true)

    // create a new, local, variable with the updated item
    // and update only the fields edited
    // this might stop weird bugs when patching to api
    let item = {
      id: props.game.id,
      title: title !== '' ? title : props.game.title,
      image: image !== '' ? image : props.game.image,
      genre: genre !== '' ? genre : props.game.category,
      price: price !== '' ? price : props.game.price,
      console: console !== '' ? console : props.game.console
    }

    // submit local, updated, item to parent, which will push to api
    // and update local state
    props.submitEdit(item)

    // reset fields
    // setTitle('')
    // setImage('')
    // setGenre('')
    // setPrice('')
    // setConsole('')

    // setFormValidated(false)
    // BUG: validtaion does not work if an item has been edited, and you go to edit a new item
  }

  return (
    <Modal
      animation={false} 
      show={props.show} 
      onHide={props.onHide}
    >
        <Modal.Header closeButton>
          <Modal.Title>Edit {props.game.title}</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={formValidated} onSubmit={handleEdit}>
          <Modal.Body>
              <Form.Group controlId="id_item_title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required 
                  type="text" 
                  defaultValue={props.game.title}
                  onChange={e => setTitle(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">You have to specify a title!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_item_file">
                <Form.Label>Image</Form.Label>
                <Form.File
                  label={props.game.image} 
                  custom
                  onChange={e => setImage(e.target.value)}
                />
                <Image 
                  className="product-image mt-2" 
                  src={props.game.image} 
                  rounded 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">You have to upload an image!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_item_category">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  required
                  as="select"
                  custom
                  defaultValue={props.game.genre}
                  onChange={e => setGenre(e.target.value)}
                >
                  <option value="Fantasy">Fantasy</option>
                  <option value="Sport">Sport</option>
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_item_price">
                <Form.Label>Price</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type="text" 
                    defaultValue={props.game.price}
                    onChange={e => setPrice(e.target.value)}
                  />
                  <InputGroup.Append>
                      <InputGroup.Text id="inputGroupPrepend">kr</InputGroup.Text>
                  </InputGroup.Append>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">You have to specify a price!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="id_item_category">
                <Form.Label>Console</Form.Label>
                <Form.Control
                  required
                  as="select"
                  custom
                  defaultValue={props.game.console}
                  onChange={e => setConsole(e.target.value)}
                >
                  <option value="0">ps5</option>
                  <option value="1">xbox</option>
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Cancel
            </Button>
            <Button variant="success" type="submit">Save</Button>
          </Modal.Footer>
        </Form>
    </Modal>
  )
}

export default GameEditModal