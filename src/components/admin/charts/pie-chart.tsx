'use client'

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

interface PieChartProps {
  label?: string
  dataSet: number[]
  labels: string[]
}

export default function PieChart (
  { dataSet, labels, label = '# de Ventas' }: PieChartProps
) {
  const data = {
    labels,
    datasets: [
      {
        label,
        data: dataSet,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return <Pie options={options} data={data} />
}
