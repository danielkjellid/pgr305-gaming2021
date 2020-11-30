import React from 'react'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import GameItem from './GameItem'
import { Row } from 'react-bootstrap'

const GameList = ({ preview }) => {
  const { gameState } = useAsyncStateContext()

  const games = preview ? gameState.data?.slice(0, 3) : gameState.data

  return games
    ? games.map((game) => <GameItem key={game.id} game={game} />)
    : null
}

export default GameList
