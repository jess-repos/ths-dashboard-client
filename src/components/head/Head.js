import React from 'react'
import { useData } from '../../contexts/DataProvider'
import classes from './Head.module.css'
const Head = () => {
  const { latest } = useData()
  return (
    <div className={classes.head}>
      <div className={classes.content}>
        <h1>Live</h1>
        <div className={classes.temperature}>
          <h2>{latest.temperature.toFixed(1)}°C</h2>
        </div>
        <div className={classes.humidity}>
          <h2>{latest.humidity}%</h2>
          <p>Humidity</p>
        </div>
      </div>
      <div className={classes.footer}>
        <p>© Mark Christian Albinto</p>
      </div>
    </div>
  )
}

export default Head
