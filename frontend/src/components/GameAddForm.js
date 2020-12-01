import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const GameAddForm = (props) => {

  // base state
  const [checkFormValidated, setCheckFormValidated] = useState(false)
  const [gameTitle, setGameTitle] = useState('')
  const [gameImage, setGameImage] = useState('')
  const [gameGenre, setGameGenre] = useState('')
  const [gamePrice, setGamePrice] = useState('')
  const [gameConsole, setGameConsole] = useState('')

  // handler for adding a game instance
  const handleGameAdd = (event) => {
    const form = event.currentTarget

    // check if form is invalid
    if (form.checkValidity() === false) {
      // if it is, stop submit and propagation
      event.preventDefault()
      event.stopPropagation()
      setCheckFormValidated(true)
    
    // if the form is valid
    } else {
      // stop default browser behaviour
      event.preventDefault()
      event.stopPropagation()
      setCheckFormValidated(true)

      // create a new object with new data
      const item = {
        id: 999, // temporary ID, to be removed
        title: gameTitle,
        image: gameImage,
        genre: gameGenre,
        price: gamePrice,
        console: gameConsole
      }

      // send item object to parent
      props.addGame(item)
    }
  }

  return (
    <Form 
      id="game-add-form" 
      noValidate 
      validated={checkFormValidated} 
      onSubmit={handleGameAdd}
    >
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
          required
          label="Upload game cover" 
          custom
          onChange={e => setGameImage(e.target.value)}
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
            type="number" 
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
    </Form>
  )
}

export default GameAddForm