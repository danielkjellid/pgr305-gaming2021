import React from 'react'
import { useParams, Link } from 'react-router-dom'
import CharacterItem from '../../components/character/CharacterItem'
import { useAsyncStateContext } from '../../context/AsyncStateContext'
import { Row, Col } from 'react-bootstrap'

const GameDetails = ({ data }) => {
  const { characterState } = useAsyncStateContext()
  const { gameId } = useParams()
  const game = data?.find((g) => g.id === String(gameId))

  let gameData

  if (game) {
    gameData = (
      <>
        <div>
          <Link to='/games'>Back to games</Link>
        </div>
        <div className='game-details'>
          <div>
            <img className='game-image' src={game.image} alt='Game cover' />
          </div>
          <div className='game-details-desc'>
            <h2> {game.title} </h2>
            <p>
              <span className='desc-gray'>Genre: </span> {game.genre}
            </p>
            <p>
              <span className='desc-gray'>Price: </span> {game.price},-
            </p>
            <p>
              <span className='desc-gray'>Console: </span> {game.console}
            </p>
            <p>
              <span className='desc-gray'>Characters: </span>
            </p>
            <Row>
              {characterState.data
                ?.filter((character) => character.gamesId.includes(gameId))
                .map((char) => (
                  <Col>
                    <CharacterItem
                      key={char.id}
                      character={char}
                      url={'/characters'}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </>
    )
  } else {
    gameData = <h2> Game doesnt exist </h2>
  }

  return (
    <div>
      <div> {gameData} </div>
    </div>
  )
}

export default GameDetails
