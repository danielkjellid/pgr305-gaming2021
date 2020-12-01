import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Modal, Button } from 'react-bootstrap'

import GameForm from './GameForm'
import CharacterForm from './CharacterForm'

const InstanceAddModal = (props) => {

  // state controlling active tab
  const [key, setKey] = useState('')

  // after render, set active tab based on active tab in admin overview
  useEffect(() => {
    setKey(props.tab)
  }, [props.tab])

  const handleAddInstance = (item) => {
    // send new item to parent
    // key is included as this tells parent if there is a 
    // new instance of games or characters
    // parent uses this information, and processes appropriately 
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
      <div>
        <Modal.Body>
          <Tabs
            id="add-instance-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab className="mt-3" eventKey="games" title="Game">
              <GameForm item={props.item} submit={handleAddInstance} />
            </Tab>
            <Tab className="mt-3" eventKey="characters" title="Character">
              <CharacterForm submit={handleAddInstance} games={props.games} />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          {/* ternary exp decides which form is to be submitted */}
          <Button variant="success" type="submit" form={key === 'games' ? 'game-form' : 'character-form'}>Add</Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}

export default InstanceAddModal