import React from 'react'
import { Card, Col } from 'react-bootstrap'

const GameItem = ({ game }) => {
  return (
    <Col style={{ marginBottom: '40px' }}>
      <Card className='card'>
        <Card.Img
          variant='top'
          src='https://source.unsplash.com/random/150x100'
        />
        <Card.Body>
          <Card.Title>
            {game.title} {game.id}
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            non, ipsa hic id sapiente molestias?
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {game.userId} {game.completed}
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default GameItem
