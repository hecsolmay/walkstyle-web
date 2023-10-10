import { AdminTable } from '@/components/admin/admin-table'
import DashboardCard from '@/components/admin/dashboard-card'
import { ShoppingBagIcon, ShoppingCartIcon, UsersPairIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import dynamic from 'next/dynamic'

const LineChart = dynamic(
  async () => await import('@/components/admin/line-chart'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
)
const BarChart = dynamic(
  async () => await import('@/components/admin/bar-chart'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
)

export default function AdminPage () {
  return (
    <div className='flex flex-col gap-7'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3'>
        <DashboardCard title="Total Sales" info="$45,5">
          <ShoppingCartIcon className='h-10 w-10 text-blue-600'/>
        </DashboardCard>
        <DashboardCard title="Total Users" info="345">
          <UsersPairIcon className='h-10 w-10 text-green-600'/>
        </DashboardCard>
        <DashboardCard title="Total Products" info="450">
          <ShoppingBagIcon className='h-10 w-10 text-yellow-400'/>
        </DashboardCard>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
        <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
          <div className='flex flex-col gap-4'>
            <h3>Recaudaciones</h3>
            <LineChart />
          </div>
        </div>
        <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
          <div className='flex flex-col gap-4'>
            <h3>Recaudaciones de la semana</h3>
            <BarChart />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
        <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
          <div className="flex flex-col gap-4">
            <h3>Ultimas ganancias</h3>

            <AdminTable headers={['total', 'products', 'user']}>
              <TR>
                <TD>$1200</TD>
                <TD>20</TD>
                <TD>Hector Solis</TD>
              </TR>
              <TR>
                <TD>$1200</TD>
                <TD>20</TD>
                <TD>Hector Solis</TD>
              </TR>
              <TR>
                <TD>$1200</TD>
                <TD>20</TD>
                <TD>Hector Solis</TD>
              </TR>
            </AdminTable>
          </div>
        </div>

        <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
          <div className="flex flex-col gap-4">
            <h3>Ultimos Usuarios </h3>

            <AdminTable headers={['Email', 'Rol', 'Hace']}>
              <TR>
                <TD>hecsolmay@gmail.com</TD>
                <TD>ADMIN</TD>
                <TD>hace 18 horas</TD>
              </TR>

              <TR>
                <TD>hecsolmay@gmail.com</TD>
                <TD>ADMIN</TD>
                <TD>hace 18 horas</TD>
              </TR>

              <TR>
                <TD>hecsolmay@gmail.com</TD>
                <TD>ADMIN</TD>
                <TD>hace 18 horas</TD>
              </TR>
            </AdminTable>

          </div>
        </div>
      </div>

    </div>

  )
}