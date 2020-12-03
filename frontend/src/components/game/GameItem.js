import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GameItem = ({ game, url }) => {
  return (
    <Col style={{ marginBottom: '40px' }}>
      <Link
        to={`${url}/${game.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card className='card'>
          <Card.Img variant='top' src={game.image} />
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Text>{game.genre}</Card.Text>
          </Card.Body>
          <Card.Footer> {game.console} </Card.Footer>
        </Card>
      </Link>
    </Col>
  )
}

export default GameItem
