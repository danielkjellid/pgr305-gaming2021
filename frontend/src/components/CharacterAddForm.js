import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const CharacterAddForm = (props) => {
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

  const handleCharacterAdd = (event) => {
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
        name: characterName,
        gender: characterGender,
        homeWorld: characterHomeWorld,
        gamesId: characterGames
      }

      // send item object to parent
      props.addCharacter(item)
    }
  }

  return (
    <Form 
      id="character-add-form" 
      noValidate 
      validated={checkFormValidated} 
      onSubmit={handleCharacterAdd}
    >
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

export default CharacterAddForm