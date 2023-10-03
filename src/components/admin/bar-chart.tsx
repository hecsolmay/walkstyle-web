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

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7'], // Etiquetas para el eje X
  datasets: [
    {
      label: 'Ventas de la semana', // Etiqueta para la primera serie de datos
      data: [120, 1900, 300, 50, 200, 150, 50], // Valores de las barras para la primera serie
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ]
    }
  ]
}

export default function BarChart () {
  return <Bar options={options} data={data} />
}
