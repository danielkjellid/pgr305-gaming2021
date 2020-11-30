import React from 'react'
import { useParams } from 'react-router-dom'

const GameDetails = ({ data }) => {
  const { gameId } = useParams()
  const game = data.find((g) => g.id === Number(gameId))
  let gameData

  if (game) {
    gameData = (
      <div>
        <h3> {game.title} dskdkosdoksko </h3>
        <p> {game.id} </p>
      </div>
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
