import React from 'react'
import { Container } from 'react-bootstrap'

const SubPageHero = ({ heading, page }) => {
  return (
    <div className={page ? 'game-hero' : 'character-hero'}>
      <Container>
        <h2>{heading}</h2>
      </Container>
    </div>
  )
}

export default SubPageHero
