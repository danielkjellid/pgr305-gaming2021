import React from 'react'
import { Container } from 'react-bootstrap'

const SubPageHero = ({ heading, page }) => {
  return (
    <div className={page ? 'hero game-hero' : 'hero character-hero'}>
      <Container>
        <h2>{heading}</h2>
      </Container>
      <div className="hero-overlay"></div>
    </div>
  )
}

export default SubPageHero
