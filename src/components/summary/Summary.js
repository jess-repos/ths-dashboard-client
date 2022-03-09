import React, { useState } from 'react'
import { useData } from '../../contexts/DataProvider'
import SpearmanRho from 'spearman-rho'
import classes from './Summary.module.css'
const Summary = () => {
  // const { data } = useData()
  const { data } = useData()
  const isEmpty = data.length === 0
  const [cor, setCor] = useState(0.0)
  const getAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
  const temperatures = data.map((item) => item.temperature)
  const humidities = data.map((item) => item.humidity)
  const getCorr = async () => {
    const corr = new SpearmanRho(temperatures, humidities)
    const corrValue = await corr.calc()
    setCor(corrValue.toFixed(4))
  }
  getCorr()
  return (
    <div className={classes.summary}>
      <h1>Summary</h1>
      <div className={classes.item}>
        <h2>Average</h2>
        <h2>
          {getAverage(temperatures).toFixed(1)}°C /{' '}
          {getAverage(humidities).toFixed(1)}%
        </h2>
      </div>
      <div className={classes.item}>
        <h2>Maximum</h2>
        <h2>
          {Math.max.apply(Math, temperatures).toFixed(1)}°C /{' '}
          {Math.max.apply(Math, humidities)}%
        </h2>
      </div>
      <div className={classes.item}>
        <h2>Minimum</h2>
        <h2>
          {Math.min.apply(Math, temperatures).toFixed(1)}°C /{' '}
          {Math.min.apply(Math, humidities)}%
        </h2>
      </div>
      <div className={classes.item}>
        <h2>Correlation</h2>
        <h2>{cor}</h2>
      </div>
    </div>
  )
}

export default Summary
