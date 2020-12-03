import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CharacterItem = ({ character, url }) => {
  return (
    <Col style={{ marginBottom: '40px' }}>
      <Link
        to={`${url}/${character.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className='character-card'>
          <img src={character.image} alt='Character' />
          <h3> {character.name} </h3>
          <p> {character.homeWorld} </p>
        </div>
      </Link>
    </Col>
  )
}

export default CharacterItem
