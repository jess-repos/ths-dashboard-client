import React, { useState } from 'react'
import { useData } from '../../contexts/DataProvider'
import classes from './Header.module.css'

const defaultDate = new Date().toISOString().substring(0, 10)

const Header = () => {
  const { getDataByDate } = useData()
  const [date, setDate] = useState(defaultDate)

  const dateChangeHandler = async (e) => {
    const value = e.target.value
    setDate(value)
    const selectedDate = new Date(value)
    const formattedDate = `${selectedDate.getDate()}-${
      selectedDate.getMonth() + 1
    }-${selectedDate.getFullYear()}`
    console.log(formattedDate)
    await getDataByDate(formattedDate)
  }
  return (
    <div className={classes.header}>
      <h1>THS Dashboard</h1>
      <div className={classes.action}>
        <h2>
          {new Date(date).toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </h2>
        <input
          type='date'
          id='date'
          value={date}
          onChange={dateChangeHandler}
          min={'2022-02-17'}
          max={defaultDate}
        />
      </div>
    </div>
  )
}

export default Header
