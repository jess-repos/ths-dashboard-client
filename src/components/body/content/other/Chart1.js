import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import classes from '../Chart.module.css'

const Chart1 = () => {
  return (
    <div className={classes.card}>
      <div className={classes.chartdoughnut}>
        <Doughnut
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgb(255, 94, 94)',
                  'rgb(96, 132, 252)',
                  'rgb(250, 226, 107)',
                  'rgb(125, 252, 111)',
                  'rgb(240, 110, 255)',
                  'rgb(255, 173, 110)',
                ],
                borderColor: [
                  'rgb(255, 41, 41)',
                  'rgb(43, 92, 255)',
                  'rgb(255, 220, 46)',
                  'rgb(71, 255, 51)',
                  'rgb(233, 41, 255)',
                  'rgb(255, 137, 46)',
                ],
                // hoverBackgroundColor: 'pink',
              },
            ],
          }}
        />
      </div>
      <h1>Doughnut Chart</h1>
    </div>
  )
}

export default Chart1
