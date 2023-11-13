import DashboardCardsSection from '@/components/admin/dashboard/cards'
import ChartSection from '@/components/admin/dashboard/chart'
import SalesTable from '@/components/admin/dashboard/sales'
import UsersTables from '@/components/admin/dashboard/users'
import { getDashboardInfo, getInfoCount, getLatestInfo } from '@/services/info'

export const dynamic = 'force-dynamic'

export default async function AdminPage () {
  const date = new Date()
  const firstDayNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1)
  date.setDate(1)
  const dateEnd = new Date(firstDayNextMonth.getTime() - 1)

  const [infoCount, dashboardInfo, latestInfo] = await Promise.all([
    getInfoCount({ dateStart: date }),
    getDashboardInfo({ dateStart: date, dateEnd }),
    getLatestInfo()
  ])

  const { totalSales } = dashboardInfo

  const { sales, users } = latestInfo

  return (
    <div className='flex flex-col gap-7'>
      <DashboardCardsSection infoCount={infoCount} totalSales={totalSales}/>

      <ChartSection dashboardInfo={dashboardInfo}/>

      <SalesTable sales={sales}/>

      <UsersTables users={users}/>

    </div>

  )
}
