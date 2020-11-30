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

  const [characterName, setCharacterName] = useState('')
  const [characterGender, setCharacterGender] = useState('')
  const [characterHomeWorld, setCharacterHomeWorld] = useState('')
  const [characterGames, setCharacterGames] = useState('')

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
      item = {
        id: 999, // temporary ID, to be removed
        name: characterName,
        gender: characterGender,
        homeWorld: characterHomeWorld,
        games: characterGames
      }
    } else if (key === 'categories') {

    }

    console.log(item)
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
      <Form noValidate validated={formValidated} onSubmit={handleAddInstance}>
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
              <Form.Group controlId="id_game_file" >
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
              <Form.Group controlId="id_game_category">
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
              <Form.Group controlId="id_game_price">
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
              <Form.Group controlId="id_game_category">
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
              <Form.Group controlId="id_character_name" className="mt-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required 
                  type="text" 
                  placeholder="Mario"
                  onChange={e => setCharacterName(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">You have to specify a title!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_character_gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  required
                  as="select"
                  custom
                  defaultValue="Male"
                  onChange={e => setCharacterGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Unspecified">Unspecified</option>
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_character_home_world" className="mt-3">
                <Form.Label>Home wold</Form.Label>
                <Form.Control
                  required 
                  type="text" 
                  placeholder="Earth"
                  onChange={e => setCharacterHomeWorld(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">You have to specify a title!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="id_character_games">
                <Form.Label>Games</Form.Label>
                <Form.Control
                  required
                  as="select"
                  multiple
                  custom
                  onChange={e => setCharacterGames(e.target.value)}
                >
                  {props.games.map(game => 
                    <option key={game.title}>{game.title}</option>
                  )}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
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