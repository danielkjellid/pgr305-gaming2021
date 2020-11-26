import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <Container>
          <div className='hero-text'>
            <h1 className='hero-h1'>
              The future of <span className='text-primary'>gaming</span> is now.
            </h1>
            <p className='hero-p'>
              Get ready for 2021 by browsing our website for the latest game
              releases and cool new features.
            </p>
            <Button as={Link} to='/games' className='main-btn'>
              Browse games
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Hero
