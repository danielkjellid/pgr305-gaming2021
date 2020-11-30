import React from 'react'
import { useParams, Link } from 'react-router-dom'

const GameDetails = ({ data }) => {
  const { gameId } = useParams()
  const game = data.find((g) => g.id === Number(gameId))
  let gameData

  if (game) {
    gameData = (
      <>
        <div>
          <Link to='/games'>Back to games</Link>
        </div>
        <div className='game-details'>
          <div>
            <img src='https://source.unsplash.com/random/300x400' alt='' />
          </div>
          <div className='game-details-desc'>
            <h2> {game.title} dskdkosdoksko </h2>
            <p> {game.id} </p>
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
