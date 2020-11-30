import React from 'react'
import GameList from '../components/GameList'
import { Row, Container } from 'react-bootstrap'

const Games = () => {
  return (
    <Container>
      <h1 className='main-heading'>Games</h1>
      <Row xs={1} md={2} lg={3}>
        <GameList />
      </Row>
    </Container>
  )
}

export default Games
