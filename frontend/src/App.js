import React, { useEffect } from 'react'
import { useAsyncStateContext } from './context/AsyncStateContext'
import Routes from './routes/Routes'

const App = () => {
  const { gameState } = useAsyncStateContext()
  const { characterState } = useAsyncStateContext()

  useEffect(() => {
    // get data through service
    // provides get method by default
    gameState.service()
    characterState.service()
  }, [])

  return (
    <div>
      <Routes />
    </div>
  )
}

export default App
