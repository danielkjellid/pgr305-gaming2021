import React, { useEffect } from 'react'
import { useAsyncStateContext } from './context/AsyncStateContext'

const App = () => {
  const { characterState } = useAsyncStateContext()

  useEffect(() => {
    characterState.fetch()
  }, [])

  useEffect(() => {
    if (characterState.data) {
      console.log(characterState.data)
    }
  }, [characterState.data])

  return (
    <>
      {characterState.isFetching ? (
        <h1>Jeg henter data...</h1>
      ) : (
        <div>
          <h1> {characterState.data?.title} </h1>
        </div>
      )}
    </>
  )
}

export default App
