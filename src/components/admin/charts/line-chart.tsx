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

interface LineChartData {
  labels: string[]
  label?: string
  dataSet: number[]
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

export default function LineChart (
  { dataSet, labels, label = 'Ventas' }: LineChartData
) {
  const truncatedLabels = labels.map((name) => (name.length > 8 ? name.slice(0, 8) + '...' : name))

  const data = {
    labels: truncatedLabels, // Etiquetas para el eje X
    datasets: [
      {
        label, // Etiqueta para la serie de datos
        data: dataSet, // Valores para el eje Y
        fill: true, // Opcional: si deseas rellenar el área bajo la línea
        borderColor: 'rgb(75, 192, 192)', // Color de la línea
        tension: 0.1 // Tensión de la curva (puedes ajustarlo según tus preferencias)
      }
    ]
  }
  return <Line options={options} data={data} />
}
