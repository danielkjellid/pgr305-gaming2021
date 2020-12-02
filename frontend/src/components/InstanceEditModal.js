import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import GameForm from './game/GameForm'
import CharacterForm from './character/CharacterForm'

const InstanceEditModal = (props) => {
  const handleEditInstance = (item) => {
    props.submitEdit(props.tab, item)
  }

  return (
    <Modal animation={false} show={props.show} onHide={props.onHide}>
      <Modal.Header>
        <Modal.Title>
          Edit{' '}
          {props.item.name !== undefined ? props.item.name : props.item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.tab === 'games' ? (
          <GameForm item={props.item} submit={handleEditInstance} />
        ) : (
          <CharacterForm
            item={props.item}
            games={props.games}
            submit={handleEditInstance}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Cancel
        </Button>
        {/* ternary exp decides which form is to be submitted */}
        <Button
          variant='success'
          type='submit'
          form={props.tab === 'games' ? 'game-form' : 'character-form'}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InstanceEditModal
