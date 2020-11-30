import React from 'react'
import CharacterList from '../components/CharacterList'
import { Container, Row } from 'react-bootstrap'

const Characters = () => {
  return (
    <Container>
      <h1 className='main-heading'>Characters</h1>
      <Row xs={1} md={2} lg={3}>
        <CharacterList />
      </Row>
    </Container>
  )
}

export default Characters
