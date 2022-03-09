import React from 'react'
import classes from './Content.module.css'
import Correlation from './Correlation'
import Humidity from './Humidity'
import Chart1 from './other/Chart1'
import Temperature from './Temperature'

const Content = () => {
  return (
    <div className={classes.content}>
      <Chart1 />
      <Temperature />
      <Humidity />
      <Correlation />
    </div>
  )
}

export default Content
