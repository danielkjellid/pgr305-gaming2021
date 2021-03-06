import React from 'react'
import CharacterItem from './CharacterItem'
import { useAsyncStateContext } from '../../context/AsyncStateContext'

const CharacterList = ({ preview, url, query }) => {
  const { characterState } = useAsyncStateContext()

  const characters = preview
    ? characterState.data?.slice(0, 3)
    : characterState.data

  return characters
    ? characters
        .filter((character) =>
          character.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((character) => (
          <CharacterItem key={character.id} character={character} url={url} />
        ))
    : null
}

export default CharacterList
