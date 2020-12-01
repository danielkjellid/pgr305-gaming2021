import React from 'react'
import { useParams, Link } from 'react-router-dom'

const CharacterDetails = ({ data }) => {
  const { characterId } = useParams()
  const character = data.find((c) => c.id === Number(characterId))
  let characterData

  if (character) {
    characterData = (
      <>
        <div>
          <Link to='/characters'>Back to characters</Link>
        </div>
        <div className='character-details'>
          <img src='https://source.unsplash.com/random/300x300' alt='' />
          <div className='character-details-desc'>
            <h2> {character.title} </h2>
            <p>
              <span className='desc-gray'> Gender: </span> Male
            </p>
            <p>
              <span className='desc-gray'> Homeworld: </span> Azeroth
            </p>
            <div className='games-including-character'>
              <h3>Games</h3>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    characterData = <h2>Character doesnt exist</h2>
  }

  return <div> {characterData} </div>
}

export default CharacterDetails
