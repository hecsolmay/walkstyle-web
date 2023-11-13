'use client'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

interface BarChartProps {
  labels: string[]
  label?: string
  dataSet: number[]
}

export default function BarChart (
  { dataSet, labels, label = 'Ventas' }: BarChartProps
) {
  const data = {
    labels, // Etiquetas para el eje X
    datasets: [
      {
        label, // Etiqueta para la primera serie de datos
        data: dataSet, // Valores de las barras para la primera serie
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ]
      }
    ]
  }

  return <Bar options={options} data={data} />
}
