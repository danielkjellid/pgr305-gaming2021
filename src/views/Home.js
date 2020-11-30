import React from 'react'
import GameList from '../components/GameList'
import Hero from '../components/Hero'
import HeadingNavigation from '../components/HeadingNavigation'
import { Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
        <HeadingNavigation headingText='Popular games' btnText='View all' />
        <Row xs={1} md={2} lg={3}>
          <GameList preview={true} />
        </Row>
      </Container>
    </div>
  )
}

export default Home
