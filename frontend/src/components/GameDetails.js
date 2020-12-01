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
            <h2> {game.title} </h2>
            <p>
              <span className='desc-gray'> Genre: </span> Fantasy
            </p>
            <p>
              <span className='desc-gray'> Price: </span> 599,-
            </p>
            <p>
              <span className='desc-gray'> Console: </span> PS5 & Xbox
            </p>
            <div className='characters-in-game'>
              <h3>Characters</h3>
            </div>
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
