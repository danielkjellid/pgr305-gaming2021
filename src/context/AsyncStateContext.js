import { createContext, useContext } from 'react'
import useAsyncState from '../hooks/useAsyncState'

const AsyncStateContext = createContext(null)

// Liten custom-hook for å sjekke om konteksten eksisterer i treet.
// Kaster en feil hvis ikke.

export const useAsyncStateContext = () => {
  const context = useContext(AsyncStateContext)
  if (!context) {
    throw new Error('Missing provider for AsyncStateProvider')
  }
  return context
}

const AsyncStateProvider = ({ children }) => {
  const characterState = useAsyncState(
    'https://jsonplaceholder.typicode.com/todos/1'
  )

  //const gameState = useAsyncState()

  //const reviewsState = customHook

  return (
    <AsyncStateContext.Provider
      value={{
        characterState,
      }}
    >
      {children}
    </AsyncStateContext.Provider>
  )
}

export default AsyncStateProvider
