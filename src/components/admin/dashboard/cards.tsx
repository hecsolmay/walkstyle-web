import { BackNoteIcon, ShoppingBagIcon, ShoppingCartIcon, UsersPairIcon } from '@/components/icons'
import { type InfoCount } from '@/services/info'
import DashboardCard from './dashboard-card'

interface DashboardCardsSectionProps {
  infoCount: InfoCount
  totalSales: number
}

export default function DashboardCardsSection (
  { infoCount, totalSales }: DashboardCardsSectionProps
) {
  const { totalProducts, totalSalesAmount, totalUsers } = infoCount

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4'>
      <DashboardCard
        title="Recaudaciones del mes"
        info={totalSalesAmount.toLocaleString('es-MX', {
          style: 'currency',
          currency: 'MXN'
        })}>
        <BackNoteIcon className='h-10 w-10 text-green-600'/>
      </DashboardCard>
      <DashboardCard
        title="Unidades vendidas"
        info={totalSales.toString()}>
        <ShoppingCartIcon className='h-10 w-10 text-blue-600'/>
      </DashboardCard>
      <DashboardCard title="Usuarios Totales" info={totalUsers.toString()}>
        <UsersPairIcon className='h-10 w-10 text-slate-600'/>
      </DashboardCard>
      <DashboardCard title="Productos" info={totalProducts.toString()}>
        <ShoppingBagIcon className='h-10 w-10 text-yellow-400'/>
      </DashboardCard>
    </div>
  )
}
