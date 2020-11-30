import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Modal, Form, Button, InputGroup } from 'react-bootstrap'

const InstanceAddModal = (props) => {

  // common state
  const [key, setKey] = useState('')
  const [formValidated, setFormValidated] = useState(false)

  // game state
  const [gameTitle, setGameTitle] = useState('')
  const [gameImage, setGameImage] = useState('')
  const [gameGenre, setGameGenre] = useState('')
  const [gamePrice, setGamePrice] = useState('')
  const [gameConsole, setGameConsole] = useState('')

  // after render, set active tab based on active tab in admin overview
  useEffect(() => {
    setKey(props.tab)
  }, [props.tab])

  const handleAddInstance = (event) => {
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

    let item = {}

    if (key === 'games') {
      
      item = {
        id: 999, // temporary ID, to be removed
        title: gameTitle,
        image: gameImage,
        genre: gameGenre,
        price: gamePrice,
        console: gameConsole
      }

    } else if (key === 'characters') {

    } else if (key === 'categories') {

    }

    props.submitAdd(key, item)
  }

  return (
    <Modal
      animation={false}
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header>
        Add new instance in {key}
      </Modal.Header>
      <Form validated={formValidated} onSubmit={handleAddInstance}>
        <Modal.Body>
          <Tabs
            id="add-instance-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="games" title="Game">
              <Form.Group controlId="id_game_title" className="mt-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required 
                  type="text" 
                  placeholder="Fifa 21"
                  onChange={e => setGameTitle(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">You have to specify a title!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_item_file">
                <Form.Label>Image</Form.Label>
                <Form.File
                  label="Upload game cover" 
                  custom
                  onChange={e => setGameImage(e.target.value)}
                  required
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
                  onChange={e => setGameGenre(e.target.value)}
                >
                  <option value="0">Fantasy</option>
                  <option value="1">Sport</option>
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_item_price">
                <Form.Label>Price</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type="text" 
                    placeholder="599"
                    onChange={e => setGamePrice(e.target.value)}
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
                  defaultValue="ps5"
                  onChange={e => setGameConsole(e.target.value)}
                >
                  <option value="ps5">ps5</option>
                  <option value="xbox">xbox</option>
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Tab>
            <Tab eventKey="characters" title="Character">
              <p>Character</p>
            </Tab>
            <Tab eventKey="categories" title="Category">
              <p>Category</p>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" type="submit">Add</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default InstanceAddModal