import axios from 'axios'
import { useState } from 'react'

const useAsyncState = (url) => {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  const service = async (body = undefined, method = 'GET') => {
    setIsFetching(true)

    try {
      const res = await axios({ url, method, body })
      setData(res.data)
      setIsFetching(false)
    } catch (error) {
      setIsFetching(false)
      setError(error)
    }
  }

  return {
    data,
    error,
    isFetching,
    service,
  }
}

export default useAsyncState
