import React from 'react'
import { useParams, Link } from 'react-router-dom'

const GameDetails = ({ data }) => {
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
            <img src={game.image} alt='' />
          </div>
          <div className='game-details-desc'>
            <h2> {game.title} </h2>
            <p>
              <span className='desc-gray'> Genre: </span> {game.genre}
            </p>
            <p>
              <span className='desc-gray'> Price: </span> {game.price},-
            </p>
            <p>
              <span className='desc-gray'> Console: </span> {game.console}
            </p>
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
