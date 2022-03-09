import React from 'react'
import { useData } from '../../../contexts/DataProvider'
import classes from './Chart.module.css'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
const Correlation = () => {
  const { data } = useData()
  return (
    <div className={classes.card}>
      <div className={classes.chart}>
        <Chart
          type='scatter'
          data={{
            datasets: [
              {
                label: 'Temperature X Humidity',
                data: data.map((item) => {
                  return { x: item.temperature, y: item.humidity }
                }),
                borderColor: '#eb4034', // line color
                // pointBackgroundColor: '#eb4034', // point color
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          }}
          options={{
            // maintainAspectRatio: true,

            radius: 5, // point size
            //   hitRadius: 30, // point distance of hover
            hoverRadius: 12, // point size on hover
            responsive: true,

            plugins: {
              legend: {
                display: false, // hides legend
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
                // beginAtZero: true, // y axis labels begins at zero
              },
              x: {
                ticks: {
                  callback: (value) => value + '°C',
                },
                grid: {
                  color: 'rgba(255,255,255,0.05)',
                },
                // beginAtZero: true, // y axis labels begins at zero
              },
            },
          }}
        />
      </div>
      <h1>Correlation</h1>
    </div>
  )
}

export default Correlation
