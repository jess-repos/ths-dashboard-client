import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext()

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {
  const [data, setData] = useState()
  const [latest, setLatest] = useState()

  useEffect(() => {
    const getData = async () => {
      const api = 'https://mctemphumi.herokuapp.com/sensor/today'
      const response = await axios.get(api)
      const array = response.data
      setData(array)
      setLatest(array[array.length - 1])
    }
    getData()
  }, [])

  const getDataByDate = async (date) => {
    const api = 'https://mctemphumi.herokuapp.com/sensor/date/' + date
    const response = await axios.get(api)
    const array = response.data
    setData(array)
  }

  if (!data || !latest) return <h1>Loading...</h1>
  return (
    <DataContext.Provider
      value={{
        data,
        latest,
        getDataByDate,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
