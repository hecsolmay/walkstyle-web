import { type DashboardResponse } from '@/services/info'
import dynamic from 'next/dynamic'

const LineChart = dynamic(
  async () => await import('@/components/admin/charts/line-chart'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
)
const BarChart = dynamic(
  async () => await import('@/components/admin/charts/bar-chart'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
)

const PieChart = dynamic(
  async () => await import('@/components/admin/charts/pie-chart'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
)

interface ChartSectionProps {
  dashboardInfo: DashboardResponse
}

export default function ChartSection (
  { dashboardInfo }: ChartSectionProps
) {
  const { topProducts, topCategories, lestSoldProducts } = dashboardInfo

  const suffledTopProducts = [...topProducts].sort(() => Math.random() - 0.5)

  const suffledTopCategories = [...topCategories].sort(() => Math.random() - 0.5)

  const suffledLestSoldProducts = [...lestSoldProducts].sort(() => Math.random() - 0.5)

  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
        <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
          <div className='flex flex-col gap-4'>
            <h3>Productos menos vendidos</h3>
            <LineChart
              labels={suffledLestSoldProducts.map(p => p.name)}
              dataSet={suffledLestSoldProducts.map(p => p.totalSales)}
              label='Ventas del mes'
            />
          </div>
        </div>
        <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
          <div className='flex flex-col gap-4'>
            <h3>Categorias más vendidas</h3>
            <BarChart
              label='Ventas del mes'
              labels={suffledTopCategories.map(category => category.name)}
              dataSet={suffledTopCategories.map(category => category.totalSales)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
          <div className='flex flex-col gap-4'>
            <h3>Productos más vendidos</h3>
            <div className='grid h-96 place-content-center'>
              <PieChart
                label='# de ventas'
                labels={suffledTopProducts.map(product => product.name)}
                dataSet={suffledTopProducts.map(product => product.totalSales)}
              />
            </div>

          </div>
        </div>
      </div>
    </>

  )
}
