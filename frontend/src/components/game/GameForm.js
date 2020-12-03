import React, { useState } from 'react'
import axios from 'axios'
import { Form, InputGroup, Image } from 'react-bootstrap'

const GameForm = (props) => {

  // base state
  const [checkFormValidated, setCheckFormValidated] = useState(false)
  const [gameTitle, setGameTitle] = useState('')
  const [gameImage, setGameImage] = useState('')
  const [gameGenre, setGameGenre] = useState('Fantasy')
  const [gamePrice, setGamePrice] = useState()
  const [gameConsole, setGameConsole] = useState('PlayStation 5')

  const handleImageUpload = () => {
    let file = document.getElementById('id_game_file')
    let data = new FormData()

    data.append('file', file.files[0])

    axios.post('https://localhost:5001/games/uploadimage', data, {headers: {'Content-Type': 'multipart/form-data'}})
  }

  // handler for adding a game instance
  const handleSubmit = (event) => {
    const form = event.currentTarget
    const image = document.getElementById('id_game_file')

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
      let item = {}

      if (props.item !== undefined) {

        // only rerun handleImageUpload if there is a new image
        if (gameImage !== '') {
          handleImageUpload()
        }

        item = {
          id: props.item.id,
          title: gameTitle !== '' ? gameTitle : props.item.title,
          image: gameImage !== '' ? `https://localhost:5001/images/games/${image.files[0].name}` : props.item.image,
          genre: gameGenre !== '' ? gameGenre : props.item.category,
          price: gamePrice !== '' ? parseInt(gamePrice) : props.item.price,
          console: gameConsole !== '' ? gameConsole : props.item.console
        }
      } else {
        handleImageUpload()

        item = {
          title: gameTitle,
          image: `https://localhost:5001/images/games/${image.files[0].name}`,
          genre: gameGenre,
          price: parseInt(gamePrice),
          console: gameConsole
        }
      }

      // send item object to parent
      props.submit(item)
    }
  }

  return (
    <Form 
      id="game-form" 
      noValidate 
      validated={checkFormValidated} 
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="id_game_title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          defaultValue={props.item !== undefined ? props.item.title : null}
          placeholder="Title of the game"
          onChange={e => setGameTitle(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">You have to specify a title!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="id_game_file" >
        <Form.Label>Image</Form.Label>
        <Form.File
          required={props.item !== undefined ? false : true}
          label={props.item !== undefined ? props.item.image : 'Upload game cover'} 
          custom
          onChange={e => setGameImage(e.target.value)}
        />
        {props.item !== undefined 
          ? <Image 
              className="product-image-tooltip mt-2" 
              src={props.item.image} 
              rounded
            /> 
          : null
        }
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">You have to upload an image!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="id_game_category">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          required
          as="select"
          custom
          defaultValue={props.item !== undefined ? props.item.genre : gameGenre}
          onChange={e => setGameGenre(e.target.value)}
        >
          <option value="Fantasy">Fantasy</option>
          <option value="Sport">Sport</option>
        </Form.Control>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="id_game_price">
        <Form.Label>Price</Form.Label>
        <InputGroup>
          <Form.Control
            required
            type="number" 
            placeholder="Price of the game, e.g. 599"
            defaultValue={props.item !== undefined ? props.item.price : null}
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
          defaultValue={props.item !== undefined ? props.item.console : gameConsole}
          onChange={e => setGameConsole(e.target.value)}
        >
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="XBOX Series X">XBOX Series X</option>
        </Form.Control>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Form>
  )
}

export default GameForm