import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AsyncStateProvider from './context/AsyncStateContext'

ReactDOM.render(
  <React.StrictMode>
    <AsyncStateProvider>
      <App />
    </AsyncStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
