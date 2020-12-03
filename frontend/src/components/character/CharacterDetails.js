import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAsyncStateContext } from '../../context/AsyncStateContext'

const CharacterDetails = ({ data }) => {
  const { gameState } = useAsyncStateContext()
  const { characterId } = useParams()
  const character = data?.find((c) => c.id === String(characterId))
  let characterData
  console.log(character?.gamesId)

  if (character) {
    characterData = (
      <>
        <div>
          <Link to='/characters'>Back to characters</Link>
        </div>
        <div className='character-details'>
          <img
            className='character-image'
            src={character.image}
            alt='Character portrait'
          />
          <div className='character-details-desc'>
            <h2> {character.name} </h2>
            <p>
              <span className='desc-gray'> Gender: </span> {character.gender}
            </p>
            <p>
              <span className='desc-gray'> Homeworld: </span>
              {character.homeWorld}
            </p>
            <div className='games-including-character'>
              <h5>Appears in:</h5>
              <div className='character-gamelist'>
                {character?.gamesId.map((id) =>
                  gameState.data
                    ?.filter((game) => game.id === id)
                    .map((filteredGame) => (
                      <Link to={`/games/${filteredGame.id}`}>
                        <img
                          alt='Game cover'
                          key={filteredGame.id}
                          src={filteredGame.image}
                          style={{
                            width: '150px',
                            marginRight: '10px',
                          }}
                        ></img>
                      </Link>
                    ))
                )}
              </div>
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
