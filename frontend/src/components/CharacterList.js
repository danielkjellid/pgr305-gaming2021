import React from 'react'
import CharacterItem from './CharacterItem'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import { Link } from 'react-router-dom'

const CharacterList = ({ preview, url }) => {
  const { characterState } = useAsyncStateContext()

  const characters = preview
    ? characterState.data?.slice(0, 3)
    : characterState.data

  return characters
    ? characters.map((character) => (
        <Link
          to={`${url}/${character.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CharacterItem key={character.id} character={character} />
        </Link>
      ))
    : null
}

export default CharacterList
