import React from 'react'
import GameList from '../components/game/GameList'
import CharacterList from '../components/character/CharacterList'
import Hero from '../components/Hero'
import HeadingNavigation from '../components/HeadingNavigation'
import { Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
        <HeadingNavigation
          headingText='Popular games'
          btnText='View all'
          link='/games'
        />
        <Row xs={1} md={2} lg={3}>
          <GameList preview={true} url='/games' query='' />
        </Row>
        <HeadingNavigation
          headingText='Popular characters'
          btnText='View all'
          link='/characters'
        />
        <Row xs={1} md={2} lg={3}>
          <CharacterList preview={true} url='/characters' query='' />
        </Row>
      </Container>
    </div>
  )
}

export default Home
