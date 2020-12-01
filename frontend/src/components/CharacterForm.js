import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const CharacterForm = (props) => {
  const [checkFormValidated, setCheckFormValidated] = useState(false)
  const [characterName, setCharacterName] = useState('')
  const [characterGender, setCharacterGender] = useState('')
  const [characterHomeWorld, setCharacterHomeWorld] = useState('')
  const [characterGames, setCharacterGames] = useState('')

  const handleMultipleGamesSelect = (event) => {
    const selected = []
    let selectedOption = (event.target.selectedOptions)

    for (let i = 0; i < selectedOption.length; i++) {
      selected.push(selectedOption.item(i).value)
    }

    setCharacterGames(selected)
  }

  const handleSubmit = (event) => {
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

      let item = {}

      if (props.item !== undefined) {
        item = {
          id: props.item.id,
          name: characterName !== '' ? characterName : props.item.name,
          gender: characterGender !== '' ? characterGender : props.item.gender,
          homeWorld: characterHomeWorld !== '' ? characterHomeWorld : props.item.homeWorld,
          gamesId: characterGames !== '' ? characterGames : props.item.gamesId,
        }
      } else {
        item = {
          id: 999, // temporary ID, to be removed
          name: characterName,
          gender: characterGender,
          homeWorld: characterHomeWorld,
          gamesId: characterGames
        }
      }

      // send item object to parent
      props.submit(item)
    }
  }

  return (
    <Form 
      id="character-form" 
      noValidate 
      validated={checkFormValidated} 
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="id_character_name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          defaultValue={props.item !== undefined ? props.item.name : null}
          placeholder="Name of character"
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
          defaultValue={props.item !== undefined ? props.item.gender : 'Male'}
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
          defaultValue={props.item !== undefined ? props.item.homeWorld : null}
          placeholder="World of which the character lives in"
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
          defaultValue={props.item !== undefined ? props.item.gamesId : null}
          values={props.games}
          onChange={e => handleMultipleGamesSelect(e)}
        >
          {props.games.map(game => 
            <option key={game.id} value={game.id}>{game.title}</option>
          )}
        </Form.Control>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Form>
  )
}

export default CharacterForm