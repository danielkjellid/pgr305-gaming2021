import React, { useEffect } from 'react'
import { useAsyncStateContext } from './context/AsyncStateContext'
import Routes from './routes/Routes'

const App = () => {
  const { characterState } = useAsyncStateContext()

  useEffect(() => {
    characterState.fetch()
  }, [])

  return (
    <div>
      <Routes />
    </div>
  )

  // enten sånn her
  /*
  if (characterState.isFetching === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1> {characterState.data?.title} </h1>
      <p> {characterState.data?.id} </p>
      <b> {characterState.data?.completed.toString()} </b>
    </div>
  )
  */

  // eller sånn her
  /* return (
    <>
      {characterState.isFetching ? (
        <h1>Jeg henter data...</h1>
      ) : (
        <div>
          <h1> {characterState.data?.title} </h1>
        </div>
      )}
    </>
  ) */
}

export default App
