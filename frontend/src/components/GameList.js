import React from 'react'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import GameItem from './GameItem'
import { Link } from 'react-router-dom'

const GameList = ({ preview, url }) => {
  const { gameState } = useAsyncStateContext()

  const games = preview ? gameState.data?.slice(0, 3) : gameState.data

  return games
    ? games.map((game) => (
        <Link to={`${url}/${game.id}`}>
          <GameItem key={game.id} game={game} />
        </Link>
      ))
    : null
}

export default GameList
