import React from 'react'
import { useAsyncStateContext } from '../../context/AsyncStateContext'
import GameItem from './GameItem'

const GameList = ({ preview, url, query }) => {
  const { gameState } = useAsyncStateContext()

  const games = preview ? gameState.data?.slice(0, 3) : gameState.data

  /*  return games
    ? games.map((game) => (
        <GameItem key={game.id} game={game} url={url} query={query} />
      ))
    : null */

  return games
    ? games
        .filter((game) =>
          game.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((game) => <GameItem key={game.id} game={game} url={url} />)
    : null
}

export default GameList
