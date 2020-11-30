import React from 'react'
import { Col, Card } from 'react-bootstrap'

const CharacterItem = ({ character }) => {
  return (
    <Col style={{ marginBottom: '40px' }}>
      <Card className='card'>
        <Card.Img
          variant='top'
          src='https://source.unsplash.com/random/150x100'
        />
        <Card.Body>
          <Card.Title>
            {character.title} {character.id}
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            non, ipsa hic id sapiente molestias?
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {character.userId} {character.completed}
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default CharacterItem
