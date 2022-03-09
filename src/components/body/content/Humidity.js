import React from 'react'
import { useData } from '../../../contexts/DataProvider'
import classes from './Chart.module.css'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const Humidity = () => {
  const { data } = useData()
  let delayed // delayed variable from animation

  const labels = data.map(
    (item) => `${item.hour < 10 ? '0' + item.hour : item.hour}:00`
  )
  return (
    <div className={classes.card}>
      <div className={classes.chart}>
        <Chart
          type='line'
          data={{
            labels: labels,
            datasets: [
              {
                data: data.map((item) => item.humidity),
                label: 'Humidity',
                fill: true,
                backgroundColor: 'rgba(235, 64, 52, 0.3)', // graph background
                borderColor: '#eb4034', // line color
                pointBackgroundColor: '#eb4034', // point color
                // tension: 0.4, // lince curve (0-1)
                yAxisID: 'y',
                xAxisID: 'x',
              },
            ],
          }}
          options={{
            // maintainAspectRatio: true,

            radius: 4, // point size
            hitRadius: 24, // point distance of hover
            hoverRadius: 12, // point size on hover
            responsive: true,

            plugins: {
              legend: {
                display: false, // hides legend
              },
            },
            animation: {
              onComplete: () => {
                delayed = true
              },
              delay: (context) => {
                let delay = 0
                if (
                  context.type === 'data' &&
                  context.mode === 'default' &&
                  !delayed
                ) {
                  delay = context.dataIndex * 50 // + context.dataIndex * 300
                }
                return delay
              },
            },
            scales: {
              y: {
                ticks: {
                  callback: (value) => value + '%',
                },
                grid: {
                  color: 'rgba(255,255,255,0.05)',
                },

                //   beginAtZero: true, // y axis labels begins at zero
              },
              x: {
                grid: {
                  color: 'rgba(255,255,255,0.05)',
                },
              },
            },
          }}
        />
      </div>
      <h1>Humidity</h1>
    </div>
  )
}

export default Humidity
