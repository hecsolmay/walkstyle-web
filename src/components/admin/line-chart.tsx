'use client'

import { Line } from 'react-chartjs-2'

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function LineChart () {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    }
  }

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // Etiquetas para el eje X
    datasets: [
      {
        label: 'Ventas Mensuales', // Etiqueta para la serie de datos
        data: [12, 19, 3, 5, 2], // Valores para el eje Y
        fill: false, // Opcional: si deseas rellenar el área bajo la línea
        borderColor: 'rgb(75, 192, 192)', // Color de la línea
        tension: 0.1 // Tensión de la curva (puedes ajustarlo según tus preferencias)
      }
    ]
  }
  return <Line options={options} data={data} />
}
